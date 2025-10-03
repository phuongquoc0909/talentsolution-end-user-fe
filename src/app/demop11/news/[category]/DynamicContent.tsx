'use client';

import useSanitizedHTML from '@/hooks/useSanitizedHTML';
import { useState, useEffect, useMemo, memo, useCallback, useRef } from 'react';
import Pagination from "@/components/common/pagination";
import { newsData, NEWS_CONTENT_TYPE_PAGE, ItemTypePage } from "@/contants/news";



// Global lookup map - Pre-computed at module level (Big Tech approach)
const NORMALIZED_CONTENT_MAP = new Map<string, ItemTypePage>();
NEWS_CONTENT_TYPE_PAGE.forEach(item => {
    const normalizedKey = item.CATE_NAME.toLowerCase().replace(/[^a-z0-9]/g, '');
    NORMALIZED_CONTENT_MAP.set(normalizedKey, item);
});

// Memory pool for regex - Reuse regex objects (X/Twitter approach)
const REGEX_POOL = {
    HTML_TAGS: /<[^>]*>/g,
    NON_ALPHANUMERIC: /[^a-z0-9]/g
} as const;

interface DynamicContentProps {
    newsItems?: typeof newsData;
    CATE_NAME?: string;
}

type NewsType = '2' | '3' | '';

const DynamicContent: React.FC<DynamicContentProps> = memo(({ 
    newsItems = newsData, 
    CATE_NAME = "News",
    }) => {
    const [type, setType] = useState<NewsType>('');
    const sessionStorageRef = useRef<boolean>(false); // Prevent multiple sessionStorage reads

    // Optimized category normalization - Single computation (Google approach)
    const normalizedCateName = useMemo(() => 
        CATE_NAME.toLowerCase().replace(REGEX_POOL.NON_ALPHANUMERIC, ''), 
        [CATE_NAME]
    );

    // Check if current category has custom content - O(1) lookup (Facebook approach)
    const hasCustomContent = useMemo(() => 
        NORMALIZED_CONTENT_MAP.has(normalizedCateName), 
        [normalizedCateName]
    );

    // Optimized sessionStorage handler - Prevent multiple reads (Instagram approach)
    const handleSessionStorage = useCallback(() => {
        if (sessionStorageRef.current) return; // Prevent duplicate reads
        
        const storedType = sessionStorage.getItem('newsType') as NewsType;
        if (storedType && (storedType === '2' || storedType === '3')) {
            setType(storedType);
            sessionStorage.removeItem('newsType');
            sessionStorageRef.current = true;
        }
    }, []);

    useEffect(() => {
        // Priority 1: Check if category has custom content
        if (hasCustomContent) {
            setType('2');
        } else {
            // Priority 2: Get type from sessionStorage
            handleSessionStorage();
        }
    }, [hasCustomContent, handleSessionStorage]);

    // Get current content - O(1) lookup with pre-computed key (X/Twitter approach)
    const currentContent = useMemo(() => {
        if (type === '2') {
            return NORMALIZED_CONTENT_MAP.get(normalizedCateName) || null;
        }
        return null; // For type 3, we don't need currentContent
    }, [type, normalizedCateName]);

    // Universal content sanitization - Handles both HTML and plain text safely (Enterprise approach)
    const sanitizedContent = useSanitizedHTML(currentContent?.CATE_CONTENT || '');

    // Optimized ContentType2 - Universal content rendering (Enterprise approach)
    const ContentType2: React.FC = memo(() => (
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
    ));

    // Optimized ContentType3 - Virtualization ready (Instagram approach)
    const ContentType3: React.FC = memo(() => {
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
    });

    // Optimized content rendering - Early return pattern (Google approach)
    if (type === '2') {
        return <ContentType2 />;
    }
    return <ContentType3 />;
});

// Performance optimization - Static display name (React DevTools optimization)
DynamicContent.displayName = 'DynamicContent';

// Export with performance hint (Webpack optimization)
export default DynamicContent;
