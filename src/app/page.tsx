import { img_parrilla } from "@/utils/images";
import { Banner_Image } from "@/components/Z-Banner_Image/Banner_Image";
import { Wy_US } from "@/components/home/wy_us";

const tittle = "Gusto Autentico Italiano";
const bigTittle = "Sembra Casa, Sapore di Paradiso";

export default function Home() {
  return (
    <>
      <header className="min-h-[100vh] flex flex-col bg-slate-50">
        <Banner_Image
          image={img_parrilla}
          tittle={tittle}
          bigTittle={bigTittle}
        />
        <section className="section_header">
          <Wy_US />
        </section>
      </header>
      <main className="container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sint,
          eos et numquam dignissimos vitae voluptatibus voluptatem, quia
          consequatur accusantium repellendus natus, quaerat deleniti aliquid.
          Nihil ut fugit odio quibusdam!
        </p>
      </main>
    </>
  );
}
