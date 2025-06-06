import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import Counts from "@/components/Home/Counts";
import Follow from "@/components/Home/Follow";
import Projects from "@/components/Home/Projects";
import ReviewSwiper from "@/components/Home/Reviews/UserReview";
import Skill from "@/components/Home/Skill";
import Title from "@/components/Shared/Title/Title";
import Services from "@/components/ui/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <Skill />
      <Counts />
      <Projects />
      <div className="bg-[#282A37] py-32">
        <div className="mb-10 py-6 px-3 max-w-[1180px] mx-auto">
          <Title subheader={'Client Reviews'}
            header={'What clients says about my work'}
          />
        </div>
        <ReviewSwiper />
      </div>
      <div>
        <Contact />
      </div>
      <Follow />
    </div>
  );
}
