'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { jobData } from '@/contants/data';

interface BoxJobTypeProps {
    showTitleSimilarJobs?: boolean;
}

const BoxJobType: React.FC<BoxJobTypeProps> = ({ showTitleSimilarJobs = false }) => {
    const [activeShareId, setActiveShareId] = useState<number | null>(null);

    const handleShareClick = (jobId: number, e: React.MouseEvent<HTMLSpanElement>): void => {
        e.stopPropagation();
        setActiveShareId(activeShareId === jobId ? null : jobId);
    };

    const handleOutsideClick = (e: MouseEvent): void => {
        const target = e.target as Element;
        const container = document.querySelector('.sharejob');
        
        if (container && !container.contains(target)) {
            setActiveShareId(null);
        }
    };

    useEffect(() => {
        if (activeShareId !== null) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [activeShareId]);

    return (
        <div className="items-wrapper">
            {showTitleSimilarJobs && <h2>Similar Jobs</h2>}
            <ul className="compact-jobs-container">
                {jobData.map((job) => (
                    <li key={job.JOB_ID} className="col-xs-12 col-sm-6 col-md-4">
                        <div className="item">
                            {job.isHot === 1 && <div className="hotjob">&nbsp;</div>}
                            <div className="company-logo">
                                <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href={job.COMPANY_URL}>
                                                    <Image 
                                                        src={job.JOB_LOGO} 
                                                        alt={job.COMPANY_NAME}
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        style={{ maxWidth: '61px', width: '100%', height: 'auto' }}
                                                        unoptimized={true}
                                                    />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h2 className="job"><Link href={job.LINK} title={job.JOB_TITLE}>{job.JOB_TITLE}</Link></h2>
                            <p className="company-name">
                                {job.COMPANY_NAME ? (
                                    <a href={job.COMPANY_URL} title={job.COMPANY_NAME}>{job.COMPANY_NAME}</a>
                                ) : (
                                    <span dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />
                                )}
                            </p>
                            <p className="area"><i className="fa fa-map-marker fa-fw"></i>{job.JOB_LOCATION}</p>
                            <p className="salary"><i className="fa fa-dollar fa-fw"></i>Salary: {job.JOB_SALARY}</p>
                            <div className="col-xs-12 bottom-item">
                                <div className="col-xs-12 col-sm-8 post-day">Deadline to Apply: {job.JOB_EXPIREDATE}</div>
                                <div className="col-xs-12 col-sm-4 apply"><Link href={job.LINK}>Apply</Link></div>
                            </div>
                            <div className="sharejob">
                                <span 
                                    className="genericButton tpt_socialShareButton" 
                                    onClick={(e) => handleShareClick(job.JOB_ID, e)}
                                >
                                    Share
                                    {activeShareId === job.JOB_ID && (
                                        <span className="tpt_socialShareBar" style={{display: 'inline'}}>
                                            <a href={job.LINK_FACEBOOK} className="icon32 iconFacebook32 tpt_socialShareIcon tpt_socialSharePopupTrigger">Facebook</a>
                                            <a href={job.LINK_LINKEDIN} className="icon32 iconLinkedin32 tpt_socialShareIcon tpt_socialSharePopupTrigger">Linkedin</a>
                                            <a href={job.LINK_TWITTER} className="icon32 iconTwitter32 tpt_socialShareIcon tpt_socialSharePopupTrigger">Twitter</a>
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BoxJobType;