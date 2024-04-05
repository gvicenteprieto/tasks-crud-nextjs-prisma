import NavbarAside from "@/components/NavbarAside/NavbarAside";
import HeaderPages from "@/components/HeaderPages/HeaderPages";
import Image from "next/image";

async function HomePage() {
  return (
    <>
      <header className="flex flex-col items-center justify-between p-10">
        <HeaderPages title={"CRUD project at Next.Js"} />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
          width={250}
          height={250}
          alt="NetxJs"
        />
        <h2 className="text-2xl font-semi-bold px-10">
          the React Framework for the Web.
        </h2>
      </header>

      <section className="flex flex-col items-center justify-between p-10">
        <NavbarAside />
      </section>
    </>
  );
}

export default HomePage;
