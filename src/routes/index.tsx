import React from 'react';
import homeImg from '../assets/images/home-img.png';
import orderImg1 from '../assets/images/order-img.jpg';
import { ScrollToTopButton } from '../components';
import { speciality, popular, steps, reviews, gallery } from '../utils/data';

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
            {/* popular section */}
            <section id="popular" className="popular">
                <h1 className="heading">
                    most <span>popular</span> foods
                </h1>

                <div className="box-container">
                    {popular.map((item, index) => (
                        <div className="box" key={item.key}>
                            <span className="price"> {item.price}</span>
                            <img src={item.img} alt="" />
                            <h3>{item.name}</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className={`${index % 2 === 0 ? 'far' : 'fas'} fa-star`} />
                            </div>
                            <a href="#order" className="btn">
                                order now
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* step section */}
            <div className="step-container">
                <h1 className="heading">
                    how it <span>works</span>
                </h1>
                <div className="steps">
                    {steps.map((item) => (
                        <div className="box" key={item.key}>
                            <img src={item.img} alt="" />
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* gallery section */}
            <section className="gallery" id="gallery">
                <h1 className="heading">
                    our food <span> gallery</span>
                </h1>
                <div className="box-container">
                    {gallery.map((item) => (
                        <div className="box" key={item.key}>
                            <img src={item.img} alt="" />
                            <div className="content">
                                <h3>{item.name}</h3>
                                <p>
                                    All you need to do is download one of the best food delivery
                                    apps, make a selection, place an order, and make payment via
                                    your smartphone, or pay on delivery.
                                </p>
                                <a href="#order" className="btn">
                                    order now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* review section */}
            <section className="review" id="review">
                <h1 className="heading">
                    our customers <span> reviews</span>
                </h1>
                <div className="box-container">
                    {reviews.map((item, index) => (
                        <div className="box" key={item.key}>
                            <img src={item.img} alt="" />
                            <h3>{item.name}</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className={`${index % 2 === 0 ? 'far' : 'fas'} fa-star`} />
                            </div>
                            <p>
                                All you need to do is download one of the best food delivery apps,
                                make a selection.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            {/* order section */}
            <section className="order" id="order">
                <h1 className="heading">
                    <span>order</span> now{' '}
                </h1>
                <div className="row">
                    <div className="image">
                        <img src={orderImg1} alt="" />
                    </div>

                    <form action="">
                        <div className="inputBox">
                            <input type="text" placeholder="name" />
                            <input type="email" placeholder="email" />
                        </div>
                        <div className="inputBox">
                            <input type="number" placeholder="number" />
                            <input type="text" placeholder="food name" />
                        </div>

                        <textarea name="address" placeholder="address" id="" rows={3} />

                        <input type="submit" value="Order now" className="btn" />
                    </form>
                </div>
            </section>
            {/* footer section */}
            <section className="footer">
                <div className="share">
                    <a href="https://" className="btn">
                        facebook
                    </a>
                    <a href="https://" className="btn">
                        twitter
                    </a>
                    <a href="https://" className="btn">
                        instagram
                    </a>
                    <a href="https://" className="btn">
                        pinterest
                    </a>
                    <a href="https://" className="btn">
                        linkedin
                    </a>
                </div>
                <h1 className="credit">
                    created by <span>mr. j-rayhan</span> | all right reserved!
                </h1>
            </section>
            <ScrollToTopButton />
        </div>
    );
};

export default Main;
