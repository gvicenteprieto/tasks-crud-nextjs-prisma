import NavbarAside from "@/components/NavbarAside/NavbarAside";
import HeaderPages from "@/components/HeaderPages/HeaderPages";
const NotFound = () => {
  return (
    <main className="h-[calc(100vh-5rem)] flex flex-col items-center justify-between p-10">
      <HeaderPages title={"error 404"} />

      <section className="flex flex-col justify-around items-center pt-10">
      <h3 className="text-2xl font-semi-bold mx-5"> Not found page</h3>
      
      
      </section>


      <section className="flex flex-col items-center justify-between p-10">
        <NavbarAside />
      </section>
    </main>
  );
};

export default NotFound;
