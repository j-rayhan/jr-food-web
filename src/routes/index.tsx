import React from 'react';
import homeImg from '../assets/images/home-img.png';
import boxImg1 from '../assets/images/s-img-1.jpg';
import _boxImg1 from '../assets/images/s-1.png';
import boxImg2 from '../assets/images/s-img-2.jpg';
import _boxImg2 from '../assets/images/s-2.png';
import boxImg3 from '../assets/images/s-img-3.jpg';
import _boxImg3 from '../assets/images/s-3.png';
import boxImg4 from '../assets/images/s-img-4.jpg';
import _boxImg4 from '../assets/images/s-4.png';
import boxImg5 from '../assets/images/s-img-5.jpg';
import _boxImg5 from '../assets/images/s-5.png';
import boxImg6 from '../assets/images/s-img-6.jpg';
import _boxImg6 from '../assets/images/s-6.png';

const speciality = [
    {
        key: '1',
        name: 'tasty burger',
        img1: boxImg1,
        img2: _boxImg1,
    },
    {
        key: '2',
        name: 'tasty pizza',
        img1: boxImg2,
        img2: _boxImg2,
    },
    {
        key: '3',
        name: 'cold ice-cream',
        img1: boxImg3,
        img2: _boxImg3,
    },
    {
        key: '4',
        name: 'cold drinks',
        img1: boxImg4,
        img2: _boxImg4,
    },
    {
        key: '5',
        name: 'tasty sweets',
        img1: boxImg5,
        img2: _boxImg5,
    },
    {
        key: '6',
        name: 'healty breakfast',
        img1: boxImg6,
        img2: _boxImg6,
    },
];
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
                    <a href="#speciality">speciality</a>
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

            {/* suitability section */}
            <section id="speciality" className="speciality">
                <h1 className="heading">
                    our <span>speciality</span>
                </h1>

                <div className="box-container">
                    {speciality.map((item) => (
                        <div className="box" key={item.key}>
                            <img src={item.img1} alt="" className="image" />
                            <div className="content">
                                <img src={item.img2} alt="" />
                                <h3>{item.name}</h3>
                                <p>
                                    All you need to do is download one of the best food delivery
                                    apps, make a selection, place an order, and make payment via
                                    your smartphone, or pay on delivery.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Main;
