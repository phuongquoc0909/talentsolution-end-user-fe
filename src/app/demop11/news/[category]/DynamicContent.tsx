'use client';

import useSanitizedHTML from '@/hooks/useSanitizedHTML';
import { useState, useEffect, useCallback, useRef } from 'react';
import Pagination from "@/components/common/pagination";
import { newsData } from "@/contants/news";
import { NEWS_CONTENT_TYPE_PAGE, ItemTypePage } from "@/contants/detail-type-page";

const NORMALIZED_CONTENT_MAP = new Map<string, ItemTypePage>();
NEWS_CONTENT_TYPE_PAGE.forEach(item => {
    const normalizedKey = item.CATE_NAME.toLowerCase().replace(/[^a-z0-9]/g, '');
    NORMALIZED_CONTENT_MAP.set(normalizedKey, item);
});

const REGEX_POOL = {
    HTML_TAGS: /<[^>]*>/g,
    NON_ALPHANUMERIC: /[^a-z0-9]/g
} as const;

interface DynamicContentProps {
    newsItems?: typeof newsData;
    CATE_NAME?: string;
}

type NewsType = '2' | '3' | '';

const DynamicContent: React.FC<DynamicContentProps> = ({ 
    newsItems = newsData, 
    CATE_NAME = "News",
    }) => {
    const [type, setType] = useState<NewsType>('');
    const sessionStorageRef = useRef<boolean>(false); // Prevent multiple sessionStorage reads

    const normalizedCateName: string = CATE_NAME.toLowerCase().replace(REGEX_POOL.NON_ALPHANUMERIC, '');

    const hasCustomContent: boolean = NORMALIZED_CONTENT_MAP.has(normalizedCateName);

    const handleSessionStorage = useCallback((): void => {
        if (sessionStorageRef.current) return; // Prevent duplicate reads
        
        const storedType = sessionStorage.getItem('newsType') as NewsType;
        if (storedType && (storedType === '2' || storedType === '3')) {
            setType(storedType);
            sessionStorage.removeItem('newsType');
            sessionStorageRef.current = true;
        }
    }, []);

    useEffect(() => {
        // Priority 1: Get type from sessionStorage (admin can change type dynamically)
        handleSessionStorage();
        
        // Priority 2: Fallback to custom content if no type from sessionStorage
        if (!sessionStorageRef.current && hasCustomContent) {
            setType('2');
        }
    }, [hasCustomContent, handleSessionStorage]);

    const getCurrentContent = (): ItemTypePage | null => {
        if (type === '2') {
            return NORMALIZED_CONTENT_MAP.get(normalizedCateName) || null;
        }
        return null; // For type 3, we don't need currentContent
    };

    const currentContent: ItemTypePage | null = getCurrentContent();

    const sanitizedContent: string = useSanitizedHTML(currentContent?.CATE_CONTENT || '');

    const ContentType2 = () => (
        <div className='pageType'>
            <div className="container">
                <div className="col-xs-12">
                    <div 
                        className="content_fck text-intro" 
                        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                    />
                </div>
            </div>
        </div>
    );

    const ContentType3 = () => {
        const newsItemsLength = newsItems.length;
        
        return (
            <div className="news-five-items">
                <div className="container">
                    <div className="row">
                        {newsItems.map((item, index) => (
                            <div key={`${item.NEWS_ID}-${index}`} className="col-xs-12 col-sm-6 col-md-4">
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
                    {newsItemsLength > 0 && (
                        <div className="fl_right mar_top10">
                            <Pagination />
                        </div>
                    )}
                </div>
            </div>
        );
    };

    if (type === '2') {
        return <ContentType2 />;
    }
    return <ContentType3 />;
};

export default DynamicContent;
