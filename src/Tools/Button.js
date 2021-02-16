import React, { Component } from 'react';

class Button extends Component {
    render() {
        return <button className="logotel-button">Test {this.props.name}</button>;
    }
}

export default Button;