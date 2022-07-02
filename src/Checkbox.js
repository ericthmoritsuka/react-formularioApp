import React from "react";

const Checkbox = ({ options, value, setValue }) => {
  function changeHandler({target}) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  };

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={changeHandler}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
