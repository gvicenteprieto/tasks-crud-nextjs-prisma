"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-next-app">
      <Link href="/" className="hover:bg-gray-700 hover:text-white">
        <header className="flex items-center gap-1 mt-2 ">
          <h2 className="text-2xl font-bold">Tasks CRUD</h2>
        </header>
      </Link>
      <h3 className="mt-5 text-white">CRUD project at Next.Js </h3>
      <p className="p-1 text-white">
        Guillermo Vicente <span>&copy; 2024</span>
      </p>
    </footer>
  );
};

export default Footer;
