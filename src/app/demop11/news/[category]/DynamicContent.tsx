'use client';

import { useParams, notFound } from 'next/navigation';
import useSanitizedHTML from '@/hooks/useSanitizedHTML';
import { useState, useEffect, useMemo, memo, useCallback } from 'react';
import Pagination from "@/components/common/pagination";
import { newsData } from "@/contants/news";

interface DynamicContentProps {
    newsItems?: typeof newsData;
    CATE_NAME?: string;
}

type NewsType = '2' | '3' | '';

const DynamicContent: React.FC<DynamicContentProps> = memo(({ 
    newsItems = newsData, 
    CATE_NAME = "News",
    }) => {
    const params = useParams();
    const categorySlug = params.category as string;
    console.log('categorySlug:', categorySlug);
    console.log('newsItems:', newsItems);
    
    const [type, setType] = useState<NewsType>('');

    // Memoized sessionStorage handler
    const handleSessionStorage = useCallback(() => {
        const storedType = sessionStorage.getItem('newsType') as NewsType;
        console.log('Stored type from sessionStorage:', storedType);
        if (storedType && (storedType === '2' || storedType === '3')) {
            setType(storedType);
            // Clear after reading
            sessionStorage.removeItem('newsType');
            console.log('Type set to:', storedType);
        }
    }, []);

    useEffect(() => {
        // Get type from sessionStorage on client-side only
        handleSessionStorage();
    }, [handleSessionStorage]);

    // Get current news based on type
    const currentNews = useMemo(() => {
        if (type === '2') {
            // For type 2, get the first news item
            return newsItems[0];
        }
        return null; // For type 3, we don't need currentNews
    }, [type, newsItems]);

    // Sanitize HTML content for security
    const safeNEWS_CONTENT_HTML = useSanitizedHTML(currentNews?.NEWS_CONTENT || '');

    // Memoized components for better performance
    const ContentType2: React.FC = memo(() => (
        <div className='pageType'>
            <div className="container">
                <div className="col-xs-12">
                    <div className="content_fck text-intro" dangerouslySetInnerHTML={{__html: safeNEWS_CONTENT_HTML }}></div>
                </div>
            </div>
        </div>
    ));

    const ContentType3: React.FC = memo(() => (
        <div className="news-five-items">
            <div className="container">
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
    ));

    // Memoized content rendering for optimal performance
    const renderedContent = useMemo(() => {
        if (type === '2') return <ContentType2 />;
        if (type === '3') return <ContentType3 />;
        return <ContentType3 />; // Default fallback
    }, [type]);

    // Debug logging
    useEffect(() => {
        console.log('Current type:', type, 'Type === "2":', type === '2', 'Type === "3":', type === '3');
    }, [type]);

    return renderedContent;
});

DynamicContent.displayName = 'DynamicContent';

export default DynamicContent;
