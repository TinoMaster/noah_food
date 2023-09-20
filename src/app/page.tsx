import { img_parrilla } from "@/utils/images";
import { Banner_Image } from "@/components/Banner_Image";

const tittle = "Probando esta talla";
const bigTittle = "Feels Like Home, Tastes Like a Paaradise";

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
      <main className="rounded-tr-[50px] z-10 -translate-y-9 bg-slate-50 w-full h-[1000px]"></main>
    </>
  );
}
