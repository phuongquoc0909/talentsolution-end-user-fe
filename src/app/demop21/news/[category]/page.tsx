import dynamic from 'next/dynamic';
import React from 'react';
import HeaderSection from "@/components/common/HeaderSection";
import { newsData, NewsItem } from "@/contants/news";

const REGEX_POOL = {
    HYPHEN_SPLIT: /-/g,
    WORD_CAPITALIZE: /\b\w/g
} as const;

const DynamicContent = dynamic(() => import('./DynamicContent'));

interface NewsByTypeProps {
    params: Promise<{
        category: string;
    }>;
    newsItems?: NewsItem[];
    CATE_NAME?: string;
}

const transformCategorySlug = (slug: string): string => {
    return slug.replace(REGEX_POOL.HYPHEN_SPLIT, ' ')
              .replace(REGEX_POOL.WORD_CAPITALIZE, (match) => match.toUpperCase());
};

const NewsByType: React.FC<NewsByTypeProps> = async ({ 
    params,
    newsItems = newsData, 
    CATE_NAME = "News",
    }) => {
    const resolvedParams = await params;
    const categorySlug = resolvedParams.category;
    
    const categoryName: string = categorySlug ? transformCategorySlug(categorySlug) : CATE_NAME;

    return (
        <>
            <div className="main-container">
                <div className="section-page">
                    <HeaderSection title={categoryName} />
                    <DynamicContent 
                        newsItems={newsItems} 
                        CATE_NAME={categoryName} 
                    />
                </div>
            </div>
        </>
    );
};

export default NewsByType;
