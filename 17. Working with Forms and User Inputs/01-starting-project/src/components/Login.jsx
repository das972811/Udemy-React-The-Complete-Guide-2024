import { useState } from 'react';

import Input from './Input';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email && !enteredValues.email.includes('@');
  
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(identifier, event) {
    setEnteredValues(prevValues =>
      ({ ...prevValues, [identifier]: event.target.value })
    );

    setDidEdit(prevEdit =>
      ({
        ...prevEdit,
        [identifier]: false
      })
    );

  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur('email')}
          onChange={(e) => handleInputChange('email', e)}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email.'}
        />

        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            onChange={(e) => handleInputChange('email', e)}
            value={enteredValues.email}
          />
          <div className="control-error">{emailIsInValid && <p>Please enter a valid email address.</p>}</div>
        </div> */}

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur('password')}
          onChange={(e) => handleInputChange('password', e)}
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password'}
        />

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleInputChange('password', e)}
            value={enteredValues.password}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
