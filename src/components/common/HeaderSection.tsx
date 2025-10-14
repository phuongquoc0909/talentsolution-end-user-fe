import React from 'react';

interface HeaderSectionProps {
    title?: string;
    className?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({     
    title = "News",
    className = "container-fluid"
}): React.ReactElement => {
    // Get title from props or sessionStorage
    const getTitle = (): string => {
        if (title) return title;
        
        // Try to get from sessionStorage (set by Header click)
        if (typeof window !== 'undefined') {
            const storedName = sessionStorage.getItem('currentCategoryName');
            if (storedName) {
                return storedName;
            }
        }
        
        return 'News'; // fallback
    };

    return (
        <header className={className}>
            <h2 className="section-title">{getTitle()}</h2>
        </header>
    );
};

export default HeaderSection;
