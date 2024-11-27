import {ModalRadix} from "../ModalRadix.tsx";
import {Button} from "../../Button/Button.tsx";

type Props = {
    open: boolean
    onClose: () => void
}

export const DeletePostModal = ({open, onClose}: Props) => {
    return (
        <ModalRadix open={open} onClose={onClose} modalTitle={'Delete Post'}>
            <div>
                {/*Будем использовать обычные кнопки*/}
                <Button onClick={onClose} variant={"primary"}>Yes</Button>
                <Button onClick={onClose} variant={"outlined"}>No</Button>
            </div>
        </ModalRadix>
    )
}