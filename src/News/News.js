import React, { Component } from 'react';

class News extends Component {
    render() {
        return <h1 className="logotel-news">Hello, {this.props.name}</h1>;
    }
}

export default News;