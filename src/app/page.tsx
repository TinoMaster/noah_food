import { img_parrilla } from "@/utils/images";
import { Banner_Image } from "@/components/Z-Banner_Image/Banner_Image";
import { Wy_US } from "@/components/home/wy_us";
import Image from "next/image";
import Link from "next/link";
import { AboutUs } from "@/components/home/About_us";

const tittle = "Gusto Autentico Italiano";
const bigTittle = "Sembra Casa, Sapore di Paradiso";

export default function Home() {
  return (
    <>
      <header className="min-h-[100vh] flex flex-col">
        <Banner_Image
          image={img_parrilla}
          tittle={tittle}
          bigTittle={bigTittle}
        />
        <section className="section_header darkBackground">
          <Wy_US />
        </section>
      </header>
      <main className="h-[1000px]">
        {/* La nostra Storia */}
        <AboutUs />
      </main>
    </>
  );
}
