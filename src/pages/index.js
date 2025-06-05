import Banner from "@/components/Home/Banner";
import Counts from "@/components/Home/Counts";
import Projects from "@/components/Home/Projects";
import Skill from "@/components/Home/Skill";
import Services from "@/components/ui/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <Skill />
      <Counts />
      <Projects />
    </div>
  );
}
