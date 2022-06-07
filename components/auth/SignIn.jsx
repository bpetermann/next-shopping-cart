import classes from './SignIn.module.css';
import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const SignIn = ({
  signUpForm,
  setSignUpForm,
  setFormData,
  signIn,
  email,
  password,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    signIn();
  };

  if (signUpForm) {
    return (
      <>
        <h2>Welcome back</h2>
        <button
          onClick={setSignUpForm}
          className={classes['enable-login-button']}
        >
          Sign In
        </button>
      </>
    );
  }

  return (
    <>
      <h2>Welcome back</h2>
      <form className={classes['form']} onSubmit={onSubmit}>
        <input
          type='email'
          className={classes['emailInput']}
          placeholder='Email'
          id='email'
          value={email}
          onChange={onChangeHandler}
          required
        />

        <div className={classes['passwordInputDiv']}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            id='password'
            className={classes['passwordInput']}
            value={password}
            onChange={onChangeHandler}
            required
          />

          <AiOutlineEye
            onClick={() => setShowPassword((prevState) => !prevState)}
            size={32}
            className={classes['showPassword']}
          />
        </div>

        <div className={classes['button-container']}>
          <button className={classes['login-button']}>Sign In</button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
