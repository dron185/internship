import {useState} from "react";
import {Modal} from "../Modal/Modal.tsx";

export const Cart = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>Cart</button>
            {showModal && <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                modalTitle={'Cart'}
            >
                <ul>
                    <li>1 товар</li>
                    <li>2 товар</li>
                    <li>3 товар</li>
                </ul>
            </Modal>}
        </>
    )
}