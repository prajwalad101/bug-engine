import { AiOutlineCheckSquare } from "react-icons/ai";

import { toast } from "react-toastify";

export const successNotification = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    icon: <AiOutlineCheckSquare size={30} />,
  });
};
