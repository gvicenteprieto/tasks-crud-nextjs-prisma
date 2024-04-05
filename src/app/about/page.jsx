import NavbarAside from "@/components/NavbarAside/NavbarAside";
import HeaderPages from "@/components/HeaderPages/HeaderPages";
import ToolsBanner from "@/components/ToolsBanner/ToolsBanner";
function AboutPage() {
  return (
    <>
      <header className="flex flex-col items-center justify-between p-10">
        <HeaderPages title={"app tools"} />
      </header>
      <section className="flex flex-col justify-between items-center">
        <h3 className="text-2xl font-semi-bold mt-5 mb-2 px-10">
          Tools implemented at Tasks CRUD app.
        </h3>
        <aside className="container flex justify-center items-center px-10">
          <ToolsBanner />
        </aside>
        <article
          id="tools"
          className="flex flex-wrap justify-center items-center px-10"
        >
          {/* <p>
            Language, libraries, framework, and other tools used in the web
            application project:
          </p> */}
          {/* <ul> */}
            <li>JavaScrip language</li>
            <li>React library</li>
            <li>Next.js framework</li>
            <li>Prisma ORM</li>
            <li>PostgreSQL database</li>
            <li>GitHub development platform</li>
            <li>Vercel cloud infrastructure</li>
          {/* </ul> */}
        </article>
      </section>

      <section className="flex flex-col items-center justify-between p-10">
        <NavbarAside />
      </section>
    </>
  );
}

export default AboutPage;
