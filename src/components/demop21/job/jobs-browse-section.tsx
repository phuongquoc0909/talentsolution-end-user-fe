'use client';

import React, { useCallback, useState } from 'react';
import { jobData } from '@/components/demop21/job/dataJob';
import JobItem from '@/components/demop21/job/JobItem';
import LoginDialog from '@/components/UI/dialog/login_ajax_v1';

const BoxJobType: React.FC = () => {
    const [isOpenLogin, setIsOpenLogin] = useState(false);
  
    const handleSaveJob = useCallback(() => {
        setIsOpenLogin(true);
    }, []);

    const handleCloseLogin = useCallback(() => {
        setIsOpenLogin(false);
    }, []);
    
    const jobItems = jobData.map((job) => (
        <JobItem 
            key={job.JOB_ID} 
            job={job} 
            onSaveJob={handleSaveJob} 
        />
    ));
    
    return (
        <>
            <div className="block">
                {jobItems}
            </div>
            <LoginDialog isOpen={isOpenLogin} onClose={handleCloseLogin} />
        </>
    );
};

export default BoxJobType;