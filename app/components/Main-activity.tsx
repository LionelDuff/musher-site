"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MainActivity() {
  const router = useRouter();

  const activities = [
    {
      title: "Hiver",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, minima facere adipisci doloremque quibusdam vero voluptatibus inventore? Animi sequi, reprehenderit ratione deleniti saepe, ea, maxime suscipit explicabo alias et temporibus!",
      imageUrl: "/test.jpg",
      href: "/hiver",
    },
    {
      title: "Eté",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, minima facere adipisci doloremque quibusdam vero voluptatibus inventore? Animi sequi, reprehenderit ratione deleniti saepe, ea, maxime suscipit explicabo alias et temporibus!",
      imageUrl: "/test.jpg",
      href: "/ete",
    },
  ];

  const listActivities = activities.map((activity, i) => {
    return (
      <div
        className="xl:w-100 h-110 w-80 cursor-pointer"
        key={i}
        onClick={() => router.push(activity.href)}
      >
        <WobbleCard containerClassName="w-full h-full">
          <div className="w-full h-full flex flex-col items-center justify-center p-1">
            <div className="w-9/10 mb-4 h-60">
              <Image
                src={activity.imageUrl}
                alt={`Image de l'activité ${activity.title.toLowerCase()}`}
                width={300}
                height={300}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <h2 className="font-bold text-2xl">{activity.title}</h2>
            <p className="text-center text-muted-foreground">
              {activity.description}
            </p>
          </div>
        </WobbleCard>
      </div>
    );
  });

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center mb-20 xl:mb-30">
      <h2 className="xl:text-5xl text-4xl font-bold mb-10">
        Nos{" "}
        <PointerHighlight
          rectangleClassName="bg-primary dark:bg-primary border-none leading-loose"
          pointerClassName="text-yellow-500 h-3 w-3"
          containerClassName="inline-block mr-1"
        >
          <span className="relative z-10">activités</span>
        </PointerHighlight>
      </h2>

      <div className="w-9/10 h-auto flex xl:flex-row flex-col items-center justify-around gap-6">
        {listActivities}
      </div>
    </section>
  );
}
