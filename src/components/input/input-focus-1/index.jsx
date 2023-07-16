import React from "react";
import "./input-focus-1.scss";

const InputFocus1 = () => {
  return (
    <div className="input-focus-1">
      <h3>Focus and make placeholder move to the border (input-focus-1)</h3>
      <div className="form">
        <input
          type="text"
          className="form__input"
          placeholder=" "
          autoComplete="off"
        />
        <label htmlFor="email" className="form__label">
          Email
        </label>
      </div>
    </div>
  );
};

export default InputFocus1;
