import React, { useState } from 'react';

function TimelineTextContainer(className) {
    console.log(className);
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

export default function Timeline() {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div className="logotel-timeline">
            <div className="logotel-timeline--area">
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--right">
                    <div className="logotel-timeline--label weight-700 weight-700 font-subtitle logotel-timeline--label--left turquoise">
                        <span className="weight-700  font-huge">1.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--left bg-turquoise bg-turquoise--shadow"
                        onClick={_ => setActiveSection(0)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-1.svg`} alt="Logotel timeline logo 1" />
                    </div>
                    <div className="logotel-timeline--rectangle--text font-small">
                        {
                            activeSection === 0 ? TimelineTextContainer("turquoise") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--left">
                    <div className="logotel-timeline--label weight-700 weight-700 font-subtitle logotel-timeline--label--right yellow">
                        <span className="weight-700  font-huge">2.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--right bg-yellow bg-yellow--shadow"
                        onClick={_ => setActiveSection(1)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-2.svg`} alt="Logotel timeline logo 2" />
                    </div>
                    <div className="logotel-timeline--rectangle--text font-small">
                        {
                            activeSection === 1 ? TimelineTextContainer("yellow") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--right">
                    <div className="logotel-timeline--label weight-700 weight-700 font-subtitle logotel-timeline--label--left pink">
                        <span className="weight-700  font-huge">3.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--left bg-pink bg-pink--shadow"
                        onClick={_ => setActiveSection(2)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-3.svg`} alt="Logotel timeline logo 3" />
                    </div>
                    <div className="logotel-timeline--rectangle--text font-small">
                        {
                            activeSection === 2 ? TimelineTextContainer("pink") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--left">
                    <div className="logotel-timeline--label weight-700 weight-700 font-subtitle logotel-timeline--label--right turquoise">
                        <span className="weight-700  font-huge">4.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--right bg-turquoise bg-turquoise--shadow"
                        onClick={_ => setActiveSection(3)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-4.svg`} alt="Logotel timeline logo 4" />
                    </div>
                    <div className="logotel-timeline--rectangle--text font-small">
                        {
                            activeSection === 3 ? TimelineTextContainer("turquoise") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--right">
                    <div className="logotel-timeline--label weight-700 weight-700 font-subtitle logotel-timeline--label--left yellow">
                        <span className="weight-700  font-huge">5.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--left bg-yellow bg-yellow--shadow"
                        onClick={_ => setActiveSection(4)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-5.svg`} alt="Logotel timeline logo 5" />
                    </div>
                    <div className="logotel-timeline--rectangle--text font-small">
                        {
                            activeSection === 4 ? TimelineTextContainer("yellow") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--left">
                    <div className="logotel-timeline--label weight-700 weight-700 font-subtitle logotel-timeline--label--right pink">
                        <span className="weight-700  font-huge">6.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--right bg-pink bg-pink--shadow"
                        onClick={_ => setActiveSection(5)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-6.svg`} alt="Logotel timeline logo 6" />
                    </div>
                    <div className="logotel-timeline--rectangle--text font-small">
                        {
                            activeSection === 5 ? TimelineTextContainer("pink") : null
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}