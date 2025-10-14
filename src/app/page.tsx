'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Select from 'react-select';

type FormEvent = React.FormEvent<HTMLFormElement>;

const templateOptions = [
  {
    label: 'demop11',
    templateId: 'demop11'
  },
  {
    label: 'demop21',
    templateId: 'demop21'
  },
  {
    label: 'vinasoy',
    templateId: 'demop11'
  },
  {
    label: 'geet',
    templateId: 'demop21'
  },
];

export default function RootPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<{ templateId: string; label: string } | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = useCallback((e: FormEvent): void => {
    e.preventDefault();
    
    if (selectedTemplate?.templateId) {
      // Use templateId directly
      const templateId = selectedTemplate.templateId;
      // Pass label through URL params for DynamicCSSImporter to use
      router.push(`/${templateId}/home?template=${selectedTemplate.label}`);
    }
  }, [selectedTemplate, router]);

  const handleSelectChange = useCallback((option: { templateId: string; label: string } | null): void => {
    setSelectedTemplate(option);
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        minWidth: '400px'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          color: '#333'
        }}>
          Select Owner/Template
        </h1>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label 
              htmlFor="template" 
              style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: 'bold',
                color: '#555'
              }}
            >
              Owner/Template
            </label>
            {isMounted ? (
              <Select
                id="template"
                instanceId="template-select"
                value={selectedTemplate}
                onChange={handleSelectChange}
                options={templateOptions}
                getOptionValue={(option) => option.templateId}
                getOptionLabel={(option) => option.label}
                placeholder="Chọn hoặc nhập Owner/Template"
                isSearchable={true}
                isClearable={true}
                noOptionsMessage={() => "Template not found"}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    minHeight: '3rem',
                    border: '2px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1.1rem',
                    boxShadow: state.isFocused ? '0 0 0 1px #007bff' : 'none',
                    borderColor: state.isFocused ? '#007bff' : '#ddd',
                  }),
                  valueContainer: (provided) => ({
                    ...provided,
                    padding: '0.5rem 1rem',
                  }),
                  input: (provided) => ({
                    ...provided,
                    margin: '0',
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: '#999',
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: '#333',
                  }),
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 9999,
                  }),
                  noOptionsMessage: (provided) => ({
                    ...provided,
                    color: 'red',
                    textAlign: 'left',
                  }),
                }}
                required
                aria-describedby="template-help"
              />
            ) : (
              <div style={{
                width: '100%',
                padding: '1rem',
                border: '2px solid #ddd',
                borderRadius: '6px',
                fontSize: '1.1rem',
                boxSizing: 'border-box',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                color: '#999',
                backgroundColor: '#f9f9f9'
              }}>
                Loading...
              </div>
            )}
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#0071e3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>): void => {
              e.currentTarget.style.backgroundColor = '#0056b3';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>): void => {
              e.currentTarget.style.backgroundColor = '#0071e3';
            }}
            aria-label="Navigate to template homepage"
          >
            Go to Homepage
          </button>
        </form>
      </div>
    </div>
  );
}
