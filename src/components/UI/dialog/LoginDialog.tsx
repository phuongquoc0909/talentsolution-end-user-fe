import { BaseDialog } from '@/components/UI/dialog/base/BaseDialog';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const btnQuit: React.CSSProperties = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  cursor: 'pointer',
}

export default function LoginDialog({ isOpen, onClose }: Props) {
  return (
    <BaseDialog open={isOpen}>
        <div className="col-xs-12 showConfirm"
            style={{  
                backgroundColor: '#fff',
                padding: 20,
            }}
        >
            <div className="content">   
                <h3 className="col_theme">Login</h3>
                <p>alert_content_login</p>
            </div>
            <div style={btnQuit} onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="#000000" xmlns="http://www.w3.org/2000/svg"><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>
            </div>
        </div>
    </BaseDialog>
  );
}
