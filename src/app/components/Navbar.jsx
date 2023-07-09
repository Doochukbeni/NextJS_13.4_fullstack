"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navItems } from "./navlinks";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  return (
    <header className="sticky top-0 z-10 bg-slate-100  text-slate-800 mb-8 ">
      <nav className="max-w-7xl mx-auto nav flex items-center px-2 justify-between ">
        <div>
          <Link href="/" className="logo">
            <Image
              src="/IMG-20180122-WA0076 (1).jpg"
              alt="logo"
              width={100}
              height={70}
              className=""
            />
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-3 ">
            {navItems.map((nav) => (
              <li key={nav.id} className="link font-semibold ">
                <Link href={nav.url}>{nav.title}</Link>
              </li>
            ))}
            {session.status === "authenticated" && (
              <li className="font-semibold">
                <button
                  className=" text-slate-800 hover:text-slate-900  h-10 w-auto rounded-md p-2"
                  onClick={signOut}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
