import { AiOutlineCheckSquare } from "react-icons/ai";
import { RiDeleteBin4Line } from "react-icons/ri";

import { toast } from "react-toastify";

export const successNotification = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    icon: <AiOutlineCheckSquare size={30} />,
  });
};

export const deleteToastNotify = (message) =>
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    icon: <RiDeleteBin4Line size={30} />,
    className: "bg-blue-500",
  });
