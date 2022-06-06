import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
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
  const { data: session } = useSession();
  const router = useRouter();
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
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signInHandler = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
    });

    if (result.error) {
      toast.error(result.error);
      return;
    }

    router.replace('/products');
  };

  const logoutHandler = () => {
    signOut();
  };

  return (
    <div className={classes['form-container']}>
      {session && (
        <>
          <h2>Until next time</h2>
          <button className={classes['logout-button']} onClick={logoutHandler}>
            Logout
          </button>
        </>
      )}
      {!session && (
        <>
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
        </>
      )}
    </div>
  );
};

export default AuthForm;
