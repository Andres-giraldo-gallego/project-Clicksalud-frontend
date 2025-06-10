import OurServicesSection from '../OurServicesSection/OurServicesSection.jsx';
import MainCategoriesSection from '../MainCategoriesSection/MainCategoriesSection.jsx';
import VisionMissionSection from '../VisionMissionSection/VisionMissionSection.jsx';
import HeroSection from '../HeroSection/HeroSection.jsx';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <VisionMissionSection />
      <MainCategoriesSection />
      <OurServicesSection />
    </div>
  );
};
export default Home;
