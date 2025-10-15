'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { jobData } from '@/components/demop11/job/dataJob';
import ConfirmApply from '@/components/UI/dialog/ConfirmApply';

interface JobDetailState {
    isOpenConfirmApply: boolean;
}

const CurrentJob = () => {
    const params = useParams();
    const jobId = parseInt(params.id as string);
    // Find job by ID
    const currentJob = jobData.find(job => job.JOB_ID === jobId);
    // If job not found, return 404
    if (!currentJob) {
        notFound();
    }

    const [state, setState] = useState<JobDetailState>({
        isOpenConfirmApply: false
    });

    const handleConfirmApply = useCallback((): void => {
        setState(prev => ({ ...prev, isOpenConfirmApply: true }));
    }, []);

    const handleCloseConfirmApply = useCallback((): void => {
        setState(prev => ({ ...prev, isOpenConfirmApply: false }));
    }, []);

    return (
        <>
            <div className="col-xs-12 section-box current-job">
                <h2>Current Job</h2>
                <div className="col-xs-12 col-sm-3 col-left">
                    <div className="company-logo">
                        <table width="100%" cellPadding="0" cellSpacing="0" style={{border: '0'}}>
                            <tbody>
                                <tr>
                                    <td>
                                        <Image 
                                            src={currentJob.JOB_LOGO} 
                                            alt={currentJob.COMPANY_NAME}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ maxWidth: '98px', width: '100%', height: 'auto' }}
                                            unoptimized={true}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-9 col-right">
                    <h3><strong>{currentJob.JOB_TITLE}</strong></h3>
                    <p className="company-name">
                        {currentJob.COMPANY_NAME ? (
                            <Link href={currentJob.COMPANY_URL} title={currentJob.COMPANY_NAME}>{currentJob.COMPANY_NAME}</Link>
                        ) : (
                            <span dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />
                        )}
                    </p>
                </div>
                <div className="col-xs-12 col-sm-6 btn-apply">
                    <a role="button" tabIndex={0} className="btn" onClick={handleConfirmApply}>Apply</a>								
                </div>
                <div className="col-xs-12 col-sm-6 btn-save">
                    <a role="button" tabIndex={0} className="showDialogD btn">Save</a>
                </div>
            </div>
            <ConfirmApply
                isOpen={state.isOpenConfirmApply}
                onClose={handleCloseConfirmApply}
            />
        </>
    );
}

export default CurrentJob;