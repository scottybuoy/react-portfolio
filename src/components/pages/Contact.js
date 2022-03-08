import React, { useState } from 'react';
import '../../styles/contact.css'
import { validateEmail } from '../../utils/helpers';

const styles = {
  contact: {
    height: '75vh',
  },
};




export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else {
      setEmail(inputValue);
    }

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage('Please enter your name');
      return;
    }
    if (!validateEmail(email) || !email) {
      setErrorMessage('Please enter a valid email');
      return;
    }

    setName('');
    setEmail('');
    setErrorMessage('');

  };


  return (
    <div className='row d-flex align-items-center form-div pb-5' style={styles.contact}>
      {/* <div className='col-12 col-md-6'>
        <h3>Hello!</h3>
        <p>Please feel free to contact me regarding any questions or inqueries.</p>
      </div> */}
      <div className='col-12'>
        <div>
          <h3>Hello!</h3>
          <p>Please feel free to contact me with any inqueries you may have!</p>
        </div>
        <form id='contact-form'>
          <input
            className='form-control'
            type='text'
            id='name'
            name='name' 
            placeholder='Name'
            onChange={handleInputChange}
            /><br></br>
          <input
            className='form-control'
            type='text'
            id='email-input'
            name='email'
            placeholder='Email'
            onChange={handleInputChange}
            /><br></br>
          <textarea
            className='form-control'
            id='message'
            placeholder='Message'
          /><br></br>
          <p id='error-message'>{errorMessage}</p>
          <button id='contact-button' type='submit' onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </div>
    
  );
}

