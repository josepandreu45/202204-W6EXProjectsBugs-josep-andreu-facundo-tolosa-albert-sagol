import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModalActionCreator } from "../../redux/features/ui/uiSlice";
import "./Modal.css";

const Modal = () => {
  const { modal: modalText, error } = useSelector(({ ui }) => ui);
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch(closeModalActionCreator());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [closeModal]);

  return (
    <div className={`modal${error ? " error" : ""}`} onClick={closeModal}>
      {modalText}
    </div>
  );
};

export default Modal;
