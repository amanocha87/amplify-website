import SolutionTemplate from '../components/SolutionTemplate';

export default function DigitalGrowth() {
  return (
    <SolutionTemplate
      category="Digital Growth"
      heroTitle="Build A Stronger Digital Presence That Generates Opportunities."
      heroCopy="Improve your website, local visibility and online customer journey so more visitors become genuine enquiries."
      challengeCopy={<p>Many businesses have websites that look nice but fail to generate leads. Poor local visibility, confusing navigation, and weak calls to action mean potential customers are abandoning the site and going to competitors.</p>}
      helpsCopy={<p>We rebuild or optimize your digital presence to focus entirely on conversion. From technical SEO and Google Business Profile optimization to clear user journeys, we turn your website into an active lead generation asset.</p>}
      benefits={[
        { title: "Generate More Enquiries", description: "Turn casual website visitors into qualified leads with clear customer journeys." },
        { title: "Increase Local Visibility", description: "Ensure your business appears when potential customers search in your area." },
        { title: "Better First Impressions", description: "Present a professional, trustworthy image that reflects the quality of your services." }
      ]}
      included={[
        "Website design and improvement",
        "Mobile optimisation",
        "Local SEO",
        "Google Business Profile",
        "Lead capture",
        "Conversion optimisation",
        "Customer journeys",
        "Online visibility"
      ]}
      worksSteps={[
        { title: "Analyse", description: "We review your current website performance, traffic, and local search rankings." },
        { title: "Optimize", description: "We improve the structure, speed, and conversion points of your digital assets." },
        { title: "Enhance", description: "We optimize your local profiles to capture high-intent regional searches." },
        { title: "Measure", description: "We track the increase in genuine enquiries and continue to refine the approach." }
      ]}
      forAudiences={["Local Businesses", "Trades & Home Services", "Retail", "Hospitality", "Professional Services"]}
      faqs={[
        { question: "Do I need a completely new website?", answer: "Not always. Often, we can optimize your existing website to improve loading speeds, mobile responsiveness, and lead capture without starting from scratch." },
        { question: "How long does it take to see results?", answer: "Website and conversion improvements can show results almost immediately. Local SEO and organic visibility typically take a few months to build momentum." },
        { question: "What is Local SEO?", answer: "Local SEO focuses on improving your visibility for searches in your specific geographic area (e.g., 'plumber near me'), primarily by optimizing your Google Business Profile." }
      ]}
    />
  );
}
