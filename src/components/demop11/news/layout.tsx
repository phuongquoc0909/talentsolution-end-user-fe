"use client"

import React, { memo, useMemo } from 'react';
import { newsData, BoxNewsProps } from "@/contants/news";
import ViewMoreButton from './view-more-button';

type LayoutType = '2items' | '3items' | '4items' | '5items' | '6itemsUpto';

const NewsItem: React.FC<{
    item: any;
    className: string;
    showSubContent?: boolean;
}> = memo(({ item, className, showSubContent = true }) => (
    <div className={className}>
        <div 
            className="box bg-size-cover lazyload" 
            style={{backgroundImage: `url(${item.NEWS_PICTURE})`}} 
        >
            <div className="blurb">
                <p><a href={item.LINK}>{item.NEWS_TITLE}</a></p>
            </div>
            <div className="excerpt">
                <p className="title"><a href={item.LINK}>{item.NEWS_TITLE}</a></p>
                {showSubContent && item.NEWS_SUBCONTENT && <p className="note">{item.NEWS_SUBCONTENT}</p>}
                <p className="viewmore"><a href={item.LINK}>view detail</a></p>
            </div>
        </div>
    </div>
));

const NewsItem3Items: React.FC<{
    item: any;
}> = memo(({ item }) => (
    <div className="col-xs-12 col-sm-4 article">
        <div className="name-item"><span>{item.NEWS_TITLE}</span></div>
        <div className="mask-img lazyload" style={{backgroundImage: `url(${item.NEWS_PICTURE})`}}></div>
        <div className="mask-hover">
            <div className="description-item"><a href={item.LINK}>{item.NEWS_SUBCONTENT}</a></div>
        </div>
    </div>
));

const BoxNews: React.FC<BoxNewsProps> = memo(({ 
    newsItems = newsData, 
    CATE_NAME = "News",
    layout
    }) => {
        const HeaderSection = useMemo(() => (
            <header className="container-fluid">
                <h2 className="section-title">{CATE_NAME}</h2>
            </header>
        ), [CATE_NAME]);

        const ViewMoreSection = useMemo(() => (
            <ViewMoreButton />
        ), []);

        const renderContent = useMemo(() => {
            switch (layout as LayoutType) {
                case '2items':
                    return (
                        <div className="news-five-items">
                            <div className="container">
                                {HeaderSection}
                                <div className="row">
                                    {newsItems.map((item) => (
                                        <NewsItem 
                                            key={item.NEWS_ID} 
                                            item={item} 
                                            className="col-xs-12 col-sm-6 col-md-6"
                                        />
                                    ))}
                                </div>
                                {ViewMoreSection}
                            </div>
                        </div>
                    );

                case '3items':
                    return (
                        <div className="news-three-items">
                            <div className="container">
                                {HeaderSection}
                                <div className="row">
                                    {newsItems.map((item) => (
                                        <NewsItem3Items key={item.NEWS_ID} item={item} />
                                    ))}
                                </div>
                                {ViewMoreSection}
                            </div>
                        </div>
                    );

                case '4items':
                    return (
                        <div className="news-five-items">
                            <div className="container">
                                {HeaderSection}
                                <div className="row">
                                    {newsItems.map((item) => (
                                        <NewsItem 
                                            key={item.NEWS_ID} 
                                            item={item} 
                                            className="col-xs-12 col-sm-6 col-md-6"
                                        />
                                    ))}
                                </div>
                                {ViewMoreSection}
                            </div>
                        </div>
                    );

                case '5items':
                    const latestNews = newsItems[0];
                    const remainingNews = newsItems.slice(1);
                    
                    return (
                        <div className="news-five-items">
                            <div className="container">
                                {HeaderSection}
                                <div className="row">
                                    {/* Latest News - First item */}
                                    <NewsItem 
                                        key={latestNews.NEWS_ID} 
                                        item={latestNews} 
                                        className="col-xs-12 col-sm-12 col-md-8 latest"
                                    />
                                    {/* Remaining news items */}
                                    {remainingNews.map((item) => (
                                        <NewsItem 
                                            key={item.NEWS_ID} 
                                            item={item} 
                                            className="col-xs-12 col-sm-6 col-md-4"
                                        />
                                    ))}
                                </div>
                                {ViewMoreSection}
                            </div>
                        </div>
                    );

                case '6itemsUpto':
                    return (
                        <div className="news-five-items">
                            <div className="container">
                                {HeaderSection}
                                <div className="row">
                                    {newsItems.map((item) => (
                                        <NewsItem 
                                            key={item.NEWS_ID} 
                                            item={item} 
                                            className="col-xs-12 col-sm-6 col-md-4"
                                        />
                                    ))}
                                </div>
                                {ViewMoreSection}
                            </div>
                        </div>
                    );
                default:
                    return null;
            }
        }, [layout, newsItems, HeaderSection, ViewMoreSection]);

        return (
            <div id="11381" className="section-page">
                {renderContent}
            </div>
        );
});

BoxNews.displayName = 'BoxNews';

export default BoxNews;