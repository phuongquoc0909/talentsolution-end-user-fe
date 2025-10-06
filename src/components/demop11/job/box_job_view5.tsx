import React from 'react';
import Image from 'next/image';
import { jobViewedData } from '@/contants/list-job-viewed';

const ListJobViewed: React.FC = (): React.ReactElement => {

    return (
        <div className="col-xs-12 section-box also-viewed">
            <h2>People also viewed</h2>
            <ul className="col-xs-12">
                {jobViewedData.map((job) => (
                    <li key={job.JOB_ID} className="col-xs-12">
                        <div className="col-xs-3 col-md-3 col-left">
                            <div className="company-logo">
                                <table width="100%" cellPadding="0" cellSpacing="0" style={{border: '0'}}> 
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
                                                        style={{ maxWidth: '98px', width: '100%', height: 'auto' }}
                                                        unoptimized={true}
                                                    />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-xs-9 col-md-9 col-right">
                            <h3>
                                <a href={job.LINK}>{job.JOB_TITLE}</a>
                            </h3>
                            {job.COMPANY_NAME && (
                                <p className="company-name">
                                    <a href={job.COMPANY_URL}>{job.COMPANY_NAME}</a>
                                </p>
                            )}
                            <p className="area">
                                <i className="fa fa-map-marker fa-fw"></i>{job.JOB_LOCATION}
                            </p>
                            <p className="post-day">
                                <i className="fa fa-calendar-check-o fa-fw"></i>
                                Deadline to Apply: {job.JOB_EXPIREDATE}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListJobViewed;