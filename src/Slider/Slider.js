import React, { Component } from 'react';
import Button from '../Tools/Button';

class Slider extends Component {
    render() {
        return <>
                <h1>Hello, {this.props.name}</h1>
                <Button name="Button"/>
            </>;
    }
}

export default Slider;