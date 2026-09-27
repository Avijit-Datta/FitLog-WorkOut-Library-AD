"use client";

import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PlanProvider } from "@/context/PlanContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <PlanProvider>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: "#111827",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "12px",
          color: "#f9fafb",
          fontSize: "14px",
        }}
      />
    </PlanProvider>
  );
}
