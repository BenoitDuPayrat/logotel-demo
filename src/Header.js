import React, { Component } from 'react';

class Header extends Component {
    render() {
        return <div className="logotel-header">
            <div className="logotel-header--card">
                <img src={`${process.env.PUBLIC_URL}/LOGO BIANCO.svg`} alt="logo" />
            </div>
            <div className="logotel-header--spacer" />
            <div className="logotel-header--card">SLIDER</div>
            <div className="logotel-header--card">NEWS</div>
            <div className="logotel-header--card">PERCORSO</div>
            <div className="logotel-header--card">TAB</div>
        </div>;
    }
}

export default Header;