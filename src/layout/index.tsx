"use client";

import { signIn, useSession } from "next-auth/react";
import type { FC, PropsWithChildren } from "react";

const DynamicLayout: FC<PropsWithChildren> = ({ children }) => {
  const { data: session, status } = useSession();

  switch (status) {
    case "loading":
      return <div>Loading...</div>;

    case "authenticated":
      return <div>{children}</div>;

    default:
      return (
        <div className="h-screen flex items-center justify-center">
          <button
            className="py-3 px-20 bg-slate-800 rounded-md text-white"
            onClick={() => signIn()}
          >
            Login
          </button>
        </div>
      );
  }
};

export default DynamicLayout;
