'use client';

import { useState, useCallback } from "react";
import SearchJobSection from "@/components/common/_searchjob_section";
import BoxJobType from "@/components/demop11/job/list_job_index4"; 
import ListJobType from "@/components/demop11/job/list_job_index3";
import Pagination from "@/components/common/pagination";

type GridJobType = 'box' | 'list';

const JobsListPage = () => {
  const [gridJobType, setGridJobType] = useState<GridJobType>('box');
  
  const handleBoxView = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setGridJobType('box');
  }, []);

  const handleListView = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setGridJobType('list');
  }, []);

  return (
    <>
      <div id="job-search">
        <SearchJobSection />
      </div>
      <div className="section-page result-job-search">
        <div className="container">
          <div className="col-xs-12 col-sm-9 col-md-9 title">
            <h1>We found <span>arrJobs</span> job key_search</h1>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-3 view-table">
            View by 
            <a href="#" onClick={handleBoxView}>
              <i className="fa fa-th"></i>
            </a>
            <a href="#" onClick={handleListView}>
              <i className="fa fa-th-list"></i>
            </a>
          </div>
          <div id="area_list_jobs">
            {gridJobType === 'box' && <BoxJobType />}
            {gridJobType === 'list' && <ListJobType />}
          </div>
          <div className="fl_right mar_top10">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsListPage;
