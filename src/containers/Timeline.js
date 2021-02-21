import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';

function TimelineTextContainer(className) {
    return (
        <div className="logotel-timeline--rectangle--content">
            <span className={`logotel-timeline--rectangle--content--title font-subtitle weight-700 ${className}`}>
                Lorem Ipsum
            </span>
            <span>
                {
                    `Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci tati on ullamcorper.
                            
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.`
                }
            </span>
        </div>
    );
}

function Timeline({ }, ref) {
    const [activeSection, setActiveSection] = useState(0);
    const timelineRef = useRef();

    useImperativeHandle(ref, () => ({
        scrollToTimeline: _ => {
            timelineRef.current.scrollIntoView({ behavior: 'smooth' });
        },
        get timeline() {
            return timelineRef.current;
        },
    }));

    return (
        <div className="logotel-timeline" ref={timelineRef}>
            <div className="logotel-timeline--area">
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--right">
                    <div className="logotel-timeline--label weight-700 weight-700 font-subtitle logotel-timeline--label--left turquoise-light">
                        <span className="weight-700  font-huge">1.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--left bg-turquoise-light bg-turquoise-light--shadow"
                        onClick={_ => setActiveSection(0)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-1.svg`} alt="" />
                    </div>
                    <div className="logotel-timeline--rectangle--text font-small">
                        {
                            activeSection === 0 ? TimelineTextContainer("turquoise-light") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--left">
                    <div className="logotel-timeline--label weight-700 weight-700 font-subtitle logotel-timeline--label--right yellow-light">
                        <span className="weight-700  font-huge">2.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--right bg-yellow-light bg-yellow-light--shadow"
                        onClick={_ => setActiveSection(1)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-2.svg`} alt="" />
                    </div>
                    <div className="logotel-timeline--rectangle--text font-small">
                        {
                            activeSection === 1 ? TimelineTextContainer("yellow-light") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--right">
                    <div className="logotel-timeline--label weight-700 weight-700 font-subtitle logotel-timeline--label--left pink-light">
                        <span className="weight-700  font-huge">3.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--left bg-pink-light bg-pink-light--shadow"
                        onClick={_ => setActiveSection(2)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-3.svg`} alt="" />
                    </div>
                    <div className="logotel-timeline--rectangle--text font-small">
                        {
                            activeSection === 2 ? TimelineTextContainer("pink-light") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--left">
                    <div className="logotel-timeline--label weight-700 weight-700 font-subtitle logotel-timeline--label--right turquoise-light">
                        <span className="weight-700  font-huge">4.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--right bg-turquoise-light bg-turquoise-light--shadow"
                        onClick={_ => setActiveSection(3)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-4.svg`} alt="" />
                    </div>
                    <div className="logotel-timeline--rectangle--text font-small">
                        {
                            activeSection === 3 ? TimelineTextContainer("turquoise-light") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--right">
                    <div className="logotel-timeline--label weight-700 weight-700 font-subtitle logotel-timeline--label--left yellow-light">
                        <span className="weight-700  font-huge">5.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--left bg-yellow-light bg-yellow-light--shadow"
                        onClick={_ => setActiveSection(4)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-5.svg`} alt="" />
                    </div>
                    <div className="logotel-timeline--rectangle--text font-small">
                        {
                            activeSection === 4 ? TimelineTextContainer("yellow-light") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--left">
                    <div className="logotel-timeline--label weight-700 weight-700 font-subtitle logotel-timeline--label--right pink-light">
                        <span className="weight-700  font-huge">6.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--right bg-pink-light bg-pink-light--shadow"
                        onClick={_ => setActiveSection(5)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-6.svg`} alt="" />
                    </div>
                    <div className="logotel-timeline--rectangle--text font-small">
                        {
                            activeSection === 5 ? TimelineTextContainer("pink-light") : null
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Timeline = forwardRef(Timeline);