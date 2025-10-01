"use client"
import React from 'react';

const ViewMoreButton: React.FC = () => {
    return (
        <div className="row">
            <div className="col-sm-2 col-sm-offset-5 btn-viewmore">
                <a 
                    className="btn btn-block btn-primary"
                    href="/demop11/news/vinasoy-news"
                >
                    View More
                </a>
            </div>
        </div>
    );
};

export default ViewMoreButton;
