import dynamic from 'next/dynamic';
import React from 'react';

import SearchJobSection from "@/components/common/_searchjob_section";
import HeaderSection from "@/components/common/HeaderSection";
import { newsData } from "@/contants/news";
import Breadcrumb from "@/components/demop11/news/breadcrumb";

const REGEX_POOL = {
    HYPHEN_SPLIT: /-/g,
    WORD_CAPITALIZE: /\b\w/g
} as const;

const DynamicContent = dynamic(() => import('./DynamicContent'));

interface NewsByTypeProps {
    params: Promise<{
        category: string;
    }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const transformCategorySlug = (slug: string): string => {
    return slug.replace(REGEX_POOL.HYPHEN_SPLIT, ' ')
              .replace(REGEX_POOL.WORD_CAPITALIZE, (match) => match.toUpperCase());
};

const NewsByType: React.FC<NewsByTypeProps> = async ({ 
    params
    }) => {
    const newsItems = newsData;
    const CATE_NAME = "News";

    const resolvedParams = await params;
    const categorySlug = resolvedParams.category;
    const categoryName: string = categorySlug ? transformCategorySlug(categorySlug) : CATE_NAME;

    const SearchSection = (
        <div id="job-search">
            <SearchJobSection />
        </div>
    );

    const BreadcrumbSection = (
        <Breadcrumb categoryName={categoryName} />
    );

    const HeaderSectionComponent = (
        <HeaderSection title={categoryName} />
    );

    const ContentSection = (
        <DynamicContent 
            newsItems={newsItems} 
            CATE_NAME={categoryName} 
        />
    );

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
};

export default NewsByType;

