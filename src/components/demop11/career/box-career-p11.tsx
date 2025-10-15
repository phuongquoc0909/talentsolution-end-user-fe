import React from 'react';
import { careerData, CareerItem } from '@/contants/careerAtHome';

export const backgroundImageSection = "https://image.talentnetwork.vn/staging5///news/2020/06/24/1592995941_home.png";

const CareerSection = () => {
    const HeaderSection = (
        <header className="container-fluid">
            <h2 className="section-title">Career Opportunities</h2>
        </header>
    );
    
    const CareerListSection = (
        <div className="container-fluid container-narrow">
            <ul className="flex-row jobs">
                {careerData.map((career: CareerItem, index: number) => (
                    <li key={index} className="col-xs-6 col-sm-6 col-md-4 job">
                        <a href={career.LINK}>
                            <img 
                                src={career.imageUrl} 
                                alt={career.INDUSTRY_NAME}
                            />
                        </a>
                        <h3 className="job-title">
                            <a href={career.LINK}>{career.INDUSTRY_NAME}</a>
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    );
    
    const ViewMoreSection = (
        <div className="row">
            <div className="col-xs-3 btn-viewmore">
                <a href="#" className="btn btn-block btn-primary">View More</a>
            </div>
        </div>
    );

    return (
        <div id="11379" className="section-page section-grid-career bg-odd"
            {...(backgroundImageSection && {
                style: {
                    backgroundImage: `url(${backgroundImageSection})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                }
            })}
        >
            <div className="container">
                {HeaderSection}
                {CareerListSection}
                {ViewMoreSection}
            </div>
        </div>
    );
};

export default CareerSection;