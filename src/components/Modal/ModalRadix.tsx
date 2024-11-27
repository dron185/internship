import * as Dialog from "@radix-ui/react-dialog";
import {Cross2Icon} from "@radix-ui/react-icons";
import s from './ModalRadix.module.css'
import {ComponentPropsWithoutRef, ReactNode} from "react";
import clsx from "clsx";

type ModalSize = 'lg' | 'md' | 'sm'

type Props = {
    open: boolean
    onClose: () => void
    children: ReactNode
    modalTitle: string
    size?: ModalSize
} & ComponentPropsWithoutRef<'div'>

export const ModalRadix = ({
                               size = 'md',
                               open,
                               onClose,
                               children,
                               modalTitle,
                               className,
                               ...rest
                           }: Props) => (
    <Dialog.Root open={open} onOpenChange={onClose} {...rest}>
        <Dialog.Portal>
            <Dialog.Overlay className={s.DialogOverlay}/>
            <Dialog.Content className={clsx(s.DialogContent, s[size], className)}>
                <Dialog.Title className={s.DialogTitle}>{modalTitle}</Dialog.Title>
                <hr/>
                {children}
                <Dialog.Close asChild>
                    <button className={s.IconButton} aria-label="Close">
                        <Cross2Icon/>
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
)