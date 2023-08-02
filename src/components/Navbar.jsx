"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navItems } from "./navlinks";
import { signOut, useSession } from "next-auth/react";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const session = useSession();
  console.log(session?.data?.user.name);
  return (
    <header className="sticky top-0 z-10 bg-slate-900 w-full  text-slate-300">
      <nav className="max-w-7xl mx-auto nav flex items-center px-2 justify-between ">
        <div className="relative sm:h-10 sm:w-10/12">
          <Link href="/">
            <Image
              src="/IMG-20180122-WA0076 (1).jpg"
              alt="logo"
              width={100}
              height={70}
              className="object-contain rounded-sm"
            />
          </Link>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex items-center gap-3 ">
            {navItems.map((nav) => (
              <li key={nav.id} className="link font-semibold ">
                <Link href={nav.url}>{nav.title}</Link>
              </li>
            ))}
            {session.status === "authenticated" && (
              <li className="flex items-center justify-center font-semibold">
                <button
                  className=" text-slate-500 hover:text-slate-600  h-10 w-auto rounded-md p-2"
                  onClick={signOut}
                >
                  Logout
                </button>
                <div className="relative flex items-center h-10 w-10">
                  {session?.data?.user.image ? (
                    <Image
                      src={session.data.user.image}
                      className="rounded-full object-cover"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <RxAvatar size={20} className="cursor-pointer" />
                  )}
                </div>
              </li>
            )}
          </ul>
        </div>
        <button className="block sm:hidden  text-slate-500 hover:text-slate-600 cursor-pointer px-4 text-4xl focus:outline-none font-semibold">
          &#9776;
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
