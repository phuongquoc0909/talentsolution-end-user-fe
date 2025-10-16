'use client';

import { useParams, notFound } from 'next/navigation';
import { useState, useCallback } from 'react';
import useSanitizedHTML from '@/hooks/useSanitizedHTML';
import { jobData } from '@/components/demop21/job/dataJob';
import Benefit from '@/components/demop11/job/benefit';
import BoxJobType from "@/components/demop21/job/jobs-browse-section";
import Share from '@/components/demop21/share';
import ConfirmApply from '@/components/UI/dialog/ConfirmApply';

interface JobDetailState {
    isOpenConfirmApply: boolean;
}

const JobsDetailPage = () => {
    const params = useParams();
    const jobId = parseInt(params.id as string);
    
    const currentJob = (() => {
        const job = jobData.find(job => job.JOB_ID === jobId);
        if (!job) {
            notFound();
        }
        return job;
    })();

    const safeJOB_CONTENT_HTML = useSanitizedHTML(currentJob.JOB_CONTENT);
    const safeJOB_REQUIRESKILL_HTML = useSanitizedHTML(currentJob.JOB_REQUIRESKILL);

    const [state, setState] = useState<JobDetailState>({
        isOpenConfirmApply: false
    });

    const handleConfirmApply = useCallback((): void => {
        setState(prev => ({ ...prev, isOpenConfirmApply: true }));
    }, []);

    const handleCloseConfirmApply = useCallback((): void => {
        setState(prev => ({ ...prev, isOpenConfirmApply: false }));
    }, []);    

    const JobInfoSection = (
        <>
            <h3>About This Job</h3>
            <div className="metadata metadata-list">
                <div className="metadata-list_section metadata-list_section--blue">
                    <h4 className="metadata-list_header">Work Location</h4>
                    <ul className="metadata-list_items">
                        <li>{currentJob.JOB_LOCATION}</li>
                    </ul>
                </div>
                <div className="metadata-list_section metadata-list_section--orange">
                    <h4 className="metadata-list_header">Job Level</h4>
                    <ul className="metadata-list_items">
                        <li>{currentJob.JOB_LEVEL}</li>
                    </ul>
                </div>
                <div className="metadata-list_section metadata-list_section--orange">
                    <h4 className="metadata-list_header">Job Type</h4>
                    <ul className="metadata-list_items">
                        <li>{currentJob.JOB_TYPE}</li>
                    </ul>
                </div>
                <div className="metadata-list_section metadata-list_section--orange">
                    <h4 className="metadata-list_header">Qualification</h4>
                    <ul className="metadata-list_items">
                        <li>{currentJob.JOB_QUALIFICATION}</li>
                    </ul>
                </div>
                <div className="metadata-list_section metadata-list_section--orange">
                    <h4 className="metadata-list_header">Experiences</h4>
                    <ul className="metadata-list_items">
                        <li>{currentJob.JOB_EXPERIENCE}</li>
                    </ul>
                </div>
                <div className="metadata-list_section metadata-list_section--orange">
                    <h4 className="metadata-list_header">Salary</h4>
                    <ul className="metadata-list_items">
                        <li>{currentJob.JOB_SALARY}</li>
                    </ul>
                </div>
                <div className="metadata-list_section metadata-list_section--orange">
                    <h4 className="metadata-list_header">Industry</h4>
                    <ul className="metadata-list_items">
                        <li>{currentJob.JOB_INDUSTRIES}</li>
                    </ul>
                </div>
                <div className="metadata-list_section metadata-list_section--orange">
                    <h4 className="metadata-list_header">Department</h4>
                    <ul className="metadata-list_items">
                        <li>{currentJob.JOB_DEPARTMENT}</li>
                    </ul>
                </div>
                <div className="metadata-list_section metadata-list_section--orange">
                    <h4 className="metadata-list_header">Deadline to Apply</h4>
                    <ul className="metadata-list_items">
                        <li>{currentJob.JOB_EXPIREDATE.toLocaleDateString('vi-VN')}</li>
                    </ul>
                </div>
                <div className="metadata-list_section metadata-list_section--orange">
                    <h4 className="metadata-list_header">Contact Person</h4>
                    <ul className="metadata-list_items">
                        <li>{currentJob.JOB_CONTACT_NAME}</li>
                    </ul>
                </div>
            </div>
        </>
    );

    const ActionsSection = (
        <div className="job-post">
            <div className="bottom-ctas">
                <div className="external-apply center">
                    <a role="button" tabIndex={0} onClick={handleConfirmApply} className="tm-bright-blue-round-button btn-block apply-external">Apply Now <i className="fa fa-angle-right"></i></a>
                    <p className="notready"><a role="button" tabIndex={0} className="showDialogD">Not ready to apply?</a></p>
                </div>
            </div>
        </div>
    );
    
    const JobTagsSection = (
        <div className="tagskilldetail">
            <span>Job Tag:</span>&nbsp;
            {currentJob.JOB_TAGS.map((tag, index) => (
                <a key={`${tag.TAG_NAME}-${index}`} href={tag.TAG_URL} title={tag.TAG_NAME}>
                    {tag.TAG_NAME}
                </a>
            ))}
        </div>
    );

    const RightSidebarSection = (
        <div className="job-body">
            <div className="job-post">
                <div className="job-post-description">
                    <h2 className="col_theme">Job Benefit</h2>
                    <Benefit jobId={jobId} />
                    <h2>Job Description</h2>
                    <div className="content_fck" dangerouslySetInnerHTML={{__html: safeJOB_CONTENT_HTML }}></div>
                    <h2>Job Requirement</h2>
                    <div className="content_fck" dangerouslySetInnerHTML={{__html: safeJOB_REQUIRESKILL_HTML }}></div>
                    {JobTagsSection}
                    {ActionsSection}
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="docked-nav job hidden-xs" id="job-nav">
                <div className="container">
                    <div className="docked-title">
                        <h3>{currentJob.JOB_TITLE}</h3>
                    </div>
                    <div className="docked-ctas">
                        <div className="favorite-container"><a href="#" className="favorite"><i className="fa fa-heart-o"></i></a></div>
                        <a href="#" className="tm-bright-blue-round-button apply-external">Apply Now <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="main-container">
                <div className="job-individual" id="job-container">
                    <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('https://image.talentnetwork.vn/geet//job/image/2025/07/18/1752833916_hlis-campus.jpg')`}} className="top-block">
                        <div className="bg-image" id="top-image">
                            <h1>{currentJob.JOB_TITLE}</h1>
                            <div className="ctas center">
                                <a href="#" className="tm-bright-blue-round-button apply-external hidden-xs">Apply Now <i aria-hidden="true" className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="white-container">
                        <div className="container">
                            <div className="job-side-section sidebar-content">
                                {JobInfoSection}
                                <div className="favorite-box-container">
                                    <a role="button" tabIndex={0} className="favorite showDialogD"><i className="fa fa-heart-o"></i> Save For Later</a>
                                </div>
                                <div className="grey-buttons companies" id="share">
                                    <Share />
                                </div>
                            </div>
                            <div className="job-main-section">
                                {RightSidebarSection}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section-page result-job-search similar-jobs">
                <div className="container">
                    <h2>Similar Jobs</h2>
                    <BoxJobType />
                </div>
            </section>
            <ConfirmApply
                isOpen={state.isOpenConfirmApply}
                onClose={handleCloseConfirmApply}
            />
        </>
    );
};

export default JobsDetailPage;
