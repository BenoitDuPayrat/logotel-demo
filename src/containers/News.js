import React, { useRef, useImperativeHandle, forwardRef } from 'react';

function News({ news }, ref) {
    const newsRef = useRef();

    useImperativeHandle(ref, () => ({
        scrollToNews: _ => {
            newsRef.current.scrollIntoView({ behavior: 'smooth' });
        },
        get news() {
            return newsRef.current;
        },
    }));
    return (
        <div className="logotel-news" ref={newsRef}>
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

export default News = forwardRef(News);