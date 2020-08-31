import React from 'react';
import './Logo.scss';

export default function Logo(): React.ReactElement {
    return (
        <div className="logoContainer">
            <img
                src="/favicon-32x32.png"
            />
        </div>
    );
}