import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import projects from './projects';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio projects={projects} />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <div className='d-flex justify-content-center'>
                {renderPage()}
            </div>
            <Footer />
        </div>
    );
}
