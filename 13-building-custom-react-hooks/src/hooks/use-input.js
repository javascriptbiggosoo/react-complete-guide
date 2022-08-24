import { useState } from "react";

/**
 *
 * @param {function} valitateValue 입력값을 인자로 받아 검증한 후 true/false를 반환하는 함수
 * @returns
 */
const useInput = (valitateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = valitateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (ev) => {
    setEnteredValue(ev.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
