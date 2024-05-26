import Introduction from 'components/main/home/Introduction';
import HowItWorks from 'components/main/home/HowItWorks';
import Discover from '../../components/main/home/Discover';
import Interactive from '../../components/main/home/Interactive';
import Gaming from '../../components/main/home/Gaming';
import HowItWorksDiagram from '../../components/main/home/HowItWorksDiagram';

export const HomePage = () => {
  return (
    <>
      <Introduction />
      <Discover />
      <HowItWorksDiagram />
      <HowItWorks />
      <Interactive />
      <Gaming />
    </>
  );
};

export default HomePage;
