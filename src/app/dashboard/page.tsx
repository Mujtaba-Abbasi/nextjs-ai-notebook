import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import APP_ROUTES from "@/constants/AppRoutes";
import { UserButton } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <Fragment>
      <div className="grainy min-h-screen">
        <div className="max-w-7xl mx-auto p-24 flex flex-col gap-8">
          <div className="flex justify-between items-center md:flex-row sm:flex-col">
            <div className="flex gap-4 items-center">
              <Link href={APP_ROUTES.HOME}>
                <Button className="bg-green-600" size="sm">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Go Back
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">My Notes</h1>
              <UserButton />
            </div>
          </div>

          <Separator />

          <div className="text-center">
            <div className="text-xl text-gray-500">
              You don't have any notes yet.
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
  name;
}
