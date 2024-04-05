"use client";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="header-next-app mb-4 flex justify-between items-center px-5 p-3">
      <Link href="/" className="hover:bg-gray-700 hover:text-white">
        <header className="container flex items-center gap-2">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            height={50}
            width={50}
            alt="NextJs"
          />
          <h2 className="text-2xl font-bold">Tasks CRUD</h2>
        </header>
      </Link>
      <menu className="flex space-x-0 hidden sm:ml-6 sm:block">
        <Link
          href="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-3 transition-colors text-sm font-medium border border-transparent hover:border-blue-300 hover:bg-slate-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          home
        </Link>
        <Link
          href="/tasks"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-3 transition-colors text-sm font-medium border border-transparent hover:border-blue-300 hover:bg-slate-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          tasks
        </Link>
        <Link
          href="/create"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-3 transition-colors text-sm font-medium border border-transparent hover:border-blue-300 hover:bg-slate-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          create
        </Link>
        <Link
          href="/users"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-3 transition-colors text-sm font-medium border border-transparent hover:border-blue-300 hover:bg-slate-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          users
        </Link>
        <Link
          href="/about"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-3 transition-colors text-sm font-medium border border-transparent hover:border-blue-300 hover:bg-slate-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          about
        </Link>
      </menu>

      <menu className="sm:hidden" id="mobile-menu">
        <div>
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-4 py-2 text-sm font-medium border border-transparent hover:border-blue-300 hover:bg-slate-700 "
          >
            home
          </Link>
          <Link
            href="/tasks"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-4 py-2 text-sm font-medium border border-transparent hover:border-blue-300 hover:bg-slate-700 "
          >
            tasks
          </Link>
          <Link
            href="/create"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-4 py-2 text-sm font-medium border border-transparent hover:border-blue-300 hover:bg-slate-700 "
          >
            create
          </Link>

          <Link
            href="/users"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-4 py-2 text-sm font-medium border border-transparent hover:border-blue-300 hover:bg-slate-700 "
          >
            users
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-4 py-2 text-sm font-medium border border-transparent hover:border-blue-300 hover:bg-slate-700 "
          >
            about
          </Link>
        </div>
      </menu>
    </nav>
  );
};

export default Navbar;