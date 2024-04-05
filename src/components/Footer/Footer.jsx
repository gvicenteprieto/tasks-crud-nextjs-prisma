"use client";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer-next-app">
      <Link href="/" className="hover:bg-gray-700 hover:text-white">
        <header className="flex items-center gap-1">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            height={30}
            width={30}
            alt="NextJs"
          />
          <h2 className="text-2xl font-bold">Tasks CRUD</h2>
        </header>
      </Link>
      <h3 className="p-1 text-white">CRUD project at Nextjs. </h3>
      <p className="text-white">
        Guillermo Vicente <span>&copy; 2024</span>
      </p>
    </footer>
  );
};

export default Footer;
