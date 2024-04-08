"use client";
import Link from "next/link";

const Footer = () => {
  return (

    <footer className="footer-next-app justify-between items-center px-10 p-5">

      <Link href="/" className="hover:text-white">
        <header className="container flex items-center gap-2">
          <h2 className="text-2xl font-bold">Tasks CRUD</h2>
        </header>
      </Link>

      <Link href="/about" className="hover:text-white">

      <div className="text-center hover:text-white">
        <h3 >CRUD project at Next.Js </h3>
        <p>
          Guillermo Vicente <span>&copy; 2024</span>
        </p>
      </div>
      </Link>
    </footer>
  );
};

export default Footer;
