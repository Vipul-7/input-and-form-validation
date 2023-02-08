import useInput from "../hooks/use-input2";

const BasicForm = (props) => {
  //first name
  const {
    value: enteredFn,
    valueIsValid: fnIsValid,
    hasError: fnIsInValid,
    valueChangeHandler: fnChangeHandler,
    valueBlurHandler: fnBlurHandler,
    reset: resetFn,
  } = useInput((val) => val.trim() !== "");

  //last name
  const {
    value: enteredLn,
    valueIsValid: lnIsValid,
    hasError: lnIsInValid,
    valueChangeHandler: lnChangeHandler,
    valueBlurHandler: lnBlurHandler,
    reset: resetLn,
  } = useInput((val) => val.trim() !== "");

  //email
  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailIsInValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((val) => val.includes("@"));

  const formIsValid = fnIsValid && lnIsValid && emailIsValid ? true : false;

  const submitHandler = (event) => {
    event.preventDefault();

    if(!formIsValid)
    return ;

    console.log(enteredFn,enteredLn,enteredEmail);

    resetFn();
    resetLn();
    resetEmail();
  };

  const fnCssClass = fnIsInValid ? "form-control invalid" : "form-control";
  const lnCssClass = lnIsInValid ? "form-control invalid" : "form-control";
  const emailCssClass = emailIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fnCssClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={fnChangeHandler}
            onBlur={fnBlurHandler}
            value={enteredFn}
          />
          {fnIsInValid && (
            <p className="error-text">First Name must not be empty!</p>
          )}
        </div>
        <div className={lnCssClass}>
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            onChange={lnChangeHandler}
            onBlur={lnBlurHandler}
            value={enteredLn}
          />
          {lnIsInValid && (
            <p className="error-text">Last Name must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailCssClass}>
        <label htmlFor="email">E-mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailIsInValid && <p className="error-text">Enter a valid Email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
