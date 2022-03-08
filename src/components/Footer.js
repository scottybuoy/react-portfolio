import React from 'react';
import '../styles/footer.css';

const styles = {
    footer: {
        height: '150px',
    }
}

function Footer() {
    return (
        <div className='d-flex justify-content-center align-items-center custom-footer' style={styles.footer}>
            <a href='https://github.com/scottybuoy'>
                <img className='mx-5' src='images/footer-gh-icon.png' alt='GitHub icon' width='40px'></img>
            </a>
            <a href='/'>
            <img src='images/logo-white.png' alt='Scott Everett logo' width='150px'></img>
            </a>
            <a href='https://www.linkedin.com/in/scott-everett-web-development/'>
            <img className='mx-5' src='images/footer-li-icon.png' alt='GitHub icon' width='40px'></img>
            </a>
        </div>
    )
};

export default Footer;