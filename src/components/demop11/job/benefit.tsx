import React from 'react';
import { jobData } from '@/components/demop11/job/dataJob';
import { benefitsData } from '@/contants/benefit';

interface BenefitProps {
    jobId?: number;
}

const ICON_STYLE = { width: '25px', textAlign: 'center' as const };

const Benefit: React.FC<BenefitProps> = ({ jobId }): React.ReactElement => {
    const getJobBenefits = () => {
        if (!jobId) {
            return benefitsData;
        }

        const job = jobData.find(job => job.JOB_ID === jobId);
        
        if (!job?.BENEFIT) {
            return benefitsData;
        }
        
        const benefitIds = new Set(job.BENEFIT);
        
        return benefitsData.filter(benefit => 
            benefitIds.has(benefit.BENEFIT_ID)
        );
    };

    const jobBenefits = getJobBenefits();

    return (
        <ul className="list-benefits">
            {jobBenefits.map((benefit) => (
                <li key={benefit.BENEFIT_ID}>
                    <i className={benefit.BENEFIT_ICON} style={ICON_STYLE}></i> 
                    {benefit.BENEFIT_NAME}
                </li>
            ))}
        </ul>
    );
}

export default Benefit;