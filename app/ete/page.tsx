import Header from "../components/Header";

export default function Ete() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <main
        id="home"
        className="flex flex-col items-center w-screen min-h-[calc(100vh-14rem)] xl:pt-70 pt-50"
      >
        <section className="w-9/10 pb-10 ">
          <p className="text-5xl font-bold">Page activités été</p>
        </section>
        <section id="competences" className="w-9/10 pb-10"></section>
        <section id="projets" className="w-9/10 pb-10"></section>
        <section id="contact" className="w-9/10 pb-10"></section>
      </main>
    </div>
  );
}
