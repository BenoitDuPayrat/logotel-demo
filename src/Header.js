import React, { useState, useEffect } from 'react';

export default function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset;
            if (currentPosition > 120 && currentPosition > scrollTop) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        window.addEventListener("scroll", onScroll);
        return _ => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <div className={"logotel-header" + (scrolling ? " logotel-header--hidden" : "")}>
            <div className="logotel-header--card">
                <img src={`${process.env.PUBLIC_URL}/LOGO BIANCO.svg`} alt="" />
            </div>
            <div className="logotel-header--spacer" />
            <div className="logotel-header--card">SLIDER</div>
            <div className="logotel-header--card">NEWS</div>
            <div className="logotel-header--card">PERCORSO</div>
            <div className="logotel-header--card">TAB</div>
        </div>
    );
}