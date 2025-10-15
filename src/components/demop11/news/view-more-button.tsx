import React from 'react';
import Link from 'next/link';

const ViewMoreButton = () => {
    return (
        <div className="row">
            <div className="col-sm-2 col-sm-offset-5 btn-viewmore">
                <Link 
                    className="btn btn-block btn-primary"
                    href="/demop11/news/vinasoy-news"
                >
                    View More
                </Link>
            </div>
        </div>
    );
};

export default ViewMoreButton;
