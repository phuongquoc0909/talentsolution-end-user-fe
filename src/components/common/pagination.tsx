import React from 'react';

interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
}

const Pagination = ({ 
    currentPage = 10, 
    totalPages = 20, 
    onPageChange 
}: PaginationProps): React.ReactElement => {
    const handlePageClick = (page: number) => {
        if (onPageChange) {
            onPageChange(page);
        }
    };

    return (
        <ul id="jb_pagination">
            <li className="previous">
                <a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) handlePageClick(currentPage - 1);
                    }}
                    aria-label="Previous page"
                >
                    &nbsp;
                </a>
            </li>
            <li>
                <a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handlePageClick(9);
                    }}
                    aria-label="Go to page 9"
                >
                    9
                </a>
            </li>
            <li className="active" aria-current="page">10</li>
            <li>
                <a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        handlePageClick(11);
                    }}
                    aria-label="Go to page 11"
                >
                    11
                </a>
            </li>
            <li className="next">
                <a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) handlePageClick(currentPage + 1);
                    }}
                    aria-label="Next page"
                >
                    &nbsp;
                </a>
            </li>
        </ul>
    );
};

export default Pagination; 