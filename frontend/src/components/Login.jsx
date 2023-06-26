import React, { useState } from 'react';
import data from '../constants/user.json';
import { Navigate, useNavigate } from 'react-router-dom';

const styles = {
  authFormContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  authForm: {
    width: '420px',
    boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.16)',
    paddingTop: '30px',
    paddingBottom: '20px',
    borderRadius: '8px',
    backgroundColor: 'white',
  },
  authFormContent: {
    paddingLeft: '12%',
    paddingRight: '12%',
  },
  authFormTitle: {
    textAlign: 'center',
    marginBottom: '1em',
    fontSize: '24px',
    color: 'rgb(34, 34, 34)',
    fontWeight: 800,
  },
  formGroup: {
    marginBottom: '2em',
  },
  label: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgb(34, 34, 34)',
  },
  formControl: {
    marginTop: '0.5em',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.5em',
    width: '100%',
  },
  dGrid: {
    gap: '2em',
    marginTop: '1.5em',
    display: 'grid',
  },
  submitButton: {
    type: 'submit',
    backgroundColor: 'blue',
    color: 'white',
    padding: '0.5em 1em',
    borderRadius: '4px',
    border: 'none',
  },
  errorMessage: {
    color: 'red',
    marginTop: '1em',
    textAlign: 'center',
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email !== data.email || password !== data.password) {
      setErrorMessage('Invalid password or username');
    } else {
      navigate('/update');
    }
  };

  return (
    <div style={styles.authFormContainer}>
      <form style={styles.authForm}>
        <div style={styles.authFormContent}>
          <h3 style={styles.authFormTitle}>Sign In</h3>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email address</label>
            <input
              type="email"
              style={styles.formControl}
              placeholder="Enter email"
              id="email"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              style={styles.formControl}
              placeholder="Enter password"
              id="password"
            />
          </div>
          <div style={styles.dGrid}>
            <button style={styles.submitButton} onClick={handleClick}>
              Submit
            </button>
          </div>
          {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
