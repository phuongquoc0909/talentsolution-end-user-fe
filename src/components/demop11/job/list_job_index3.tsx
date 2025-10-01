'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { jobData } from '@/contants/data';

const ListJobType: React.FC = () => {
    const [activeShareId, setActiveShareId] = useState<number | null>(null);
    const [hoveredRowId, setHoveredRowId] = useState<number | null>(null);

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

    const renderLocations = (locations: string): React.ReactNode => {
        const locationList = locations.split(',').map(location => location.trim());
        
        return locationList.map((location, index) => (
            <React.Fragment key={index}>
                {location}
                {index < locationList.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    const handleMouseEnter = (jobId: number): void => {
        setHoveredRowId(jobId);
    };
    const handleMouseLeave = (): void => {
        setHoveredRowId(null);
    };

    return (
        <div className="col-xs-12 list-standard-wrapper">
            <table width="100%" cellPadding="0" cellSpacing="0" className="tblJob" id="tbl_job_listing">
                <thead>
                    <tr className="bgcolor_theme header">
                        <td>Job title</td>
                        <td width="19%">Location</td>
                        <td width="16%">Salary</td>
                        <td width="16%" align="center">Deadline to Apply</td>
                    </tr>
                </thead>
                <tbody>
                    {jobData.map((job, index) => (
                        <tr 
                            key={job.JOB_ID} 
                            className={`record ${index % 2 === 1 ? 'bg' : ''} ${hoveredRowId === job.JOB_ID ? 'hover' : ''}`}
                            onMouseEnter={() => handleMouseEnter(job.JOB_ID)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <td valign="top">
                                <div className="logoJobs">
                                    <table width="100%" cellSpacing="0" cellPadding="0" style={{tableLayout: 'fixed'}}>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Image 
                                                        src={job.JOB_LOGO} 
                                                        alt={job.COMPANY_NAME}
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        style={{ maxWidth: '112px', width: '100%', height: 'auto' }}
                                                        unoptimized={true}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="name_job"><Link href={job.LINK} title={job.JOB_TITLE}>{job.JOB_TITLE}</Link></p>
                                <p className="name_com">
                                    {job.COMPANY_NAME ? (
                                        <a href={job.COMPANY_URL} title={job.COMPANY_NAME}>{job.COMPANY_NAME}</a>
                                    ) : (
                                        <span dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />
                                    )}
                                </p>
                            </td>													
                            <td valign="top">{renderLocations(job.JOB_LOCATION)}</td>
                            <td valign="top">{job.JOB_SALARY}</td>
                            <td align="center" valign="top" className="date-post-col">{job.JOB_EXPIREDATE}
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
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListJobType;