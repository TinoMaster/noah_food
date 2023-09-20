import { Banner_Image } from "@/components/Banner_Image";
import { img_Menu } from "@/utils/images";

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Banner_Image image={img_Menu} />
      </header>
      {children}
    </>
  );
}
