import React from 'react';
import BoxJobType from "@/components/demop11/job/list_job_index4"; 

const SimilarJobs: React.FC = () => {
    return (
        <div className="section-page result-job-search similar-jobs">
            <div className="container">
                <BoxJobType showTitleSimilarJobs={true} />
            </div>
        </div>
    );
}

export default SimilarJobs;