"use client";

import * as React from "react";

import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Phone, Mail } from "lucide-react";

import GoogleMap from "./Google-map";
import Image from "next/image";
import Link from "next/link";

export default function Informations() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center mb-20">
      <h2 className="xl:text-5xl text-4xl font-bold mb-10">
        Restons en{" "}
        <PointerHighlight
          rectangleClassName="bg-primary dark:bg-primary border-none leading-loose"
          pointerClassName="text-yellow-500 h-3 w-3"
          containerClassName="inline-block mr-1"
        >
          <span className="relative z-10">contact</span>
        </PointerHighlight>
      </h2>
      <div className="xl:w-9/12 xl:h-[500px] w-9/10 h-auto flex xl:flex-row flex-col items-center justify-center xl:gap-0 gap-4">
        <div className="xl:w-2/3 w-full h-auto">
          <GoogleMap />
        </div>

        <div className="xl:w-1/3 w-full h-auto flex flex-col items-start justify-start p-4 gap-2">
          <h3 className="font-bold text-3xl">Triskel Wolf Lénada</h3>
          <div className="flex items-center gap-2">
            <Phone />
            <p className="text-xl">(+33) 6 48 21 25 16</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail />
            <Link
              className="text-xl"
              href="mailto:triskelwolflenada@gmail.com?subject=Demande%20d'information&body=Bonjour%20Triskel%20Wolf%20Lénada,%0A%0AJe%20me%20permets%20de%20vous%20contacter%20afin%20d'obtenir%20plus%20d'informations%20concernant%20vos%20activités.%0A%0AMa%20demande%20porte%20sur%20:%0A-%20[Précisez%20votre%20demande%20ici]%0A%0ADans%20l'attente%20de%20votre%20retour,%0ABien%20cordialement."
            >
              triskelwolflenada@gmail.com
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/p/Triskel-Wolf-L%C3%A9nada-100075705256998/"
              target="_blank"
            >
              <Image
                className="dark:invert"
                width={30}
                height={30}
                alt="Facebook logo"
                src="/facebook.svg"
              />
            </Link>
            <Link
              href="https://https://www.instagram.com/triskel.wolf.lenada/"
              target="_blank"
            >
              <Image
                className="dark:invert"
                width={30}
                height={30}
                alt="Instagram logo"
                src="/instagram.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
