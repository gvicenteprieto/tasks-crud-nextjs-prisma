import NavbarAside from "@/components/NavbarAside/NavbarAside";
import HeaderPages from "@/components/HeaderPages/HeaderPages";
function AboutPage() {
  return (
    <main className="h-[calc(100vh-5rem)] flex flex-col items-center justify-between p-10">
      <HeaderPages title={"about page"} />
      <section className="container flex-wrap justify-center items-center">
        <h2 className="text-2xl font-bold my-5"> about content</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam exercitationem perspiciatis magnam suscipit cumque officia eaque, asperiores at aperiam, nihil cum. Veniam nisi a quas necessitatibus commodi doloribus esse alias eligendi ipsum consequuntur repudiandae rerum similique nemo maxime placeat, quisquam sed, beatae, vero soluta? Atque nesciunt nemo quo deleniti? Architecto.</p>
      </section>
      <NavbarAside />
    </main>
  );
}

export default AboutPage;
