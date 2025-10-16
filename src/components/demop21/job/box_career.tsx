import Link from 'next/link';
import { jobData } from '@/components/demop21/job/dataJob';

const BoxCareer = () => {
    
    const jobItems = jobData.map((job) => (
        <li key={job.JOB_ID}>
            <Link href={job.LINK} prefetch={false} title={job.JOB_TITLE}>
                {job.JOB_TITLE}
            </Link>
        </li>
    ));
    
    return (
        <>
            <div className="insight-image career-box">
                <h2>Cơ Hội Nghề Nghiệp</h2>
                <ul>
                    {jobItems}
                </ul>
                <div className="full-width center">
                    <Link href="https://careers.himlamis.edu.vn/tim-viec-lam/tat-ca-viec-lam/vi" className="tm-bright-blue-round-button view-jobs">Xem tất cả <i className="fa fa-angle-right"></i></Link>
                </div>
            </div>
        </>
    );
};

export default BoxCareer;