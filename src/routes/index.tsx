import React from 'react';

const Main: React.FC = () => {
    const [menuClass, setMenuClass] = React.useState<string>('');
    const [navbarClass, setNavbarClass] = React.useState<string>('');
    return (
        <div>
            {/* Header section */}
            <header>
                <a href="https://" className="logo">
                    <i className="fas fa-utensils" />
                    food
                </a>
                <div
                    id="menu-bar"
                    role="button"
                    aria-hidden="true"
                    className={`fas fa-bars ${menuClass}`}
                    onClick={() => {
                        setMenuClass((prev) => (prev === 'fa-times' ? '' : 'fa-times'));
                        setNavbarClass((prev) => (prev === 'active' ? '' : 'active'));
                    }}
                />
                <nav className={`navbar ${navbarClass}`}>
                    <a href="#home">home</a>
                    <a href="#suitability">suitability</a>
                    <a href="#popular">popular</a>
                    <a href="#gallery">gallery</a>
                    <a href="#review">review</a>
                    <a href="#order">order</a>
                </nav>
            </header>
            {/* Home section */}
            <h1>start ....</h1>
        </div>
    );
};

export default Main;
