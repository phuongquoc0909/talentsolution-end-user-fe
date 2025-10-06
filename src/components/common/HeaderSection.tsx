'use client'

import React, { memo, useMemo } from 'react';

interface HeaderSectionProps {
    title?: string;
    className?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = memo(({     
    title = "News",
    className = "container-fluid"
}): React.ReactElement => {
    const getTitle = (): string => {
        if (title) return title;
        
        if (typeof window !== 'undefined') {
            const storedName = sessionStorage.getItem('currentCategoryName');
            if (storedName) {
                return storedName;
            }
        }
        
        return 'News'; 
    };

    const headerContent: React.ReactElement = useMemo(() => (
        <header className={className}>
            <h2 className="section-title">{getTitle()}</h2>
        </header>
    ), [title, className]);

    return (
        <>
            {headerContent}
        </>
    );
});

export default HeaderSection;
