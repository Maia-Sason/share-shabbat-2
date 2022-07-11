import Image from "next/image";
import { useEffect, useState } from "react";
import useAuth from "~/hooks/useAuth";
// import useAuth from "~/hooks/useAuth";
import useDidUpdateEffect from "~/hooks/useDidUpdateEffect";
import Toast from "./Generic/Toast";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  const { isSignedIn } = useAuth();

  return (
    <div className="min-h-screen max-h-full relative flex flex-col">
      <Navigation />

      <Toast
        inputToCheck={isSignedIn}
        message={
          isSignedIn ? "Successfully Signed in" : "Successfully Signed out"
        }
      />

      <main className="relative container mx-auto p-4 max-w-md md:max-w-3xl align-center flex flex-col top-[60px] min-h-[calc(100vh-60px)] bg-red-300 justify-between">
        {children}
        <footer className="bg-green-50">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
