import Hero from "@/components/hero";
import PerformanceImg from "/public/performance.jpg";

export default function Reliability() {
  return (
    <>
      <Hero
        imgData={PerformanceImg}
        imgAlt="cool pic"
        title="Only the good stuff"
      />
    </>
  );
}
