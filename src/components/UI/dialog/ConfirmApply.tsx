import { memo, useCallback, useEffect, useRef } from 'react';
import { BaseDialog } from '@/components/UI/dialog/base/BaseDialog';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DIALOG_STYLES = {
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  closeButton: {
    position: 'absolute' as const,
    top: '20px',
    right: '20px',
    cursor: 'pointer',
  }
} as const;

const ConfirmApply = memo(({ isOpen, onClose }: Props) => {
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
        className="col-xs-12 showConfirm"
        style={DIALOG_STYLES.container}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-content"
      >
        <div className="content">   
          <h3 id="confirm-title" className="col_theme">Confirm Apply</h3>
          <p id="confirm-content">alert_content_confirm</p>
        </div>
        <div className="clearall mar_top10">
          <div className="btnConfirm">
            <a 
              href="https://career.vinasoy.com/en/jobs/apply/?id=433950"
              aria-label="Apply for this job position"
              target="_blank"
              rel="noopener noreferrer"
            >
              act_confirm
            </a>
          </div>
        </div>
        <div 
          ref={closeButtonRef}
          style={DIALOG_STYLES.closeButton} 
          onClick={handleClose}
          role="button"
          tabIndex={0}
          aria-label="Close confirmation dialog"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            aria-hidden="true" 
            fill="#000000" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" />
            </g>
          </svg>
        </div>
      </div>
    </BaseDialog>
  );
});

ConfirmApply.displayName = 'ConfirmApply';

export default ConfirmApply;
