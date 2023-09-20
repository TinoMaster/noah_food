import { img_parrilla } from "@/utils/images";
import { Banner_Image } from "@/components/Banner_Image";

const description2 = "Probando esta talla";
const description1 = "Feels Like Home, Tastes Like a Paaradise";

export default function Home() {
  return (
    <>
      <header>
        <Banner_Image
          image={img_parrilla}
          tittle={description2}
          bigTittle={description1}
        />
      </header>
      <main className="rounded-tr-[50px] z-10 -translate-y-9 bg-slate-50 w-full h-[1000px]"></main>
    </>
  );
}
