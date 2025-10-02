"use client"

import React from 'react';
import { newsData, BoxNewsProps } from "@/contants/news";
import ViewMoreButton from './view-more-button';

const BoxNews: React.FC<BoxNewsProps> = ({ 
    newsItems = newsData, 
    CATE_NAME = "News",
    layout
    }) => {
        return (
            <div id="11381" className="section-page">
                {(() => {
                    switch (layout) {
                        case '2items':
                            return (
                                <div className="news-five-items">
                                    <div className="container">
                                        <header className="container-fluid">
                                            <h2 className="section-title">{CATE_NAME}</h2>
                                        </header>
                                        <div className="row">
                                            {newsItems.map((item) => (
                                                <div key={item.NEWS_ID} className="col-xs-12 col-sm-6 col-md-6">
                                                    <div 
                                                        className="box bg-size-cover lazyload" 
                                                        style={{backgroundImage: `url(${item.NEWS_PICTURE})`}} 
                                                    >
                                                        <div className="blurb">
                                                            <p><a href={item.LINK}>{item.NEWS_TITLE}</a></p>
                                                        </div>
                                                        <div className="excerpt">
                                                            <p className="title"><a href={item.LINK}>{item.NEWS_TITLE}</a></p>
                                                            {item.NEWS_SUBCONTENT && <p className="note">{item.NEWS_SUBCONTENT}</p>}
                                                            <p className="viewmore"><a href={item.LINK}>view detail</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <ViewMoreButton />
                                    </div>
                                </div>
                            );

                        case '3items':
                            return (
                                <div className="news-three-items">
                                    <div className="container">
                                        <header className="container-fluid">
                                            <h2 className="section-title">{CATE_NAME}</h2>
                                        </header>
                                        <div className="row">
                                            {newsItems.map((item) => (
                                                <div key={item.NEWS_ID} className="col-xs-12 col-sm-4 article">
                                                    <div className="name-item"><span>{item.NEWS_TITLE}</span></div>
                                                    <div className="mask-img lazyload" style={{backgroundImage: `url(${item.NEWS_PICTURE})`}}></div>
                                                    <div className="mask-hover">
                                                        <div className="description-item"><a href={item.LINK}>{item.NEWS_SUBCONTENT}</a></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <ViewMoreButton />
                                    </div>
                                </div>
                            );

                        case '4items':
                            return (
                                <div className="news-five-items">
                                    <div className="container">
                                        <header className="container-fluid">
                                            <h2 className="section-title">{CATE_NAME}</h2>
                                        </header>
                                        <div className="row">
                                            {newsItems.map((item) => (
                                                <div key={item.NEWS_ID} className="col-xs-12 col-sm-6 col-md-6">
                                                    <div 
                                                        className="box bg-size-cover lazyload" 
                                                        style={{backgroundImage: `url(${item.NEWS_PICTURE})`}} 
                                                    >
                                                        <div className="blurb">
                                                            <p><a href={item.LINK}>{item.NEWS_TITLE}</a></p>
                                                        </div>
                                                        <div className="excerpt">
                                                            <p className="title"><a href={item.LINK}>{item.NEWS_TITLE}</a></p>
                                                            {item.NEWS_SUBCONTENT && <p className="note">{item.NEWS_SUBCONTENT}</p>}
                                                            <p className="viewmore"><a href={item.LINK}>view detail</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <ViewMoreButton />
                                    </div>
                                </div>
                            );

                        case '5items':
                            const latestNews = newsItems[0]; // Get first item as latest news
                            const remainingNews = newsItems.slice(1); // Get remaining items (from index 1 onwards)
                            
                            return (
                                <div className="news-five-items">
                                    <div className="container">
                                        <header className="container-fluid">
                                            <h2 className="section-title">{CATE_NAME}</h2>
                                        </header>
                                        <div className="row">
                                            {/* Latest News - First item */}
                                            <div className="col-xs-12 col-sm-12 col-md-8 latest">
                                                <div 
                                                    className="box bg-size-cover lazyload" 
                                                    style={{backgroundImage: `url(${latestNews.NEWS_PICTURE})`}} 
                                                >
                                                    <div className="blurb">
                                                        <p><a href={latestNews.LINK}>{latestNews.NEWS_TITLE}</a></p>
                                                    </div>
                                                    <div className="excerpt">
                                                        <p className="title"><a href={latestNews.LINK}>{latestNews.NEWS_TITLE}</a></p>
                                                        <p className="note">{latestNews.NEWS_SUBCONTENT}</p>
                                                        <p className="viewmore"><a href={latestNews.LINK}>view detail</a></p>
                                                    </div>
                                                </div>
                                            </div>
             
                                            {/* Remaining news items */}
                                            {remainingNews.map((item) => (
                                                <div key={item.NEWS_ID} className="col-xs-12 col-sm-6 col-md-4">
                                                    <div 
                                                        className="box bg-size-cover lazyload" 
                                                        style={{backgroundImage: `url(${item.NEWS_PICTURE})`}} 
                                                    >
                                                        <div className="blurb">
                                                            <p><a href={item.LINK}>{item.NEWS_TITLE}</a></p>
                                                        </div>
                                                        <div className="excerpt">
                                                            <p className="title"><a href={item.LINK}>{item.NEWS_TITLE}</a></p>
                                                            {item.NEWS_SUBCONTENT && <p className="note">{item.NEWS_SUBCONTENT}</p>}
                                                            <p className="viewmore"><a href={item.LINK}>view detail</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <ViewMoreButton />
                                    </div>
                                </div>
                            );

                        case '6itemsUpto':
                            return (
                                <div className="news-five-items">
                                    <div className="container">
                                        <header className="container-fluid">
                                            <h2 className="section-title">{CATE_NAME}</h2>
                                        </header>
                                        <div className="row">
                                            {newsItems.map((item) => (
                                                <div key={item.NEWS_ID} className="col-xs-12 col-sm-6 col-md-4">
                                                    <div 
                                                        className="box bg-size-cover lazyload" 
                                                        style={{backgroundImage: `url(${item.NEWS_PICTURE})`}} 
                                                    >
                                                        <div className="blurb">
                                                            <p><a href={item.LINK}>{item.NEWS_TITLE}</a></p>
                                                        </div>
                                                        <div className="excerpt">
                                                            <p className="title"><a href={item.LINK}>{item.NEWS_TITLE}</a></p>
                                                            {item.NEWS_SUBCONTENT && <p className="note">{item.NEWS_SUBCONTENT}</p>}
                                                            <p className="viewmore"><a href={item.LINK}>view detail</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <ViewMoreButton />
                                    </div>
                                </div>
                            );
                        default:
                            return null;
                    }
                })()}
            </div>
        );
}

export default BoxNews;