"use client";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer-next-app">
      <header>
        <h2 className="text-2xl font-bold">
          <Link href="/" className="hover:bg-gray-700 hover:text-white">next CRUD</Link>
        </h2>
      </header>
      <p>
        Guillermo Vicente <span>&copy; 2024</span>
      </p>
    </footer>
  );
};

export default Footer;
