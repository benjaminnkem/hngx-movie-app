"use client";
import { Toaster, ToastPosition } from "react-hot-toast";

const ReactToast = () => {
  const toastConfig = {
    position: "top-center" as ToastPosition,
    duration: 3000,
    style: {
      minWidth: "250px",
    },
    success: {
      icon: "👍",
    },
    error: {
      icon: "❌",
    },
    loading: {
      icon: "⏳",
      duration: Infinity,
    },
  } as const;

  return (
    <>
      <Toaster toastOptions={toastConfig} />
    </>
  );
};

export default ReactToast;
