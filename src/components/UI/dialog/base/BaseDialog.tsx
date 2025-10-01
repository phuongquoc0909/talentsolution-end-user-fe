import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

import style from './base-dialog.module.css';

type BaseDialogProps = {
  open?: boolean;
  children: React.ReactNode;
  className?: string;
  trigger?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  style?: React.CSSProperties;
  disableClickOutside?: boolean;
};

export const BaseDialog: React.FC<BaseDialogProps> = ({
  open,
  children,
  onOpenChange,
  className,
  style: customStyle,
  disableClickOutside = false,
  ...props
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {props.trigger && (
        <Dialog.Trigger asChild>{props.trigger}</Dialog.Trigger>
      )}
      <Dialog.Portal>
        <Dialog.Overlay className={style.dialogOverlay} />
        <Dialog.Content
          className={`${style.dialogContent} ${className || ''}`}
          style={{
            ...customStyle,
          }}
          {...props}
          onPointerDownOutside={(e) =>
            disableClickOutside ? e.preventDefault() : null
          }
        >
          <VisuallyHidden.Root>
            <Dialog.Title />
            <Dialog.Description />
          </VisuallyHidden.Root>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
