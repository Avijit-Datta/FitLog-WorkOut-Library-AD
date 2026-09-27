"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import logoImage from "@/assets/logo.png";

export default function Navbar() {
  const { plan, saved } = usePlan();
  const router = useRouter();
  const pathname = usePathname();

  const isHomeActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo image */}
          <Image
            src={logoImage}
            alt="FitLog Logo"
            className="h-8 w-8 object-contain"
          />
          {/* Logo text */}
          <span
            className="text-2xl font-black tracking-tight"
            style={{
              background: "linear-gradient(90deg,#28BDB4,#6388D2,#9B3DDA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FITLOG
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isHomeActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isMyPlanActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            My Plan
          </Link>

          <button
            onClick={() => router.push("/my-plan?tab=today")}
            className="relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors text-gray-300 hover:text-white hover:bg-white/5"
          >
            <span>Plan</span>
            {plan.length > 0 && (
              <span
                className="flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-xs font-bold text-white"
                style={{ background: "linear-gradient(90deg,#28BDB4,#6388D2)" }}
              >
                {plan.length}
              </span>
            )}
          </button>

          <button
            onClick={() => router.push("/my-plan?tab=saved")}
            className="relative flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold transition-colors text-gray-300 hover:text-white hover:border-white/40"
          >
            <span>Saved</span>
            {saved.length > 0 && (
              <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full border border-white/30 px-1 text-xs font-bold text-gray-300">
                {saved.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
