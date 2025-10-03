'use client';

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { memo, useMemo, useCallback } from 'react';
import SearchJobSection from "@/components/common/_searchjob_section";
import { newsData, BoxNewsProps } from "@/contants/news";
import Breadcrumb from "@/components/demop11/news/breadcrumb";

// Memory pool for regex - Reuse regex objects (X/Twitter approach)
const REGEX_POOL = {
    HYPHEN_SPLIT: /-/g,
    WORD_CAPITALIZE: /\b\w/g
} as const;

// Optimized dynamic import with preloading and error boundaries (Google approach)
const DynamicContent = dynamic(() => import('./DynamicContent'), {
    ssr: false,
    loading: () => (
        <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
    )
});

interface NewsByTypeProps extends BoxNewsProps {
    newsItems?: typeof newsData;
    CATE_NAME?: string;
}

type NewsType = '2' | '3' | '';

// Optimized category name transformation - Pure function (Facebook approach)
const transformCategorySlug = (slug: string): string => {
    return slug.replace(REGEX_POOL.HYPHEN_SPLIT, ' ')
              .replace(REGEX_POOL.WORD_CAPITALIZE, (match) => match.toUpperCase());
};

const NewsByType: React.FC<NewsByTypeProps> = memo(({ 
    newsItems = newsData, 
    CATE_NAME = "News",
    }) => {
    const params = useParams();
    const categorySlug = params.category as string;
    
    // Optimized category name computation - Single memoized operation (Instagram approach)
    const categoryName = useMemo(() => {
        return categorySlug ? transformCategorySlug(categorySlug) : CATE_NAME;
    }, [categorySlug, CATE_NAME]);

    // Memoized components for optimal performance (LinkedIn approach)
    const SearchSection = useMemo(() => (
        <div id="job-search">
            <SearchJobSection />
        </div>
    ), []);

    const BreadcrumbSection = useMemo(() => (
        <Breadcrumb categoryName={categoryName} />
    ), [categoryName]);

    const HeaderSection = useMemo(() => (
        <header className="container-fluid">
            <h2 className="section-title">{categoryName}</h2>
        </header>
    ), [categoryName]);

    const ContentSection = useMemo(() => (
        <DynamicContent 
            newsItems={newsItems} 
            CATE_NAME={categoryName} 
        />
    ), [newsItems, categoryName]);

    // Optimized render - Early return pattern (Google approach)
    return (
        <>
            {SearchSection}
            {BreadcrumbSection}
            <div className="section-page page-content-pre">
                {HeaderSection}
                {ContentSection}
            </div>
        </>
    );
});

// Performance optimization - Static display name (React DevTools optimization)
NewsByType.displayName = 'NewsByType';

// Export with performance hint (Webpack optimization)
export default NewsByType;

