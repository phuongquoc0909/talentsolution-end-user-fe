'use client';

import { useState, memo, useMemo, useCallback } from "react";
import SearchJobSection from "@/components/common/_searchjob_section";
import BoxJobType from "@/components/demop11/job/list_job_index4"; 
import ListJobType from "@/components/demop11/job/list_job_index3";
import Pagination from "@/components/common/pagination";

// Type definitions for better performance (TypeScript optimization)
type GridJobType = 'box' | 'list';

const JobsListPage: React.FC = memo(() => {
  const [gridJobType, setGridJobType] = useState<GridJobType>('box');
  
  // Memoized event handlers - Prevent recreation on every render (Instagram approach)
  const handleBoxView = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setGridJobType('box');
  }, []);

  const handleListView = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setGridJobType('list');
  }, []);

  // Memoized components for optimal performance (LinkedIn approach)
  const SearchSection = useMemo(() => (
    <div id="job-search">
      <SearchJobSection />
    </div>
  ), []);

  const HeaderSection = useMemo(() => (
    <div className="col-xs-12 col-sm-9 col-md-9 title">
      <h1>We found <span>arrJobs</span> job key_search</h1>
    </div>
  ), []);

  const ViewToggleSection = useMemo(() => (
    <div className="col-xs-12 col-sm-3 col-md-3 view-table">
      View by 
      <a href="#" onClick={handleBoxView}>
        <i className="fa fa-th"></i>
      </a>
      <a href="#" onClick={handleListView}>
        <i className="fa fa-th-list"></i>
      </a>
    </div>
  ), [handleBoxView, handleListView]);

  const JobContentSection = useMemo(() => (
    <div id="area_list_jobs">
      {gridJobType === 'box' && <BoxJobType />}
      {gridJobType === 'list' && <ListJobType />}
    </div>
  ), [gridJobType]);

  const PaginationSection = useMemo(() => (
    <div className="fl_right mar_top10">
      <Pagination />
    </div>
  ), []);

  // Optimized render - Early return pattern (Google approach)
  return (
    <>
      {SearchSection}
      <div className="section-page result-job-search">
        <div className="container">
          {HeaderSection}
          {ViewToggleSection}
          {JobContentSection}
          {PaginationSection}
        </div>
      </div>
    </>
  );
});

// Performance optimization - Static display name (React DevTools optimization)
JobsListPage.displayName = 'JobsListPage';

// Export with performance hint (Webpack optimization)
export default JobsListPage;
