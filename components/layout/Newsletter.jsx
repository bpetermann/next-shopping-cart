import React, { useState } from 'react';
import classes from './Newsletter.module.css';
import { AiOutlineMail } from 'react-icons/ai';
import { toast } from 'react-toastify';

async function addNewsletterSubscription(enteredEmail, interestedIn) {
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email: enteredEmail, interestedIn }),
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

const Newsletter = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [mfashion, setMFashion] = useState(false);
  const [wfashion, setWFashion] = useState(true);

  const registrationHandler = async (e) => {
    e.preventDefault();
    const interestedIn = { mfashion: mfashion, wfashion: wfashion };

    try {
      const result = await addNewsletterSubscription(
        enteredEmail,
        interestedIn
      );
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={classes.container}>
      <h2>JOIN OUR NEWSLETTER!</h2>
      <div className={classes['form-container-wrapper']}>
        <form
          className={classes['form-container']}
          onSubmit={registrationHandler}
        >
          <input
            className={classes.emailadress}
            type='email'
            id='email'
            name='email'
            placeholder='Your Email'
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
          />
          <h3>I&apos;m mostly interested in</h3>
          <div>
            <input
              type='checkbox'
              id='wfashion'
              name='wfashion'
              value='wfashion'
              checked={wfashion}
              onChange={(e) => setWFashion(e.target.checked)}
            />
            <label htmlFor='wfashion'>Women&apos;s Fahsion</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='mfashion'
              name='mfashion'
              value='mfashion'
              checked={mfashion}
              onChange={(e) => setMFashion(e.target.checked)}
            />
            <label htmlFor='mfashion'>Men&apos;s Fashion</label>
          </div>
          <button type='submit' className={classes.button}>
            <AiOutlineMail size={22} className={classes['newsletter-icon']} />
            <span>Add my Email</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
