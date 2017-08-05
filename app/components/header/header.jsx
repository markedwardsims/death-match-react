import React from 'react';
import 'dmc/css/components/header.min.css';

export const Header = (props) => {

    return (
        <header className="header">
            <h1 className="header__title">
                Death
                <span className="header__logo"></span>
                Match
            </h1>
        </header>
    );

};

Header.displayName = 'Header';

export default Header;

