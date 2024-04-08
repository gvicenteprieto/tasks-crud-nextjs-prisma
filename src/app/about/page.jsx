import NavbarAside from "@/components/NavbarAside/NavbarAside";
import HeaderPages from "@/components/HeaderPages/HeaderPages";
import ToolsBanner from "@/components/ToolsBanner/ToolsBanner";
function AboutPage() {
  return (
    <>
      <header className="flex flex-col items-center justify-between p-10">
        <HeaderPages title={"app tools"} />
      </header>
      <section className="flex flex-col justify-around items-center p-10">
        <h3 className="text-2xl font-semi-bold m-5 mx-5">
          Tools implemented at Tasks CRUD app.
        </h3>
        <aside className="container flex justify-center items-center">
          <ToolsBanner />
        </aside>
        <article
          id="tools"
          className="flex flex-wrap justify-center text-center items-center"
        >
          <li className=" mx-5">JavaScrip language</li>
          <li className=" mx-5">React library</li>
          <li className=" mx-5">Next.js framework</li>
          <li className=" mx-5">Prisma ORM</li>
          <li className=" mx-5">PostgreSQL database</li>
          <li className=" mx-5">GitHub development platform</li>
          <li className=" mx-5">Vercel cloud infrastructure</li>
        </article>
      </section>

      <section className="flex flex-col items-center justify-between p-10">
        <NavbarAside />
      </section>
    </>
  );
}

export default AboutPage;
