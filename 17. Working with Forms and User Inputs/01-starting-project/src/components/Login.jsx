// import { useState } from 'react';

import { useRef } from "react";

export default function Login() {
  // const [enteredValues, setEnteredValues] = useState({
  //   email: '',
  //   password: '',
  // });

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log(enteredEmail, enteredPassword);

    // console.log('Submitted');
    // console.log(enteredValues);
  }

  // function handleInputChange(identifier, event) {
  //   setEnteredValues(prevValues => ({ ...prevValues, [identifier]: event.target.value }));
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
            // onChange={(e) => handleInputChange('email', e)}
            // value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
            // onChange={(e) => handleInputChange('password', e)}
            // value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
