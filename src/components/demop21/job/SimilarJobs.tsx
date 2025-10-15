import React from 'react';

const SimilarJobs = () => {
    return (
        <section 
            className="section-page result-job-search similar-jobs"
            role="region"
            aria-labelledby="similar-jobs-title"
        >
            <div className="container">
                <h2 id="similar-jobs-title" className="sr-only">Similar Jobs</h2>
            </div>
        </section>
    );
};

export default SimilarJobs;