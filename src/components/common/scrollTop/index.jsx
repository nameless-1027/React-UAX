import React, { useEffect, useState } from 'react';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={handleScrollTop}
                    className='btn btn-scroll-top'
                >
                    ↑
                </button>
            )}
        </>
    );
}

export default ScrollToTopButton;