import React, { Component } from 'react';
import Header from './Header';
import Slider from './Slider/Slider';
import News from './News/News';
import Timeline from './Timeline/Timeline';
import Tabs from './Tabs/Tabs';
import Footer from './Footer';
import './App.css';

class App extends Component {
    render() {
        return <div className="App">
            <Header name="Header" />
            <Slider name="Slider" />
            <News name="News" />
            <Timeline name="Timeline" />
            <Tabs name="Tabs" />
            <Footer name="Footer" />
        </div>
    };
}

export default App;
