import { useState } from "react";
import useDidUpdateEffect from "~/hooks/useDidUpdateEffect";

const Toast = ({ inputToCheck, message }) => {
  const [toastMessage, setToastMessage] = useState("");
  const [toast, showToast] = useState(false);

  function toastCallback() {
    showToast(false);
    const messageTimer = setTimeout(() => {
      setToastMessage("");
    }, 1000);
    return () => clearTimeout(messageTimer);
  }

  useDidUpdateEffect(() => {
    showToast(true);
    setToastMessage(message);
    const toastTimer = setTimeout(() => toastCallback(), 1000);
    return () => clearTimeout(toastTimer);
  }, [inputToCheck, setToastMessage, showToast]);

  return (
    <div
      className={`toast toast-center ease-out duration-300 absolute z-10 ${
        toast ? "opacity-1" : "opacity-0"
      }`}
    >
      <div className="alert alert-success">
        <div>
          <span>{toastMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
