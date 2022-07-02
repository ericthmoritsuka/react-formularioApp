import React from "react";

//usar o useState no APP. É possível passar value e required dentro do componente (por causa do ...props)

const InputText = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={(event) => setValue(event.target.value)}
        {...props}
      />
    </>
  );
};

export default InputText;
