'use client';

import { useCallback, useEffect, useRef } from 'react';
import { BaseDialog } from '@/components/UI/dialog/base/BaseDialog';
import { surveyData } from '@/contants/survey';

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

const ResultSurvey = ({ isOpen, onClose }: Props) => {
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
        <div id="ResultSurvey" className="wrapDialog msgbox ResultSurvey">
                    <div className="title_msgbox">Result</div>
                    <div className="container">
                        <div className="box_width_common"><p className="title_danhgia_core col_theme">{surveyData.QUESTION_CONTENT}</p></div>
                        <div className="fl_left box_width_common">
                            <ul className="scroll_thongke">
                            {surveyData.answers.map((answer) => (
                                <li key={answer.ANSWER_ID} className="col-xs-12">
                                    <div className="info_result">
                                        <div className="label_result">{answer.ANSWER_CONTENT}</div>
                                        <div className="fl_right scroll_color">
                                            <span className="bg_center_scroll bgcolor_theme" style={{width: `${answer.ANSWER_PERCENT}%`}}>&nbsp;
                                                <label className="txt_number_ketqua">{answer.ANSWER_VOTE}%</label>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            </ul>
                            <div className="clear"></div>
                        </div>
                    </div>
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

export default ResultSurvey;
