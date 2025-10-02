'use client';

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import SearchJobSection from "@/components/common/_searchjob_section";
import { newsData, BoxNewsProps } from "@/contants/news";
import Breadcrumb from "@/components/demop11/news/breadcrumb";

// Optimized dynamic import with preloading
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

const NewsByType: React.FC<NewsByTypeProps> = ({ 
    newsItems = newsData, 
    CATE_NAME = "News",
    }) => {
    const params = useParams();
    const categorySlug = params.category as string;
    
    // Convert URL slug to display name (replace hyphens with spaces and capitalize)
    const categoryName = categorySlug 
        ? categorySlug.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')
        : CATE_NAME;

    return (
        <>
            <div id="job-search">
                <SearchJobSection />
            </div>
            <Breadcrumb categoryName={categoryName} />
            <div className="section-page page-content-pre">
                <header className="container-fluid">
                    <h2 className="section-title">{categoryName}</h2>
                </header>
                <DynamicContent 
                    newsItems={newsItems} 
                    CATE_NAME={categoryName} 
                />
            </div>
        </>
    );
}

export default NewsByType;

