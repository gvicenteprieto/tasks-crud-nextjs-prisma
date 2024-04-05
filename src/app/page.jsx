import NavbarAside from "@/components/NavbarAside/NavbarAside";
import HeaderPages from "@/components/HeaderPages/HeaderPages";
import Image from "next/image";
import SkillsBanner from "@/components/SkillsBanner/SkillsBanner";
async function HomePage() {
  return (
    <>
      <header className="flex flex-col items-center justify-between p-10">
        <HeaderPages title={"CRUD project at Nextjs"} />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
          width={200}
          height={200}
          alt="NetxJs"
        />
        {/* <section className="flex-wrap justify-center items-center"> */}
        <h2 className="text-2xl font-semi-bold px-10">
          the React Framework for the Web.
        </h2>
      </header>
      <section className="flex flex-col justify-between items-center">
        <h3 className="text-2xl font-semi-bold mt-7 px-10">
          Tools implemented in the app.
        </h3>
        <div className="container flex justify-center items-center px-10">
          <SkillsBanner />
        </div>
        <div
          id="tools"
          className="flex flex-col justify-center items-center px-10"
        >
          <p>
            Language, libraries, framework, and tools used in the web
            application project:
          </p>
          <ul>
            <li>JavaScrip language.</li>
            <li>React library.</li>
            <li>Next.js framework.</li>
            <li>Prisma ORM.</li>
            <li>PostgreSQL database.</li>
            <li>GitHub platform.</li>
            <li>Vercel cloud infrastructure.</li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col items-center justify-between p-10">
        <NavbarAside />
      </section>
    </>
  );
}

export default HomePage;
