import React from 'react';

const styles = {
  about: {
    height: '75vh'
  }
}

export default function About() {
  return (
    <div className='row d-flex justify-content-center align-items-center pb-5' style={styles.about}>
      <div className='col-12 col-md-4 mx-4'>
        <p>I am a web developer currently enrolled in the Full Stack bootcamp through UCB Extended university.</p>
      </div>
      <div className='col-12 col-md-3 d-flex justify-content-center mx-4'>
        <img src='images/avatar.png' width='300px' alt='Placeholder avatar'></img>
      </div>
    </div>
  );
}