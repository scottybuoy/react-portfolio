import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Home />;
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
            {renderPage()}
        </div>
    );
}
