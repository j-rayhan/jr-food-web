import React from 'react';
import homeImg from '../assets/images/home-img.png';

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
            <section id="home" className="home">
                <div className="content">
                    <h3>food made with love</h3>
                    <p>
                        Getting food delivered right at your doorstep anytime anywhere is easier
                        than ever. Thanks to all the incredible on-demand delivery apps available
                        nowadays. All you need to do is download one of the best food delivery apps,
                        make a selection, place an order, and make payment via your smartphone, or
                        pay on delivery.
                    </p>
                    <a href="#order" className="btn">
                        order now
                    </a>
                </div>

                <div className="image">
                    <img src={homeImg} alt="home-img" />
                </div>
            </section>
        </div>
    );
};

export default Main;
