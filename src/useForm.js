import React, { useState } from "react";

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    error: "CEP inválido",
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: "E-mail inválido",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const validate = (value) => {
    if (type === false) return true; //o campo opcional não mostra mensagem caso esteja em branco
    if (value.length === 0) {
      setError("O campo precisa ser preenchido");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].error);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = (event) => {
    if (error) validate(event.target.value);
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
