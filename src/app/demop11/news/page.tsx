'use client';

import SearchJobSection from "@/components/common/_searchjob_section";
import SocialSection from "@/components/demop11/box_social_section";
import Pagination from "@/components/common/pagination";
import { newsData, BoxNewsProps } from "@/contants/news";

const NewsPage: React.FC<BoxNewsProps> = ({ 
    newsItems = newsData, 
    CATE_NAME = "Vinasoy News",
    }) => {
    return (
        <>
            <div id="job-search">
                <SearchJobSection />
            </div>
            <div id="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li>News</li>
                        <li className="active">Vinasoy News</li>
                    </ol>
                </div>
            </div>
            <div className="section-page page-content-pre">
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
                        <div className="fl_right mar_top10">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
            <SocialSection />
        </>
    );
}

export default NewsPage;