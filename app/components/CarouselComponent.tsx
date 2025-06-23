import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const data = [
  {
    image: "/james-padolsey-6WneSv56YVI-unsplash.jpg",
    title: "Image 1",
  },
  {
    image: "/jametlene-reskp-WHECSO-yApM-unsplash.jpg",
    title: "Image 2",
  },
  {
    image: "/nataliia-kvitovska-FZyteTJO3Dc-unsplash.jpg",
    title: "Image 3",
  },
  {
    image: "/thomas-lipke-oIuDXlOJSiE-unsplash.jpg",
    title: "Image 4",
  },
];

export default function CarouselComponent() {
  return (
    <section className="w-full flex flex-col items-center mb-20">
      <Carousel className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <CarouselContent>
          {data.map((data, i) => (
            <CarouselItem key={i}>
              <div className="relative w-full h-48 sm:h-56 md:h-80 lg:h-110">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:flex hidden" />
        <CarouselNext className="md:flex hidden" />
      </Carousel>
    </section>
  );
}
