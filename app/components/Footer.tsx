import Link from "next/link";

import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col w-full h-fit xl:px-20 px-10 py-4">
      <div className="w-full border-t border my-4"></div>
      <div className="w-full text-center flex flex-row items-center justify-center">
        <Copyright className="mr-2" />
        <p className="xl:text-xl text-sm font-semibold">
          {new Date().getFullYear()} Tous droits réservés. Créé par{" "}
          <Link
            href="https://www.lio-dev.fr"
            target="_blank"
            className="
              relative 
              text-primary 
              font-bold 
              before:absolute 
              before:left-0 
              before:bottom-0 
              before:h-0.5 
              before:w-0 
              before:bg-primary
              before:transition-all 
              before:duration-300 
              hover:before:w-full
            "
          >
            Lionel Dufour
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
