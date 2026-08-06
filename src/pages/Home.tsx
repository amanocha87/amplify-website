import Hero from '../components/Hero';
import BusinessesWeHelpThrive from '../components/BusinessesWeHelpThrive';
import AmplifyMethod from '../components/AmplifyMethod';
import CoreSolutions from '../components/CoreSolutions';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Story from '../components/Story';
import ReferralRewards from '../components/ReferralRewards';
import PricingCTA from '../components/PricingCTA';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessesWeHelpThrive />
      <AmplifyMethod />
      <CoreSolutions />
      <CaseStudies />
      <Testimonials />
      <Story />
      <PricingCTA />
      <ReferralRewards />
      <FinalCTA />
    </>
  );
}
