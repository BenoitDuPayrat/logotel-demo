import React, { useState, useEffect } from 'react';

export default function Slider() {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((slide + 1) % 4);
    };

    const prevSlide = () => {
        setSlide(slide - 1 < 0 ? 3 : slide - 1);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 3000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="logotel-slider">
            <div className="logotel-slider--left-button" onClick={_ => prevSlide()}>
                <img src={`${process.env.PUBLIC_URL}/chevron sinistra.svg`} />
            </div>
            <div className="logotel-slider--right-button" onClick={_ => nextSlide()}>
                <img src={`${process.env.PUBLIC_URL}/chevron destra.svg`} />
            </div>
            <div className="logotel-slider--controls">
                <div
                    className={"logotel-slider--controls--button" + (slide == 0 ? " full-opacity" : "")}
                    onClick={_ => setSlide(0)}
                >1</div>
                <div
                    className={"logotel-slider--controls--button" + (slide == 1 ? " full-opacity" : "")}
                    onClick={_ => setSlide(1)}
                >2</div>
                <div
                    className={"logotel-slider--controls--button" + (slide == 2 ? " full-opacity" : "")}
                    onClick={_ => setSlide(2)}
                >3</div>
                <div
                    className={"logotel-slider--controls--button" + (slide == 3 ? " full-opacity" : "")}
                    onClick={_ => setSlide(3)}
                >4</div>
            </div>
            <img
                className={"logotel-slider--image" + (slide != 0 ? " hidden" : "")}
                src={`${process.env.PUBLIC_URL}/slider-1.png`}
                alt="slider-1" />
            <img
                className={"logotel-slider--image" + (slide != 1 ? " hidden" : "")}
                src={`${process.env.PUBLIC_URL}/slider-2.jpg`}
                alt="slider-2" />
            <img
                className={"logotel-slider--image" + (slide != 2 ? " hidden" : "")}
                src={`${process.env.PUBLIC_URL}/slider-3.jpg`}
                alt="slider-3" />
            <img
                className={"logotel-slider--image" + (slide != 3 ? " hidden" : "")}
                src={`${process.env.PUBLIC_URL}/slider-4.jpg`}
                alt="slider-4" />
        </div>
    );
}