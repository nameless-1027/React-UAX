import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';

function Theme() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            style={{
                color: theme === 'light' ? '#000' : '#fff',
            }}
            aria-label="Toggle Theme"
            className="btn btn-theme"
        >
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} line-height-0 flex items-center justify-center`}></i>
        </button>
    );
}

export default Theme;