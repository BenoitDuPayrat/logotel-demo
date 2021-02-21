import React, { useState, useEffect, useCallback } from 'react';
import { useResize } from './useResize';

function SmallHeader({ onSliderClick, onNewsClick, onTimelineClick, onTabsClick }) {
    const [displayed, setDisplayed] = useState(true);

    return (
        <div className={`logotel-header-small font-large${displayed ? "" : " logotel-header-small--hidden"}`}>
            <img
                className="logotel-header-small--button"
                src={`${process.env.PUBLIC_URL}/burger_icon.svg`}
                alt="Menu button"
                onClick={_ => setDisplayed(!displayed)}
            />
            <img
                className="logotel-header-small--logo"
                src={`${process.env.PUBLIC_URL}/LOGO BIANCO.svg`}
                alt=""
            />
            <div className="logotel-header-small--card" onClick={onSliderClick}>SLIDER</div>
            <div className="logotel-header-small--card" onClick={onNewsClick}>NEWS</div>
            <div className="logotel-header-small--card" onClick={onTimelineClick}>PERCORSO</div>
            <div className="logotel-header-small--card" onClick={onTabsClick}>TAB</div>
        </div>
    );
}

export default function Header({ sliderRef, newsRef, timelineRef, tabsRef }) {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [width, _] = useResize();

    const onSliderClick = useCallback(_ => sliderRef.current.scrollToSlider(), []);
    const onNewsClick = useCallback(_ => newsRef.current.scrollToNews(), []);
    const onTimelineClick = useCallback(_ => timelineRef.current.scrollToTimeline(), []);
    const onTabsClick = useCallback(_ => tabsRef.current.scrollToTabs(), []);

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
        <>
            {
                width > 600 ?
                    <div className={"logotel-header" + (scrolling ? " logotel-header--hidden" : "")}>
                        <div className="logotel-header--card">
                            <img src={`${process.env.PUBLIC_URL}/LOGO BIANCO.svg`} alt="" />
                        </div>
                        <div className="logotel-header--spacer" />
                        <div className="logotel-header--card" onClick={onSliderClick}>SLIDER</div>
                        <div className="logotel-header--card" onClick={onNewsClick}>NEWS</div>
                        <div className="logotel-header--card" onClick={onTimelineClick}>PERCORSO</div>
                        <div className="logotel-header--card" onClick={onTabsClick}>TAB</div>
                    </div>
                    : <SmallHeader
                        onSliderClick={onSliderClick}
                        onNewsClick={onNewsClick}
                        onTimelineClick={onTimelineClick}
                        onTabsClick={onTabsClick}
                    />
            }
        </>
    );
}