import React from 'react';
import Header from './Header';
import Slider from './containers/Slider';
import News from './containers/News';
import Timeline from './containers/Timeline';
import Tabs from './containers/Tabs';
import Footer from './Footer';
import './style/App.css';

export default function App() {
    const news = [
        {
            src: `${process.env.PUBLIC_URL}/news-1.png`,
            title: "Lorem ipsum dolor sit amet, consectetuer",
            date: "13.09.2020",
            text: "Nam consequat rutrum erat vitae pharetra. Maecenas ut metus non ipsum bibendum aliquet. Aenean non mi et ligula venenatis blandit non sit amet leo. In sit amet velit tincidunt, faucibus velit in, pretium ipsum. Quisque facilisis dictum volutpat."
        },
        {
            src: `${process.env.PUBLIC_URL}/news-2.png`,
            title: "No nummy nibh: euismod tin",
            date: "12.09.2020",
            text: "Nulla eget neque vitae nunc dignissim elementum. Fusce vel bibendum justo. Suspendisse at dignissim mauris. Donec non convallis felis. Nullam rhoncus ante diam, vitae ullamcorper urna eleifend sed. Fusce sodales augue eu vehicula porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut auctor accumsan erat id efficitur. Duis aliquam libero vehicula, laoreet libero eget, convallis purus. Donec feugiat mollis condimentum."
        },
        {
            src: `${process.env.PUBLIC_URL}/news-3.png`,
            title: "Lorem ipsum dolor sit amet, consectetuer",
            date: "11.09.2020",
            text: "Donec fringilla dui orci, quis bibendum turpis finibus sit amet. Curabitur faucibus arcu sit amet volutpat ornare."
        }
    ]
    return (
        <div className="app font-normal weight-500">
            <Header />
            <Slider />
            <News news={news} />
            <div className="slogan-1">
                <img className="slogan-1--image" src={`${process.env.PUBLIC_URL}/onda-bianco-grigio.svg`} alt="" />
                <div className="slogan-1--text weight-700 font-title pink">Sed diam nonummy nibh euismod tincidunt?</div>
            </div>
            <Timeline />
            <div className="slogan-2">
                <img className="slogan-2--image" src={`${process.env.PUBLIC_URL}/onda-grigio-bianco.svg`} alt="" />
                <div className="slogan-2--text weight-700 font-title pink">Lorem ipsum dolor sit amet consectetuer?</div>
            </div>
            <Tabs />
            <Footer />
        </div>
    );
}