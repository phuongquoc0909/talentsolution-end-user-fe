// index4.tpl

import React from "react";
import SearchJobSection from "@/components/common/_searchjob_section";
import BoxJobType from "@/components/demop21/job/jobs-browse-section"; 

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
            <div className="browse-heading"><h2>Some Jobs You Might Like</h2></div>
            <BoxJobType />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsListPage;
