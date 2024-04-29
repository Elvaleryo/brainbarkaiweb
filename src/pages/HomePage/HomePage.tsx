import Introduction from 'components/main/home/Introduction';
import WhoWeAre from 'components/main/home/WhoWeAre';
import HowItWorks from 'components/main/home/HowItWorks';
import RoadMap from '../../components/main/home/RoadMap';
import Discover from '../../components/main/home/Discover';
import Interactive from '../../components/main/home/Interactive';
import Gaming from '../../components/main/home/Gaming';

export const HomePage = () => {
  return (
    <>
      <Introduction />
      <Discover />
      <HowItWorks />
      <Interactive />
      <Gaming />
    </>
  );
};

export default HomePage;
