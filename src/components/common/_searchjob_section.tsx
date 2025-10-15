'use client';

import { useState, useCallback } from 'react';
import SelectSingle from '@/components/UI/select/SelectSingle';
import '@/components/UI/chosen/chosen.css';

const OPTIONS_INDUSTRY = [
  { value: '0', label: 'IT - Software' },
  { value: '1', label: 'Banking - Finance' },
  { value: '2', label: 'Manufacturing' },
  { value: '3', label: 'Healthcare' },
  { value: '4', label: 'Education' },
  { value: '5', label: 'Retail' },
  { value: '6', label: 'Advertising / PR / Communications' },
  { value: '7', label: 'Construction' },
  { value: '8', label: 'Hospitality' },
  { value: '9', label: 'Marketing' },
  { value: '10', label: 'Logistics' },
  { value: '11', label: 'Telecommunications' },
  { value: '12', label: 'Automotive' },
  { value: '13', label: 'Real Estate' },
  { value: '14', label: 'Consulting' },
  { value: '15', label: 'Media & Entertainment' },
];

const OPTIONS_LOCATION = [
  {
    label: 'Vietnam',
    options: [
      { value: '0', label: 'Ho Chi Minh City' },
      { value: '1', label: 'Binh Duong' },
      { value: '2', label: 'Dong Nai' },
      { value: '3', label: 'Ba Ria - Vung Tau' },
      { value: '4', label: 'Can Tho' },
      { value: '5', label: 'Long An' },
    ],
  },
];

const FORM_CONFIG = {
  SEARCH_URL: 'https://career.vinasoy.com/job-search/en',
  SEARCH_INPUT_NAME: 'q',
  SEARCH_PLACEHOLDER: 'Search jobs',
  INDUSTRY_PLACEHOLDER: 'Select industry...',
  LOCATION_PLACEHOLDER: 'Select location...',
} as const;

const SearchJobSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const handleIndustryChange = useCallback((value: string) => {
    console.log('Industry changed:', value);
    setSelectedIndustry(value);
  }, []);

  const handleLocationChange = useCallback((value: string) => {
    console.log('Location changed:', value);
    setSelectedLocation(value);
  }, []);

  // Form components
  const SearchInput = (
    <input 
      name={FORM_CONFIG.SEARCH_INPUT_NAME} 
      type="text" 
      className="brOrgane h15 width_545" 
      placeholder={FORM_CONFIG.SEARCH_PLACEHOLDER}
      aria-label="Search for jobs"
    />
  );

  const IndustrySelect = (
    <div className="chosen-container">
      <SelectSingle
        name="industry"
        placeholder={FORM_CONFIG.INDUSTRY_PLACEHOLDER}
        options={OPTIONS_INDUSTRY}
        value={selectedIndustry}
        onChange={handleIndustryChange}
      />
    </div>
  );

  const LocationSelect = (
    <div className="chosen-container">
      <SelectSingle
        name="location"
        placeholder={FORM_CONFIG.LOCATION_PLACEHOLDER}
        options={OPTIONS_LOCATION}
        value={selectedLocation}
        onChange={handleLocationChange}
        isGrouped={true}
      />
    </div>
  );

  const SearchButton = (
    <button 
      className="searchvt1" 
      type="submit"
      aria-label="Search for jobs"
    >
      <i className="fa fa-search" aria-hidden="true"></i> 
      <span>Search</span>
    </button>
  );
  
  return (
    <div className="search-jobs-main">
      <form 
        method="get" 
        action={FORM_CONFIG.SEARCH_URL} 
        id="frmSearchJob"
        role="search"
        aria-label="Job search form"
      >
        {SearchInput}
        {IndustrySelect}
        {LocationSelect}
        {SearchButton}
      </form>
    </div>
  );
};

export default SearchJobSection;
  