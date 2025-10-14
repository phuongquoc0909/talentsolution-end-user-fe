import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { JobItem as JobItemType } from '@/components/demop21/job/dataJob';

const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
const NEW_JOB_THRESHOLD_DAYS = 7;

const isNewJob = (jobActiveDate: Date): boolean => {
    const now = Date.now();
    const timeDifference = now - jobActiveDate.getTime();
    const daysDifference = Math.floor(timeDifference / MILLISECONDS_PER_DAY);
    
    return daysDifference >= 0 && daysDifference <= NEW_JOB_THRESHOLD_DAYS;
};

interface JobItemProps {
    job: JobItemType;
    onSaveJob: () => void;
}

const JobItem: React.FC<JobItemProps> = ({ job, onSaveJob }) => {
    const isHot = job.isHot === 1;
    const isNew = isNewJob(job.JOB_ACTIVEDATE);
    
    return (
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 track-tile">
            <div className={`job-element ${isHot ? 'hotjob' : ''}`}>
                <div className="tile-copy">
                    <h3>
                        <Link href={job.LINK} prefetch={false}>
                            {job.JOB_TITLE}
                        </Link>
                    </h3>
                    <ul className="metadata">
                        <li>
                            <i className="fa fa-map-marker fa-fw" aria-hidden="true"></i>
                            {job.JOB_LOCATION}
                        </li>
                        <li>{job.JOB_LEVEL}</li>
                    </ul>
                    <div className="salary">
                        <i className="fa fa-dollar fa-fw" aria-hidden="true"></i>
                        Mức Lương: {job.JOB_SALARY}
                    </div>
                    <div className="posted">
                        <i className="fa fa-calendar fa-fw" aria-hidden="true"></i>
                        Ngày Hết Hạn: {job.JOB_EXPIREDATE.toLocaleDateString('vi-VN')}
                    </div>
                </div>
                <div className="tile-bg">
                    <Image
                        src={job.JOB_LOGO}
                        alt={`Logo công ty ${job.COMPANY_NAME || 'tuyển dụng'}`}
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ width: '100%', height: 'auto' }}
                        unoptimized={true}
                        priority={false}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                </div>
                {isNew && (
                    <div className="new-label" role="status" aria-label="Tin tuyển dụng mới">
                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                        <span>New</span>
                    </div>
                )}
                <div className="favorite-container">
                    <button
                        type="button"
                        className="favorite showDialogD"
                        onClick={onSaveJob}
                        aria-label="Lưu tin tuyển dụng"
                    >
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobItem;
