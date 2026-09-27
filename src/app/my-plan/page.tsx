import { Suspense } from "react";
import MyPlanClient from "./MyPlanClient";

export default function MyPlanPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-950">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-teal-400" />
        </div>
      }
    >
      <MyPlanClient />
    </Suspense>
  );
}
