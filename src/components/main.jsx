import { Outlet } from "react-router-dom";

import Header from "./header";
import Modal from "./modal";
import Cart from "./cart";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modalSlice";
import Footer from "./footer";

const Main = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modal.isOpen);

    const onClose = () => {
       dispatch(modalActions.closeModalHandler());
    }

    return (
        <div className="text-center bg-orange-300">
            <Header />
            <Modal isOpen={isOpen} onClose={onClose}>
                <Cart />
            </Modal>
            <div>
                <h1>Acá te presentamos nuetros productos.</h1>
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Main;