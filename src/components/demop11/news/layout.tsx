import Link from 'next/link';
import React from 'react';
import { newsData } from "@/contants/news";   
import ViewMoreButton from './view-more-button';

interface NewsItem {
    NEWS_ID: string;
    NEWS_TITLE: string;
    NEWS_PICTURE: string;
    LINK: string;
    NEWS_SUBCONTENT?: string;
    NEWS_CONTENT: string;
}

type LayoutType = '2items' | '3items' | '4items' | '5items' | '6itemsUpto';

interface BoxNewsProps {
    newsItems?: NewsItem[];
    CATE_NAME?: string;
    layout: LayoutType;
}

const NewsItem: React.FC<{
    item: NewsItem;
    className: string;
    showSubContent?: boolean;
}> = ({ item, className, showSubContent = true }): React.ReactElement => (
    <div className={className}>
        <div 
            className="box bg-size-cover lazyload" 
            style={{backgroundImage: `url(${item.NEWS_PICTURE})`}} 
        >
            <div className="blurb">
                <p><Link href={item.LINK}>{item.NEWS_TITLE}</Link></p>
            </div>
            <div className="excerpt">
                <p className="title"><Link href={item.LINK}>{item.NEWS_TITLE}</Link></p>
                {showSubContent && item.NEWS_SUBCONTENT && <p className="note">{item.NEWS_SUBCONTENT}</p>}
                <p className="viewmore"><Link href={item.LINK}>view detail</Link></p>
            </div>
        </div>
    </div>
);

// News Item Component for 3items layout
const NewsItem3Items: React.FC<{
    item: NewsItem;
}> = ({ item }): React.ReactElement => (
    <div className="col-xs-12 col-sm-4 article">
        <div className="name-item"><span>{item.NEWS_TITLE}</span></div>
        <div className="mask-img lazyload" style={{backgroundImage: `url(${item.NEWS_PICTURE})`}}></div>
        <div className="mask-hover">
            <div className="description-item"><Link href={item.LINK}>{item.NEWS_SUBCONTENT}</Link></div>
        </div>
    </div>
);

const BoxNews: React.FC<BoxNewsProps> = ({ 
    newsItems = newsData, 
    CATE_NAME = "News",
    layout
    }) => {
        // Header section
        const HeaderSection: React.ReactElement = (
            <header className="container-fluid">
                <h2 className="section-title">{CATE_NAME}</h2>
            </header>
        );

        // ViewMoreButton section
        const ViewMoreSection: React.ReactElement = (
            <ViewMoreButton />
        );

        // Content rendering based on layout
        const renderContent: React.ReactElement | null = (() => {
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
        })();

        return (
            <div id="11381" className="section-page">
                {renderContent}
            </div>
        );
};

export default BoxNews;