"use client"

import React from 'react';
import ViewMoreButton from './view-more-button';

export interface NewsItem {
    NEWS_ID: string;
    NEWS_TITLE: string;
    NEWS_PICTURE: string;
    LINK: string;
    NEWS_SUBCONTENT?: string;
}

const newsData: NewsItem[] = [
    {
        NEWS_ID: "1",
        NEWS_TITLE: "VINASOY BÌNH DƯƠNG CHÀO ĐÓN ĐOÀN GIẢNG VIÊN, SINH VIÊN ĐH KANSAI (NHẬT BẢN) & ĐH THỦ DẦU MỘT THAM QUAN NHÀ MÁY",
        NEWS_PICTURE: "https://image.talentnetwork.vn/vinasoy/news/2025/06/11/z6662952755867_3b2b35af95701d882242e090f54ee1b9_081810.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/vinasoy-binh-duong-chao-don-doan-giang-vien-sinh-vien-dh-kansai-nhat-ban-amp-dh-thu-dau-mot-tham-quan-nha-may.35a55ba0/en",
        NEWS_SUBCONTENT: "NEWS_SUBCONTENT"
    },
    {
        NEWS_ID: "2", 
        NEWS_TITLE: "VINASOY CHÀO ĐÓN SINH VIÊN ĐẠI HỌC BÁCH KHOA HÀ NỘI VÀ ĐẠI HỌC TENNESSEE (MỸ)",
        NEWS_PICTURE: "https://image.talentnetwork.vn/vinasoy/news/2025/06/11/z6662952755867_3b2b35af95701d882242e090f54ee1b9_081810.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/vinasoy-chao-don-sinh-vien-dai-hoc-bach-khoa-ha-noi-va-dai-hoc-tennessee-my-.35a55b87/en",
        NEWS_SUBCONTENT: ""
    },
    {
        NEWS_ID: "3",
        NEWS_TITLE: "[BƯỚC CHÂN XANH CÙNG SỮA HẠT VEYO] – HÀNH TRÌNH CỦA SỨC MẠNH CON NGƯỜI VÀ TÌNH YÊU MÔI TRƯỜNG",
        NEWS_PICTURE: "https://image.talentnetwork.vn/vinasoy/news/2025/02/03/b_c_ch_n_xanh_164001.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/-buoc-chan-xanh-cung-sua-hat-veyo-hanh-trinh-cua-suc-manh-con-nguoi-va-tinh-yeu-moi-truong.35a55a13/en",
        NEWS_SUBCONTENT: ""
    },
    {
        NEWS_ID: "4",
        NEWS_TITLE: "VINASOY BẮC NINH – NHÀ MÁY SẢN XUẤT VỚI CÔNG NGHỆ HIỆN ĐẠI BẬC NHẤT THẾ GIỚI",
        NEWS_PICTURE: "https://image.talentnetwork.vn/vinasoy/news/2025/02/03/b_c_ch_n_xanh_164001.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/vinasoy-bac-ninh-nha-may-san-xuat-voi-cong-nghe-hien-dai-bac-nhat-the-gioi.35a55a12/en",
        NEWS_SUBCONTENT: ""
    }
];

interface BoxNewsProps {
    newsItems?: NewsItem[];
    CATE_NAME?: string;
    layout: '2items' | '3items' | '4items' | '5items' | '6itemsUpto';
}

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