import Hero from "@/components/hero";
import HomeImg from "../../public/home.jpg";

export default function Home() {
  return (
    <>
      <Hero imgData={HomeImg} imgAlt="cool pic" title="Only the good stuff" />
    </>
  );
}
