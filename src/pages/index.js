import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import Counts from "@/components/Home/Counts";
import Follow from "@/components/Home/Follow";
import Projects from "@/components/Home/Projects";
import ReviewSwiper from "@/components/Home/Reviews/UserReview";
import Skill from "@/components/Home/Skill";
import UpAnimation from "@/components/Shared/Animations/UpAniamtiton";
import Title from "@/components/Shared/Title/Title";
import Services from "@/components/ui/Services";

export default function Home() {
  return (
    <div>
      <UpAnimation>
        <Banner />
      </UpAnimation>
      <Services />
      <Skill />
      <Counts />
      <UpAnimation>
        <div className="md:pb-0 pb-20 overflow-hidden">
          <Projects />
        </div>
      </UpAnimation>
      <div className="bg-[#282A37] py-32" id="reviews">
        <div className="mb-10 py-6 px-3 max-w-[1180px] mx-auto">
          <Title subheader={'Client Reviews'}
            header={'What clients says about my work'}
          />
        </div>
        <ReviewSwiper />
      </div>
      <UpAnimation>
        <Contact />
      </UpAnimation>
      <Follow />
    </div>
  );
}
