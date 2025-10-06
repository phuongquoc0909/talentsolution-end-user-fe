'use client';

import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { useState, useEffect, memo, useMemo, useCallback, useRef } from 'react';
import useSanitizedHTML from '@/hooks/useSanitizedHTML';

import { jobData } from '@/contants/data';
import Benefit from '@/components/demop11/job/benefit';
import ListJobViewed from '@/components/demop11/job/box_job_view5';
import BoxJoin from '@/components/common/box_join';
import CurrentJob from '@/components/demop11/job/CurrentJob';
import BoxSurveyP11 from '@/components/common/box_survey_p11';
import SimilarJobs from '@/components/common/section_similar_jobs';
import ConfirmApply from '@/components/UI/dialog/ConfirmApply';

interface JobDetailState {
    activeShareId: number | null;
    isOpenConfirmApply: boolean;
}

const JobsDetailPage: React.FC = memo((): React.ReactElement => {
    const params = useParams();
    const jobId = parseInt(params.id as string);
    
    const currentJob = useMemo(() => {
        const job = jobData.find(job => job.JOB_ID === jobId);
        if (!job) {
            notFound();
        }
        return job;
    }, [jobId]);

    const safeJOB_CONTENT_HTML = useSanitizedHTML(currentJob.JOB_CONTENT);
    const safeJOB_REQUIRESKILL_HTML = useSanitizedHTML(currentJob.JOB_REQUIRESKILL);

    const [state, setState] = useState<JobDetailState>({
        activeShareId: null,
        isOpenConfirmApply: false
    });

    const handleShareClick = useCallback((jobId: number, e: React.MouseEvent<HTMLSpanElement>): void => {
        e.stopPropagation();
        setState(prev => ({
            ...prev,
            activeShareId: prev.activeShareId === jobId ? null : jobId
        }));
    }, []);

    const handleOutsideClick = useCallback((e: MouseEvent): void => {
        const target = e.target as Element;
        const container = document.querySelector('.sharejob');
        
        if (container && !container.contains(target)) {
            setState(prev => ({ ...prev, activeShareId: null }));
        }
    }, []);

    const handleConfirmApply = useCallback((): void => {
        setState(prev => ({ ...prev, isOpenConfirmApply: true }));
    }, []);

    const handleCloseConfirmApply = useCallback((): void => {
        setState(prev => ({ ...prev, isOpenConfirmApply: false }));
    }, []);

    useEffect(() => {
        if (state.activeShareId !== null) {
            document.addEventListener('mousedown', handleOutsideClick);
            return () => document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [state.activeShareId, handleOutsideClick]);

    const CompanyLogoSection: React.ReactElement = useMemo(() => (
        <div className="col-xs-12 col-md-2 company-logo">
            <table width="100%" cellSpacing="0" cellPadding="0" style={{tableLayout: 'fixed'}}>
                <tbody>
                    <tr>
                        <td>
                            <Image 
                                src={currentJob.JOB_LOGO} 
                                alt={`${currentJob.COMPANY_NAME} logo`}
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
    ), [currentJob.JOB_LOGO, currentJob.COMPANY_NAME]);

    const JobInfoSection: React.ReactElement = useMemo(() => (
        <div className="col-xs-12 record-main">
            <div className="row">
                <span className="col-xs-12 col-sm-4 label-cate">Work Location</span>
                <span className="col-xs-12 col-sm-8 value">{currentJob.JOB_LOCATION}</span>
            </div>
            <div className="row">
                <span className="col-xs-12 col-sm-4 label-cate">Job Level</span>
                <span className="col-xs-12 col-sm-8 value">{currentJob.JOB_LEVEL}</span>
            </div>
            <div className="row">
                <span className="col-xs-12 col-sm-4 label-cate">Job Type</span>
                <span className="col-xs-12 col-sm-8 value">{currentJob.JOB_TYPE}</span>
            </div>
            <div className="row">
                <span className="col-xs-12 col-sm-4 label-cate">Qualification</span>
                <span className="col-xs-12 col-sm-8 value">{currentJob.JOB_QUALIFICATION}</span>
            </div>
            <div className="row">
                <span className="col-xs-12 col-sm-4 label-cate">Experiences</span>
                <span className="col-xs-12 col-sm-8 value">{currentJob.JOB_EXPERIENCE}</span>
            </div>
            <div className="row">
                <span className="col-xs-12 col-sm-4 label-cate">Salary</span>
                <span className="col-xs-12 col-sm-8 value">{currentJob.JOB_SALARY}</span>
            </div>
            <div className="row">
                <span className="col-xs-12 col-sm-4 label-cate">Industry</span>
                <span className="col-xs-12 col-sm-8 value">{currentJob.JOB_INDUSTRIES}</span>
            </div>
            <div className="row">
                <span className="col-xs-12 col-sm-4 label-cate">Work Type</span>
                <span className="col-xs-12 col-sm-8 value">{currentJob.WORK_TYPE}</span>
            </div>
            <div className="row">
                <span className="col-xs-12 col-sm-4 label-cate">Deadline to Apply</span>
                <span className="col-xs-12 col-sm-8 value">{currentJob.JOB_EXPIREDATE}</span>
            </div>
            <div className="row">
                <span className="col-xs-12 col-sm-4 label-cate">Contact Name</span>
                <span className="col-xs-12 col-sm-8 value">{currentJob.JOB_CONTACT_NAME}</span>
            </div>
        </div>
    ), [currentJob]);

    const ActionsSection: React.ReactElement = useMemo(() => (
        <div className="col-xs-12 actions-apply">
            <a className="btn btn-primary" onClick={handleConfirmApply}>Apply</a>
            <a className="showDialogD not-ready" href="#">Not ready to apply?</a>
        </div>
    ), [handleConfirmApply]);

    const ShareSection: React.ReactElement = useMemo(() => (
        <div className="col-xs-12 actions-invite">
            <div className="sharejob">
                <span 
                    className="genericButton tpt_socialShareButton" 
                    onClick={(e) => handleShareClick(currentJob.JOB_ID, e)}
                >
                    Share
                    {state.activeShareId === currentJob.JOB_ID && (
                        <span className="tpt_socialShareBar" style={{display: 'inline'}}>
                            <a href={currentJob.LINK_FACEBOOK} className="icon32 iconFacebook32 tpt_socialShareIcon tpt_socialSharePopupTrigger">Facebook</a>
                            <a href={currentJob.LINK_LINKEDIN} className="icon32 iconLinkedin32 tpt_socialShareIcon tpt_socialSharePopupTrigger">Linkedin</a>
                            <a href={currentJob.LINK_TWITTER} className="icon32 iconTwitter32 tpt_socialShareIcon tpt_socialSharePopupTrigger">Twitter</a>
                        </span>
                    )}
                </span>
            </div>
            <span><a href="#" className="showDialogD save-job"><i className="fa fa-heart"></i>Save to My Jobs</a></span>
        </div>
    ), [currentJob, state.activeShareId, handleShareClick]);

    const JobTagsSection: React.ReactElement = useMemo(() => (
        <div className="tagskilldetail">
            <span>Job Tag:</span>&nbsp;
            {currentJob.JOB_TAGS.map((tag, index) => (
                <a key={`${tag.TAG_NAME}-${index}`} href={tag.TAG_URL} title={tag.TAG_NAME}>
                    {tag.TAG_NAME}
                </a>
            ))}
        </div>
    ), [currentJob.JOB_TAGS]);

    const RightSidebarSection: React.ReactElement = useMemo(() => (
        <div className="col-xs-12 col-md-4 column-right">
            <ListJobViewed />
            <BoxJoin />
            <CurrentJob />
            <div className='col-xs-12 section-box survey-talent'>
                <BoxSurveyP11 />
            </div>
            <div className="col-xs-12 section-box"></div>
        </div>
    ), []);

    return (
        <>
            <div className="section-page job-detail-pre">
                <div className="container">
                    <div className="job-detail-wrapper">
                        <div className="col-xs-12 col-md-8 column-left">
                            <div className="col-xs-12 detail-head">
                                {CompanyLogoSection}
                                <div className="col-xs-12 col-md-10 detail-head-right">
                                    <h1>{currentJob.JOB_TITLE}</h1>
                                    <p className="company-name"><a href="{currentJob.COMPANY_URL}">{currentJob.COMPANY_NAME}</a></p>
                                    {JobInfoSection}
                                    {ActionsSection}
                                    {ShareSection}
                                </div>
                            </div>
                            <div className="col-xs-12 section-detail detail-midle">
                                <div className="col-xs-12 left-des">
                                    <h2 className="col_theme">Job Benefit</h2>
                                    <Benefit jobId={jobId} />
                                    <h2>Job Description</h2>
                                    <div className="content_fck" dangerouslySetInnerHTML={{__html: safeJOB_CONTENT_HTML }}></div>
                                    <h2>Job Requirement</h2>
                                    <div className="content_fck" dangerouslySetInnerHTML={{__html: safeJOB_REQUIRESKILL_HTML }}></div>
                                    {JobTagsSection}
                                </div>
                            </div>
                        </div>
                        {RightSidebarSection}
                    </div>
                </div>
            </div>
            <SimilarJobs />
            <ConfirmApply
                isOpen={state.isOpenConfirmApply}
                onClose={handleCloseConfirmApply}
            />
        </>
    );
});

JobsDetailPage.displayName = 'JobsDetailPage';

export default JobsDetailPage;
