'use client';

import { useParams } from 'next/navigation';
import useSanitizedHTML from '@/hooks/useSanitizedHTML';
import { useState, useEffect, useMemo, memo, useCallback } from 'react';
import Pagination from "@/components/common/pagination";
import { newsData } from "@/contants/news";

interface ItemTypePage {
    CATE_NAME: string;
    CATE_CONTENT: string;
}
  
const NewsContentTypePage: ItemTypePage[] = [
    {
        CATE_NAME: 'Vinasoy People',
        CATE_CONTENT:
        `
        <div style="line-height:1.2;"><span style="font-size:18px"><span style="font-family:times new roman,times,serif"><span style="color:rgb(8, 8, 9)">Vinasoy Bình Dương vừa hân hạnh đón tiếp đoàn giảng viên và sinh viên từ Trường Đại học Kansai (Nhật Bản) và Trường Đại học Thủ Dầu Một đến tham quan nhà máy, khám phá quy trình sản xuất hiện đại và trải nghiệm môi trường làm việc chuyên nghiệp tại Vinasoy.</span></span></span></div>
        <div style="line-height:1.2;">&nbsp;</div>
        <div style="line-height:1.2;">&nbsp;</div>
        <div style="line-height:1.2;"><img alt="z6418216265283_4752720499bdb0b0d2ce03e315a2f3e0" src="https://image.talentnetwork.vn/vinasoy///news/2025/06/13/1749778539_z6418216265283-4752720499bdb0b0d2ce03e315a2f3e0.jpg"></div>
        <div style="line-height:1.2;">&nbsp;</div>
        <div style="line-height:1.2;"><span style="font-size:18px"><span style="font-family:times new roman,times,serif"><span style="color:rgb(8, 8, 9)">Đoàn tham quan đã có cơ hội tìm hiểu hành trình phát triển của Vinasoy, từ những ngày đầu thành lập đến vị thế dẫn đầu ngành sữa đậu nành hôm nay. Đặc biệt, các bạn sinh viên được trực tiếp quan sát quy trình sản xuất tiên tiến và hệ thống xử lý nước thải đạt chuẩn quốc tế – minh chứng cho cam kết phát triển bền vững của Vinasoy.</span></span></span></div>
        `
    },
    {
        CATE_NAME: 'Potential Candidates',
        CATE_CONTENT: "noi dung testing Potential Candidates"
    }
];

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
    
    const [type, setType] = useState<NewsType>('');

    // Check if current category has custom content (only needed for ContentType2)
    const hasCustomContent = useMemo(() => {
        if (!categorySlug) return false;
        
        const categoryName = categorySlug.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        
        return NewsContentTypePage.some(item => item.CATE_NAME === categoryName);
    }, [categorySlug]);

    // Memoized sessionStorage handler
    const handleSessionStorage = useCallback(() => {
        const storedType = sessionStorage.getItem('newsType') as NewsType;
        if (storedType && (storedType === '2' || storedType === '3')) {
            setType(storedType);
            // Clear after reading
            sessionStorage.removeItem('newsType');
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

    // Get current content based on type and category (only needed for ContentType2)
    const currentContent = useMemo(() => {
        if (type === '2' && categorySlug) {
            const categoryName = categorySlug.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            
            return NewsContentTypePage.find(item => item.CATE_NAME === categoryName) || null;
        }
        return null; // For type 3, we don't need currentContent
    }, [type, categorySlug]);

    // Check if content contains HTML tags
    const hasHTMLTags = useMemo(() => {
        const content = currentContent?.CATE_CONTENT?.trim() || '';
        return /<[^>]*>/g.test(content);
    }, [currentContent?.CATE_CONTENT]);

    // Sanitize HTML content for security (only if it's HTML)
    const safeCATE_CONTENT_HTML = useSanitizedHTML(hasHTMLTags ? (currentContent?.CATE_CONTENT || '') : '');

    // Process content - handle both plain text and HTML
    const processedContent = useMemo(() => {
        const content = currentContent?.CATE_CONTENT?.trim() || '';
        
        if (hasHTMLTags) {
            return safeCATE_CONTENT_HTML || content;
        }
        return content;
    }, [hasHTMLTags, safeCATE_CONTENT_HTML, currentContent?.CATE_CONTENT]);

    // Memoized components for better performance
    const ContentType2: React.FC = memo(() => {
        return (
            <div className='pageType'>
                <div className="container">
                    <div className="col-xs-12">
                        {hasHTMLTags ? (
                            <div className="content_fck text-intro" dangerouslySetInnerHTML={{__html: processedContent }}></div>
                        ) : (
                            <div className="content_fck text-intro">
                                {processedContent}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    });

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
        if (type === '2') {
            return <ContentType2 />;
        }
        return <ContentType3 />; // Default fallback for type 3 or empty
    }, [type]);

    return renderedContent;
});

DynamicContent.displayName = 'DynamicContent';

export default DynamicContent;
