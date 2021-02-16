import React, { Component } from 'react';
import Header from './Header';
import Slider from './containers/Slider';
import News from './containers/News';
import Timeline from './containers/Timeline';
import Tabs from './containers/Tabs';
import Footer from './Footer';
import './style/App.css';

class App extends Component {
    render() {
        return <div className="app">
            <Header />
            <Slider name="Slider" />
            <News name="News" />
            <Timeline name="Timeline" />
            <Tabs name="Tabs" />
            <Footer name="Footer" />
        </div>
    };
}

export default App;
