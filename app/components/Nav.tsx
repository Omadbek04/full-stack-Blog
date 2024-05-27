"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const { status } = useSession();

  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("dark-mode");
    if (darkModePreference === "enabled") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const handlerDarkMode = () => {
    setDark((prev) => {
      const newDarkMode = !prev;
      if (newDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("dark-mode", "enabled");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("dark-mode", "disabled");
      }
      return newDarkMode;
    });
  };

  return (
    <>
      <nav className={`${dark && "dark"} w-full  py-8 `}>
        <div className=" max-w-6xl mx-auto flex justify-between items-center">
          <div className=" text-2xl">
            <Link href={"/"}>
              <Image src={`${!dark ? "/other/Logo.png" : "/other/Logo-dark.png"} `} width={158} height={56} alt="Brand logo" loading="lazy" />
            </Link>
          </div>

          <ul className=" flex justify-between items-center gap-2 cursor-pointer">
            <Link href={"/"} className=" text-[16px] leading-6 font-medium text-linkColor hover:text-black ">
              Home
            </Link>
            {status == "authenticated" ? (
              <Link href={"/dashboard"} className="text-[16px] leading-6 font-medium text-linkColor hover:text-black">
                Dashboard
              </Link>
            ) : null}
          </ul>

          <div className=" flex gap-5 items-center">
            {status == "unauthenticated" ? (
              <Link className="text-linkColor border border-indigo-500 py-2 px-3 rounded-xl hover:bg-indigo-500 hover:text-white dark:text-indigo-500 dark:hover:text-white transition-colors duration-150" href={"/login"}>
                Sign In
              </Link>
            ) : (
              <button className="text-linkColor border border-indigo-500 py-2 px-3 rounded-xl hover:bg-indigo-500 hover:text-white dark:text-indigo-500 dark:hover:text-white transition-colors duration-150" onClick={() => signOut()}>
                Sing Out
              </button>
            )}
            <label className="inline-flex items-center cursor-pointer " onClick={handlerDarkMode}>
              <input type="checkbox" value="" className="sr-only peer" checked={dark} onChange={handlerDarkMode} />
              <div className=" after:flex after:items-center relative w-11 h-6 after:justify-center bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white afler after:content-[url('/other/sunny.svg')]  after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
