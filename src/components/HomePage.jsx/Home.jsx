import AuthPage from "../Signup/SignUp";
import BestSeller from "./BestSeller";
import Category from "./Category";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import InfoBar from "./InfoBar";
import TopBrands from "./TopBrands";
import WeFindForYou from "./WeFindForYou";

const HomePage = () => {
  return (
    <div className="bg-white text-black">
      <HeroSection />
      <InfoBar />
      <Category/>
      <BestSeller/>
      <FeaturesSection/>
      <TopBrands/>
      <WeFindForYou/>
      
    </div>
  );
};

export default HomePage;
