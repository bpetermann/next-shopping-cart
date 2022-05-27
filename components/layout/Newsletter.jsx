import React, { useState } from 'react';
import classes from './Newsletter.module.css';

const Newsletter = () => {
  const [enteredEmail, setEnteredEmail] = useState('');

  const emailInputHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const registrationHandler = (e) => {
    e.preventDefault();

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className={classes.container}>
      <h2>JOIN OUR NEWSLETTER!</h2>
      <form className={classes.formContainer} onSubmit={registrationHandler}>
        <input
          onChange={emailInputHandler}
          className={classes.emailadress}
          type='email'
          id='email'
          name='email'
          placeholder='Your Email'
          value={enteredEmail}
        />
        <h3>I'm mostly interested in</h3>
        <div>
          <input
            type='checkbox'
            id='wfashion'
            name='wfashion'
            value='wfashion'
            defaultChecked='checked'
          />
          <label htmlFor='wfashion'>Women's Fahsion</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='mfashion'
            name='mfashion'
            value='mfashion'
          />
          <label htmlFor='mfashion'>Men's Fashion</label>
        </div>
        <input type='submit' value='Add my Email' className={classes.button} />
      </form>
    </div>
  );
};

export default Newsletter;
