import { useReducer } from "react";

const intialState = { value: "", isTouched: false };

const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value:state.value
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }

  return intialState;
};

const useInput = (validateFun) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, intialState);

  const valueIsValid = validateFun(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };

  const valueBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
