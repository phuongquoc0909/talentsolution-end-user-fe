'use client';

import { useCallback, useEffect, useRef } from 'react';
import { BaseDialog } from '@/components/UI/dialog/base/BaseDialog';

import '@/styles/v1/css/ts-jobseeker.css';
import '@/styles/v1/css/jsk-login.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DIALOG_STYLES = {
  container: {
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    width: '100% !important',
    border: '0 !important',
    borderRadius: '25px',
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute' as const,
    top: '20px',
    right: '20px',
    cursor: 'pointer',
  }
} as const;

const ConfirmApply = ({ isOpen, onClose }: Props) => {
  const closeButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <BaseDialog open={isOpen}>
      <div
        style={DIALOG_STYLES.container} 
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-content"
      >
        <div className="content showConfirm" style={{padding: '20px'}}>   
          <h3 id="confirm-title" className="col_theme">Confirm Apply</h3>
          <p id="confirm-content">alert_content_confirm</p>
          <div className="btnConfirm">
            <a 
              href="https://career.vinasoy.com/en/jobs/apply/?id=433950"
              aria-label="Apply for this job position"
              target="_blank"
            >
              act_confirm
            </a>
          </div>
        </div>
        <div
          id="fancybox-close" 
          ref={closeButtonRef}
          style={DIALOG_STYLES.closeButton} 
          onClick={handleClose}
          role="button"
          tabIndex={0}
          aria-label="Close confirm dialog"
        ></div>
      </div>
    </BaseDialog>
  );
};

export default ConfirmApply;
