import React, { useRef, useImperativeHandle, forwardRef } from 'react';

function Tabs({ }, ref) {
    const tabsRef = useRef();

    useImperativeHandle(ref, () => ({
        scrollToTabs: _ => {
            tabsRef.current.scrollIntoView({ behavior: 'smooth' });
        },
        get tabs() {
            return tabsRef.current;
        },
    }));
    return (
        <div className="logotel-tabs" ref={tabsRef}>
            <img className="logotel-tabs--background" src={`${process.env.PUBLIC_URL}/grafica sfondo.svg`} alt="" />
            <div className="logotel-tabs--card logotel-tabs--card-pink">
                <div className="logotel-tabs--card--title weight-700 font-subtitle pink">TAB ROSA</div>
                <hr className="logotel-tabs--card--separator pink-separator" />
                <div className="logotel-tabs--card--image" >
                    <img src={`${process.env.PUBLIC_URL}/sveglia.svg`} alt="" />
                </div>
                <div className="logotel-tabs--card--text font-small">
                    Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
                </div>
                <div className="logotel-tabs--card--cta weight-700 bg-pink">
                    CALL TO ACTION
                </div>
            </div>
            <div className="logotel-tabs--card logotel-tabs--card-yellow">
                <div className="logotel-tabs--card--title weight-700 font-subtitle yellow">TAB GIALLA</div>
                <hr className="logotel-tabs--card--separator yellow-separator" />
                <div className="logotel-tabs--card--image" >
                    <img src={`${process.env.PUBLIC_URL}/target.svg`} alt="" />
                </div>
                <div className="logotel-tabs--card--text font-small">
                    Ut wisi enim ad minim veniam, quis nostrud exerci magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
                </div>
                <div className="logotel-tabs--card--cta weight-700 bg-yellow">
                    CALL TO ACTION
                </div>
            </div>
            <div className="logotel-tabs--card logotel-tabs--card-turquoise">
                <div className="logotel-tabs--card--title weight-700 font-subtitle turquoise">TAB TURCHESE</div>
                <hr className="logotel-tabs--card--separator turquoise-separator" />
                <div className="logotel-tabs--card--image" >
                    <img src={`${process.env.PUBLIC_URL}/razzo.svg`} alt="" />
                </div>
                <div className="logotel-tabs--card--text font-small">
                    Enim ad minim veniam, quis nostrud exerci tation ullamcorper. erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam era.
                </div>
                <div className="logotel-tabs--card--cta weight-700 bg-turquoise">
                    CALL TO ACTION
                </div>
            </div>
        </div>
    );
}

export default Tabs = forwardRef(Tabs);