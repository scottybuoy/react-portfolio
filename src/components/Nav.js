import React from 'react';


const styles = {
    navbar: {
        background: 'blue',
        height: '100px'
    }
}


function Nav({ currentPage, handlePageChange }) {
    return (
        <div className="container-fluid" >
            <div className="row d-flex align-items-center" style={styles.navbar}>
                <div className="col-6">
                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>scott everett</a>
                </div>
                <div className="col-2 d-flex justify-content-end">
                    <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>portfolio</a>
                </div>
                <div className="col-2 d-flex justify-content-end">
                <a href="#about" onClick={() => handlePageChange('About')}>about</a>
                </div>
                <div className="col-2 d-flex justify-content-end">
                <a href="#contact" onClick={() => handlePageChange('Contact')}>contact</a>
                </div>
            </div>
            
        </div>
    )
}

export default Nav;