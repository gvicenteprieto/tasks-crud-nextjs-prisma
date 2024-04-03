import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const HeaderPages = ({ title }) => {
  return (
    <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-10">
      <div className="mx-7 text-left">
        <h1 className="text-2xl font-semibold" title={title}>
          {title}
        </h1>
      </div>
    </header>
  );
};

export default HeaderPages;
