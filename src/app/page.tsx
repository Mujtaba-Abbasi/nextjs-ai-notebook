import TypewriterText from "@/components/TypewriterText";
import { Button } from "@/components/ui/button";
import APP_ROUTES from "@/constants/AppRoutes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-teal-100 grainy">
      <div className="flex flex-col h-screen w-screen items-center justify-center">
        <h1 className="text-7xl text-center font-semibold">
          AI <span className="text-green-600 font-bold">Note Taking </span>
          Assistant
        </h1>
        <div className="mt-4"></div>
        <h2 className="font-semibold text-3xl text-center text-slate-700">
          <TypewriterText />
        </h2>
        <div className="mt-6"></div>
        <Link href={APP_ROUTES.DASHBOARD}>
          <Button className="bg-green-600">
            Get Started
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
