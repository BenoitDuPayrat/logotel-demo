import React, { useState } from 'react';

function TimelineTextContainer(className) {
    console.log(className);
    return (
        <div className="logotel-timeline--rectangle--content">
            <span className={`logotel-timeline--rectangle--content--title ${className}`}>
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
                    <div className="logotel-timeline--label logotel-timeline--label--left logotel-timeline--color-0">
                        <span className="logotel-timeline--label--title">1.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--left logotel-timeline--bcolor-0"
                        onClick={_ => setActiveSection(0)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-1.svg`} alt="Logotel timeline logo 1" />
                    </div>
                    <div className="logotel-timeline--rectangle--text">
                        {
                            activeSection === 0 ? TimelineTextContainer("logotel-timeline--color-0") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--left">
                    <div className="logotel-timeline--label logotel-timeline--label--right logotel-timeline--color-1">
                        <span className="logotel-timeline--label--title">2.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--right logotel-timeline--bcolor-1"
                        onClick={_ => setActiveSection(1)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-2.svg`} alt="Logotel timeline logo 2" />
                    </div>
                    <div className="logotel-timeline--rectangle--text">
                        {
                            activeSection === 1 ? TimelineTextContainer("logotel-timeline--color-1") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--right">
                    <div className="logotel-timeline--label logotel-timeline--label--left logotel-timeline--color-2">
                        <span className="logotel-timeline--label--title">3.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--left logotel-timeline--bcolor-2"
                        onClick={_ => setActiveSection(2)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-3.svg`} alt="Logotel timeline logo 3" />
                    </div>
                    <div className="logotel-timeline--rectangle--text">
                        {
                            activeSection === 2 ? TimelineTextContainer("logotel-timeline--color-2") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--left">
                    <div className="logotel-timeline--label logotel-timeline--label--right logotel-timeline--color-0">
                        <span className="logotel-timeline--label--title">4.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--right logotel-timeline--bcolor-0"
                        onClick={_ => setActiveSection(3)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-4.svg`} alt="Logotel timeline logo 4" />
                    </div>
                    <div className="logotel-timeline--rectangle--text">
                        {
                            activeSection === 3 ? TimelineTextContainer("logotel-timeline--color-0") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--right">
                    <div className="logotel-timeline--label logotel-timeline--label--left logotel-timeline--color-1">
                        <span className="logotel-timeline--label--title">5.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--left logotel-timeline--bcolor-1"
                        onClick={_ => setActiveSection(4)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-5.svg`} alt="Logotel timeline logo 5" />
                    </div>
                    <div className="logotel-timeline--rectangle--text">
                        {
                            activeSection === 4 ? TimelineTextContainer("logotel-timeline--color-1") : null
                        }
                    </div>
                </div>
                <div className="logotel-timeline--rectangle logotel-timeline--rectangle--left">
                    <div className="logotel-timeline--label logotel-timeline--label--right logotel-timeline--color-2">
                        <span className="logotel-timeline--label--title">6.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div
                        className="logotel-timeline--button logotel-timeline--right logotel-timeline--bcolor-2"
                        onClick={_ => setActiveSection(5)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/icon-6.svg`} alt="Logotel timeline logo 6" />
                    </div>
                    <div className="logotel-timeline--rectangle--text">
                        {
                            activeSection === 5 ? TimelineTextContainer("logotel-timeline--color-2") : null
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}