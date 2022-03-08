import React from 'react';
import '../styles/nav.css';


const styles = {
    navbar: {
        background: 'rgb(250, 250, 250)',
        height: '100px'
    },
    links: {
        textDecoration: 'none',
        color: 'rgb(130, 130, 130)',
    }
}


function Nav({ currentPage, handlePageChange }) {
    return (
        <div className="container-fluid cust-nav-cont">
            <div className="row d-flex align-items-center custom-nav" style={styles.navbar}>
                <div className="col-6">
                    <a href="#portfolio" style={styles.links} onClick={() => handlePageChange('Portfolio')}>
                        <img src='images/logo.png' alt='Scott Everett logo' width='150px'></img>
                    </a>
                </div>
                <div className="col-2 d-flex justify-content-center">
                    <a href="#portfolio"
                        style={styles.links}
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
                        >
                        portfolio
                    </a>
                </div>
                <div className="col-2 d-flex justify-content-center">
                    <a href="#about"
                        style={styles.links}
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}
                        >
                        about
                    </a>
                </div>
                <div className="col-2 d-flex justify-content-center">
                    <a href="#contact"
                        style={styles.links}
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                        >
                        contact
                    </a>
                </div>
            </div>
            <hr className='custom-hr'></hr>
        </div>
    )
}

export default Nav;