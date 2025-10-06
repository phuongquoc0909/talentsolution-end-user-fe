'use client';

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { memo, useMemo, useCallback } from 'react';
import SearchJobSection from "@/components/common/_searchjob_section";
import HeaderSection from "@/components/common/HeaderSection";
import { newsData, NewsItem } from "@/contants/news";
import Breadcrumb from "@/components/demop11/news/breadcrumb";

const REGEX_POOL = {
    HYPHEN_SPLIT: /-/g,
    WORD_CAPITALIZE: /\b\w/g
} as const;

const LOADING_STYLES = {
    container: {
        textAlign: 'center' as const,
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinner: {
        border: '3px solid #f3f4f6', // Very light gray background
        borderTop: '3px solid rgb(91, 95, 100)', // Dark gray (professional)
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        animation: 'spin 1s ease-in-out infinite',
        margin: '0 auto',
        willChange: 'transform',
    }
} as const;

const LoadingSpinner = memo((): React.ReactElement => (
    <div style={LOADING_STYLES.container}>
        <div style={LOADING_STYLES.spinner} />
        <style jsx>{`
            @keyframes spin {
                0% { 
                    transform: rotate(0deg);
                    opacity: 1;
                }
                50% { 
                    opacity: 0.8;
                }
                100% { 
                    transform: rotate(360deg);
                    opacity: 1;
                }
            }
        `}</style>
    </div>
));

const DynamicContent = dynamic(() => import('./DynamicContent'), {
    ssr: false,
    loading: () => <LoadingSpinner />
});

interface NewsByTypeProps {
    newsItems?: NewsItem[];
    CATE_NAME?: string;
}

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
    
    const categoryName: string = useMemo(() => {
        return categorySlug ? transformCategorySlug(categorySlug) : CATE_NAME;
    }, [categorySlug, CATE_NAME]);

    const SearchSection: React.ReactElement = useMemo(() => (
        <div id="job-search">
            <SearchJobSection />
        </div>
    ), []);

    const BreadcrumbSection: React.ReactElement = useMemo(() => (
        <Breadcrumb categoryName={categoryName} />
    ), [categoryName]);

    const HeaderSectionComponent: React.ReactElement = useMemo(() => (
        <HeaderSection title={categoryName} />
    ), [categoryName]);

    const ContentSection: React.ReactElement = useMemo(() => (
        <DynamicContent 
            newsItems={newsItems} 
            CATE_NAME={categoryName} 
        />
    ), [newsItems, categoryName]);

    return (
        <>
            {SearchSection}
            {BreadcrumbSection}
            <div className="section-page page-content-pre">
                {HeaderSectionComponent}
                {ContentSection}
            </div>
        </>
    );
});

NewsByType.displayName = 'NewsByType';

export default NewsByType;

