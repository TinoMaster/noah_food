import { img_parrilla } from "@/utils/images";
import { Wy_US } from "@/components/home/wy_us";
import { AboutUs } from "@/components/home/About_us";
import { SectionMenus } from "@/components/home/Section Menus";
import { Banner_Image } from "@/components/Z-Banner_Image/Banner_Image";
import { OurEvents } from "@/components/home/OurEvents";

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
      <main className="">
        {/* La nostra Storia */}
        <AboutUs />
        <SectionMenus />
        <OurEvents />
      </main>
    </>
  );
}
