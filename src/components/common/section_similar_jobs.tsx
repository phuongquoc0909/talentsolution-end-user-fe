import React, { memo } from 'react';
import BoxJobType from "@/components/demop11/job/list_job_index4"; 

const SimilarJobs = memo((): React.ReactElement => {
    return (
        <section 
            className="section-page result-job-search similar-jobs"
            role="region"
            aria-labelledby="similar-jobs-title"
        >
            <div className="container">
                <h2 id="similar-jobs-title" className="sr-only">Similar Jobs</h2>
                <BoxJobType showTitleSimilarJobs={true} />
            </div>
        </section>
    );
});

SimilarJobs.displayName = 'SimilarJobs';

export default SimilarJobs;