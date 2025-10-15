// index4.tpl

import React from "react";
import SearchJobSection from "@/components/common/_searchjob_section";
import BoxJobType from "@/components/demop21/job/jobs-browse-section"; 
import { jobData } from "@/components/demop21/job/dataJob";

const JobsListPage = () => {
  return (
    <>
      <div className="main-container">
        <div className="top-hero-section">
          <div className="bg-image" style={{ backgroundImage: `url('https://image.talentnetwork.vn/geet///news/2023/09/25/1695637144_baner-geet.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
              <div className="sub-heading">
                <h1>Search Jobs</h1>
                <h2>Find Management and Executive Level Jobs. Find yours</h2>
                <div className="filters-jobs">
                  <div id="job-search">
                    <SearchJobSection />
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="section-page jobs-browse-section">
          <div className="container1200">
            {jobData.length > 0 ? (
              <>
                <div className="browse-heading"><h2>Some Jobs You Might Like</h2></div>
                <div className="block">
                  <BoxJobType />
                </div>
                <div className="full-width back-to-browse">
                  <a className="tm-brighter-blue-round-button view-jobs hidden-sm hidden-xs" href="#" id="btnNext">View More Jobs <i className="fa fa-long-arrow-right"></i></a>
                </div>
              </>
            ) : (
              <div className="no-job">
                <p><strong>No jobs found</strong></p>
                <p><a href="#">Join Our Talent Network</a> Công ty sẽ gửi thông báo việc làm phù hợp với mục tiêu nghề nghiệp của bạn .</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsListPage;
