import Section1 from "../components/AboutUs/Section1";
import Section2 from "../components/AboutUs/Section2";
import Section3 from "../components/AboutUs/Section3";

export default function AboutUs() {
  return (
    <main className="flex flex-col gap-16 md:gap-32 py-16 md:py-32 ">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
