import Header from "./components/Header";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import MainActivity from "./components/Main-activity";
import Informations from "./components/Informations";
import Footer from "./components/Footer";

export default function Home() {
  const imageUrl = "/musher.jpg";

  return (
    <div className="w-screen h-screen overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main
        id="home"
        className="flex flex-col items-center w-screen min-h-[calc(100vh-14rem)] lg:pt-40 pt-30"
      >
        <section className="w-full h-screen flex items-center justify-center shadow-lg mb-20">
          <DirectionAwareHover imageUrl={imageUrl}>
            <div className="absolute xl:top-15 xl:left-20 xl:w-150 top-[15%] left-[5%] w-9/10 p-4 bg-background/70 shadow-lg rounded-xl">
              <h1 className="xl:text-3xl text-2xl font-mono font-bold">
                Partez à l’aventure au cœur du Vercors avec Triskel Wolf Lénada
                : des moments inoubliables de complicité avec nos huskys, été
                comme hiver.
              </h1>
            </div>
          </DirectionAwareHover>
        </section>
        <MainActivity />
        <Informations />
        <Footer />
      </main>
    </div>
  );
}
