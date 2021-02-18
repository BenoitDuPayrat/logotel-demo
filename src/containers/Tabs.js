import React from 'react';

export default function Tabs() {
    return (
        <div className="logotel-tabs">
            <img className="logotel-tabs--background" src={`${process.env.PUBLIC_URL}/grafica sfondo.svg`} />
            <div className="logotel-tabs--card logotel-tabs--card-pink">
                <div className="logotel-tabs--card--title color-pink">TAB ROSA</div>
                <hr className="logotel-tabs--card--separator" />
                <div className="logotel-tabs--card--image" >
                    <img src={`${process.env.PUBLIC_URL}/sveglia.svg`} />
                </div>
                <div className="logotel-tabs--card--text">
                    Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
                </div>
                <div className="logotel-tabs--card--cta background-color-pink">
                    CALL TO ACTION
                </div>
            </div>
            <div className="logotel-tabs--card logotel-tabs--card-yellow">
                <div className="logotel-tabs--card--title color-yellow">TAB GIALLA</div>
                <hr className="logotel-tabs--card--separator" />
                <div className="logotel-tabs--card--image" >
                    <img src={`${process.env.PUBLIC_URL}/target.svg`} />
                </div>
                <div className="logotel-tabs--card--text">
                    Ut wisi enim ad minim veniam, quis nostrud exerci magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
                </div>
                <div className="logotel-tabs--card--cta background-color-yellow">
                    CALL TO ACTION
                </div>
            </div>
            <div className="logotel-tabs--card logotel-tabs--card-turquoise">
                <div className="logotel-tabs--card--title color-turquoise">TAB TURCHESE</div>
                <hr className="logotel-tabs--card--separator" />
                <div className="logotel-tabs--card--image" >
                    <img src={`${process.env.PUBLIC_URL}/razzo.svg`} />
                </div>
                <div className="logotel-tabs--card--text">
                    Enim ad minim veniam, quis nostrud exerci tation ullamcorper. erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam era.
                </div>
                <div className="logotel-tabs--card--cta background-color-turquoise">
                    CALL TO ACTION
                </div>
            </div>
        </div>
    );
}