import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';
import { useGlitch } from 'react-powerglitch'

//primary is filled in, outline is just an outline around button 
const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    link,
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    //defaults for button style and size
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    //const glitch = useGlitch({ 'playMode?': 'hover' });

    if (link) {
        return (
            <Link to={link} className='btn-mobile'>
                <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                >
                    {children}
                </button>
            </Link>
        );
    } else {
        return (
            < button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`
                }
                onClick={onClick}
                type={type}
            >
                {children}
            </button >
        );
    }
}
