import { img_parrilla } from "@/utils/images";
import { Banner_Image } from "@/components/Z-Banner_Image/Banner_Image";
import { Wy_US } from "@/components/home/wy_us";

const tittle = "Gusto Autentico Italiano";
const bigTittle = "Sembra Casa, Sapore di Paradiso";

export default function Home() {
  return (
    <>
      <header>
        <Banner_Image
          image={img_parrilla}
          tittle={tittle}
          bigTittle={bigTittle}
        />
      </header>
      <main className="main">
        <Wy_US />
      </main>
    </>
  );
}
