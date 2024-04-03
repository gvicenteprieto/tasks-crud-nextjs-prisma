"use client";
import Link from "next/link";
const NavbarAside = () => {
  return (
    // <aside className="mb-2 text-right flex flex-nowrap lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center mt-10">
    <aside className="mb-2 text-right flex flex-nowrap lg:text-center mt-10">
      <Link
        href="/"
        className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-blue-300 hover:bg-slate-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h5>
          home{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h5>
      </Link>
      <Link
        href="/tasks"
        className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-blue-300 hover:bg-slate-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h5>
          tasks{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h5>
      </Link>
      <Link
        href="/create"
        className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-blue-300 hover:bg-slate-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h5>
          create{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h5>
      </Link>
      <Link
        href="/users"
        className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-blue-300 hover:bg-slate-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h5>
          users{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h5>
      </Link>
      <Link
        href="/about"
        className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-blue-300 hover:bg-slate-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h5>
          about{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h5>
      </Link>
    </aside>
  );
};

export default NavbarAside;
