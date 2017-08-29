import React from 'react';
import 'dmc/components/header/header.css';
import 'dmc/components/logo/logo.css';

export const Header = (props) => {

    return (
        <header className="dm-header">
            <h1 className="dm-header__title">
                Death
                <span className="dm-logo"></span>
                Match
            </h1>
        </header>
    );

};

Header.displayName = 'Header';

export default Header;

