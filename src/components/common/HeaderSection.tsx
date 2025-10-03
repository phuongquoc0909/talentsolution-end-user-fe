'use client'

import React, { memo, useMemo } from 'react';

interface HeaderSectionProps {
    CATE_NAME?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = memo(({     
    CATE_NAME 
}) => {
    const getCategoryName = (): string => {
        if (CATE_NAME) return CATE_NAME;
        
        if (typeof window !== 'undefined') {
            const storedName = sessionStorage.getItem('currentCategoryName');
            if (storedName) {
                return storedName;
            }
        }
        
        return ''; // no fallback
    };

    const HeaderSection = useMemo(() => (
        <header className="container-fluid">
            <h2 className="section-title">{getCategoryName()}</h2>
        </header>
    ), [CATE_NAME]);

    return (
        <>
            {HeaderSection}
        </>
    );
});

export default HeaderSection;
