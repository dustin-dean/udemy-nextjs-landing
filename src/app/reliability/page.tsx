import Hero from "@/components/hero";
import ReliabilityImg from "/public/reliability.jpg";

export default function Reliability() {
  return (
    <>
      <Hero
        imgData={ReliabilityImg}
        imgAlt="cool pic"
        title="Only the good stuff"
      />
    </>
  );
}
