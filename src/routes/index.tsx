import React from 'react';

const Main: React.FC = () => {
    return (
        <div>
            {/* Header section */}
            <header>
                <a href="https://" className="logo">
                    <i className="fas fa-utensils" />
                    food
                </a>

                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#suitability">suitability</a>
                    <a href="#popular">popular</a>
                    <a href="#gallery">gallery</a>
                    <a href="#review">review</a>
                    <a href="#order">order</a>
                </nav>
            </header>
            <h1>start ....</h1>
        </div>
    );
};

export default Main;
