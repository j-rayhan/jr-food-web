import * as React from 'react';

const ScrollToTopButton: React.FC = () => {
    const [visible, setVisible] = React.useState<boolean>(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
       in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div style={{ display: visible ? 'inline' : 'none' }}>
            <div onClick={scrollToTop} role="button" aria-hidden>
                <span className="fas fa-angle-up" id="scroll-top" />
            </div>
        </div>
    );
};

export default ScrollToTopButton;
