import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: nameInputIsInValid,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHanlder: nameInputBlurHanlder,
    reset: resetNameInput,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputIsInValid,
    valueChangeHandler: EmailInputChangeHandler,
    inputBlurHanlder: EmailInputBlurHanlder,
    reset: resetEmailInput,
  } = useInput((val) => val.includes("@"));

  // useEffect(() => {
  const formIsValid = enteredNameIsValid && enteredEmailIsValid ? true : false;
  // },[enteredNameIsValid])

  const formSubmissionHanler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHanler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHanlder}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name must be more than one character !</p>
        )}
      </div>
      <hr />
      <div className={emailInputClasses}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          onChange={EmailInputChangeHandler}
          value={enteredEmail}
          onBlur={EmailInputBlurHanlder}
        />
        {emailInputIsInValid && (
          <p className="error-text">Enter a Valid E-mail!</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
