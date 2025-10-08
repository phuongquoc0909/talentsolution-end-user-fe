'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

type FormEvent = React.FormEvent<HTMLFormElement>;

export default function RootPage() {
  const [templateName, setTemplateName] = useState<string>('');
  const router = useRouter();

  const handleSubmit = useCallback((e: FormEvent): void => {
    e.preventDefault();
    const trimmedTemplateName = templateName.trim();
    if (trimmedTemplateName) {
      router.push(`/${trimmedTemplateName}/home`);
    }
  }, [templateName, router]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setTemplateName(e.target.value);
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
              Owner/Template:
            </label>
            <input
              id="template"
              type="text"
              value={templateName}
              onChange={handleInputChange}
              placeholder="Enter owner/template name"
              style={{
                width: '100%',
                padding: '1rem',
                border: '2px solid #ddd',
                borderRadius: '6px',
                fontSize: '1.1rem',
                boxSizing: 'border-box',
                height: '3rem'
              }}
              required
              aria-describedby="template-help"
            />
            <p 
              id="template-help"
              style={{
                marginTop: '0.5rem',
                marginBottom: '0',
                color: '#999',
                fontSize: '0.9rem'
              }}
            >
              Examples: demop11, demop21, ...
            </p>
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#007bff',
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
              e.currentTarget.style.backgroundColor = '#007bff';
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
