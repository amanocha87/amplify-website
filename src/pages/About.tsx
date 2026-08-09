import Story from '../components/Story';
import HowIWork from '../components/HowIWork';
import BusinessesWeHelpThrive from '../components/BusinessesWeHelpThrive';
import Strategy from '../components/Strategy';
import FinalCTA from '../components/FinalCTA';

export default function About() {
  return (
    <div className="pt-24">
   <Story />
<HowIWork />
<BusinessesWeHelpThrive />
      <Strategy />
      <FinalCTA />
    </div>
  );
}
