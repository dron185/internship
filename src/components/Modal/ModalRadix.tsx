import * as Dialog from "@radix-ui/react-dialog";
import {Cross2Icon} from "@radix-ui/react-icons";
import s from './ModalRadix.module.css'
import {ReactNode} from "react";

type Props = {
    open: boolean
    onClose: () => void
    children: ReactNode
    modalTitle: string
}

export const ModalRadix = ({open, onClose, children, modalTitle}: Props) => (
    <Dialog.Root open={open} onOpenChange={onClose}>
        {/*<Dialog.Trigger asChild>*/}
        {/*    <button className={`${s.Button} ${s.violet}`}>Delete post</button>*/}
        {/*</Dialog.Trigger>*/}
        <Dialog.Portal>
            <Dialog.Overlay className={s.DialogOverlay}/>
            <Dialog.Content className={s.DialogContent}>
                <Dialog.Title className={s.DialogTitle}>{modalTitle}</Dialog.Title>
                <hr/>
                {children}
                {/*<Dialog.Description className={s.DialogDescription}>*/}
                {/*    Are you sure you want to delete this post?*/}
                {/*</Dialog.Description>*/}
                {/*<Dialog.Close asChild>*/}
                {/*    <button className={`${s.Button} ${s.violet}`}>Yes</button>*/}
                {/*</Dialog.Close>*/}
                {/*<Dialog.Close asChild>*/}
                {/*    <button className={`${s.Button} ${s.green}`}>No</button>*/}
                {/*</Dialog.Close>*/}
                <Dialog.Close asChild>
                    <button className={s.IconButton} aria-label="Close">
                        <Cross2Icon/>
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
)


// export const ModalRadix = () => (
//     <Dialog.Root>
//         <Dialog.Trigger asChild>
//             <button className={`${s.Button} ${s.violet}`}>Edit profile</button>
//         </Dialog.Trigger>
//         <Dialog.Portal>
//             <Dialog.Overlay className={s.DialogOverlay} />
//             <Dialog.Content className={s.DialogContent}>
//                 <Dialog.Title className={s.DialogTitle}>Edit profile</Dialog.Title>
//                 <Dialog.Description className={s.DialogDescription}>
//                     Make changes to your profile here. Click save when you're done.
//                 </Dialog.Description>
//                 <fieldset className={s.Fieldset}>
//                     <label className={s.Label} htmlFor="name">
//                         Name
//                     </label>
//                     <input className={s.Input} id="name" defaultValue="Pedro Duarte" />
//                 </fieldset>
//                 <fieldset className={s.Fieldset}>
//                     <label className={s.Label} htmlFor="username">
//                         Username
//                     </label>
//                     <input className={s.Input} id="username" defaultValue="@peduarte" />
//                 </fieldset>
//                 <div
//                     style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
//                 >
//                     <Dialog.Close asChild>
//                         <button className={`${s.Button} ${s.green}`}>Save changes</button>
//                     </Dialog.Close>
//                 </div>
//                 <Dialog.Close asChild>
//                     <button className={s.IconButton} aria-label="Close">
//                         <Cross2Icon />
//                     </button>
//                 </Dialog.Close>
//             </Dialog.Content>
//         </Dialog.Portal>
//     </Dialog.Root>
// );