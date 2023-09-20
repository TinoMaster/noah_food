import Image from "next/image";

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
    <section
      /* variants={pages}
      initial="initial"
      animate="animate" */
      className="w-full h-[70vh] relative"
    >
      <div className="absolute flex justify-center items-center w-full h-full bg-gradient-to-t from-black/40 to-black/50">
        <div className="flex flex-col gap-2 text-white w-11/12 md:w-1/3 h-5/6 justify-center">
          <p className="text-slate-300 text-xs md:text-xl font-display">
            {tittle}
          </p>
          <p className="text-3xl md:text-6xl font-display">{bigTittle}</p>
          <div className="">
            <button className="bg-gradient-to-tr from-secondary font-bold to-primary shadow-md shadow-black/20 text-lg p-2 rounded">
              Ver Menu
            </button>
          </div>
        </div>
      </div>
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
