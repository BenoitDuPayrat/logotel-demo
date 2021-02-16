import React, { Component } from 'react';
import Button from '../Tools/Button';

class Slider extends Component {
    render() {
        return <div className="logotel-slider">
            <h1>Hello, {this.props.name}</h1>
            <Button name="Button"/>
            </div>;
    }
}

export default Slider;