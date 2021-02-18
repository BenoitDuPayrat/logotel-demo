import React from 'react';

export default function Footer() {
    return (
        <div className="logotel-footer">
            <img className="logotel-footer--logo" src={`${process.env.PUBLIC_URL}/LOGO BIANCO.svg`} />
            <div className="logotel-footer--links">
                {"Terms & conditions | Privacy policy | Cookies policy | Copyrights Notification"}
            </div>
            <div>{"Copyright © 2020 Logotel. All rights reserved."}</div>
        </div>
    );
}