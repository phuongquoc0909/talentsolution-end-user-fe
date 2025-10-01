'use client';

import { useState } from "react";
import SearchJobSection from "@/components/common/_searchjob_section";
import SocialSection from "@/components/demop11/box_social_section";
import BoxJobType from "@/components/demop11/job/list_job_index4"; 
import ListJobType from "@/components/demop11/job/list_job_index3";
import Pagination from "@/components/common/pagination";

export default function JobsListPage() {
  const [gridJobType, setGridJobType] = useState<'box' | 'list'>('box');
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
            View by <a href="#" onClick={() => setGridJobType('box')}><i className="fa fa-th"></i></a><a href="#" onClick={() => setGridJobType('list')}><i className="fa fa-th-list"></i></a>
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
}
