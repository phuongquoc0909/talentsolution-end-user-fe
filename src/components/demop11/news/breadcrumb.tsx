import React from 'react';

interface BreadcrumbProps {
    categoryName?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categoryName = "News" }): React.ReactElement => {
    return (
        <div id="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    <li>News</li>
                    <li className="active">{categoryName}</li>
                </ol>
            </div>
        </div>
    );
};

export default Breadcrumb;
