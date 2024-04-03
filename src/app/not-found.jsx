import NavbarAside from "@/components/NavbarAside/NavbarAside";
import HeaderPages from "@/components/HeaderPages/HeaderPages";
const NotFound = () => {
  return (
    <main className="h-[calc(100vh-5rem)] flex flex-col items-center justify-between p-10">
      <HeaderPages title={"error 404"} />
      <section className="container mx-auto flex justify-center items-center">
       <h2 className="text-3xl font-bold"> Not found page</h2>
      </section>
      <NavbarAside />
    </main>
  );
};

export default NotFound;
