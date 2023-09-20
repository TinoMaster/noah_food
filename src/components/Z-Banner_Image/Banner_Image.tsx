import Image from "next/image";
import { Text_Banner } from "./Text_Banner";

interface image {
  src: string;
  width: number;
  height: number;
}

export const Banner_Image = ({
  image,
  tittle,
  bigTittle,
}: {
  image: image;
  tittle: string;
  bigTittle: string;
}) => {
  return (
    <section className="w-full h-[70vh] relative">
      <Text_Banner tittle={tittle} bigTittle={bigTittle} />
      <Image
        loading="lazy"
        width={image.width}
        height={image.height}
        className="w-full h-full object-cover"
        src={image.src}
        alt="prueba"
      />
    </section>
  );
};
