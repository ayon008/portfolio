import Banner from "@/components/Home/Banner";
import Counts from "@/components/Home/Counts";
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
      {/* <UserReviewWrapper /> */}
      <div className="bg-[#282A37] py-32">
        <div className="mb-10 py-6 px-3 max-w-[1180px] mx-auto">
          <Title subheader={'Client Reviews'}
            header={'What clients says about my work'}
          />
        </div>
        <ReviewSwiper />
      </div>
    </div>
  );
}
