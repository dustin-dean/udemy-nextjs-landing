import Hero from "@/components/hero";
import ScaleImg from "/public/scale.jpg";

export default function Scale() {
  return (
    <>
      <Hero imgData={ScaleImg} imgAlt="cool pic" title="Only the good stuff" />
    </>
  );
}
