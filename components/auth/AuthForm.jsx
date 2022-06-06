import { useState } from 'react';
import classes from './AuthForm.module.css';
import SignUp from './SignUp';
import SignIn from './SignIn';

async function createUser(email, password) {
  const response = await fetch('/api/auth/signUp', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

const AuthForm = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { email, password, confirmPassword } = formData;

  const showSignUpFormHandler = () => {
    setShowSignUpForm((prevState) => !prevState);
  };

  const signUpHandler = async () => {
    const enteredEmail = email;
    const enteredPassword = password;

    try {
      const result = await createUser(enteredEmail, enteredPassword);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const signInHandler = () => {
    console.log(formData);
  };

  return (
    <div className={classes['form-container']}>
      <SignIn
        signUpForm={showSignUpForm}
        setSignUpForm={showSignUpFormHandler}
        email={email}
        password={password}
        setFormData={setFormData}
        signIn={signInHandler}
      />
      <div className={classes['signup-border']}></div>
      <SignUp
        signUpForm={showSignUpForm}
        setSignUpForm={showSignUpFormHandler}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        setFormData={setFormData}
        signUp={signUpHandler}
      />
    </div>
  );
};

export default AuthForm;
