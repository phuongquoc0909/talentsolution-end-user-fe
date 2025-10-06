'use client';
import { useState, useCallback } from 'react';
import SelectSingle from '@/components/UI/select/SelectSingle';
import '@/components/UI/chosen/chosen.css';

const optionsIndustry = [
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

const optionsLocation = [
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

export default function SearchJobSection(): React.ReactElement {
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
  
    return (
        <div className="search-jobs-main">
            <form method="get" action="https://career.vinasoy.com/job-search/en" id="frmSearchJob">
                <input name="q" type="text" className="brOrgane h15 width_545" placeholder="Search jobs" />
                <div className="chosen-container">
                  <SelectSingle
                    name="industry"
                    placeholder="Select industry..."
                    options={optionsIndustry}
                    value={selectedIndustry}
                    onChange={handleIndustryChange}
                  />
                </div>
                <div className="chosen-container">
                  <SelectSingle
                    name="location"
                    placeholder="Select location..."
                    options={optionsLocation}
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    isGrouped={true}
                  />
                </div>
                <button className="searchvt1">
                    <i className="fa fa-search"></i> <span>Search</span>
                </button>
            </form>
        </div>
    );
}
  