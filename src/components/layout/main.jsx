import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { HeaderProvider } from "../../store/HeaderContext";
import Header from "./header";
import Modal from "../modal";
import Cart from "../cart";
import { modalActions } from "../../store/modalSlice";
import Footer from "./footer";
import ItemDetails from "../itemDetails";
import ScrollToTop from "../scrollToTop";
import Loader from "../loader";
import FormConfirm from "../formCorfirmShopping";

const Main = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const cartModal = useSelector(state => state.modal.cartModal);
  const detailModal = useSelector(state => state.modal.detailModal);
  const formModal = useSelector(state => state.modal.formModal);
  const location = useLocation();
  let path = location.pathname;

  const onClose = () => {
    dispatch(modalActions.closeModalHandler());
  };
  const navigation = useNavigation();
  return (
    <div
      //className={`bg-${path === "/" ? "title-about" : "white"} bg-cover bg-center h-screen`}
    >
      <ScrollToTop />
      <HeaderProvider>
        <Header />
        {navigation.state === "loading" && <div className="grid place-items-center"><Loader /></div>}
        <Modal isOpen={isOpen} onClose={onClose}>
          {cartModal && <Cart />}
          {detailModal && <ItemDetails />}
          {formModal && <FormConfirm />}
        </Modal>
        <div>
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </HeaderProvider>
    </div>
  );
};

export default Main;
