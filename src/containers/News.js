import React from 'react';

export default function News({ news }) {
    return (
        <div className="logotel-news">
            {
                news.map((n, i) =>
                    <div className="logotel-news--item" key={"news-" + i}>
                        <img
                            className="logotel-news--item--img"
                            src={n.src}
                            alt="" />
                        <div className="logotel-news--item--text">
                            <div className="logotel-news--item--text--date font-very-small weight-700">{n.date}</div>
                            <div className="logotel-news--item--text--title pink font-large weight-700">{n.title}</div>
                            <div className="logotel-news--item--text--content">{n.text}</div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};