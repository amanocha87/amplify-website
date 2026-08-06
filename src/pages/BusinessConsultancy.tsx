import SolutionTemplate from '../components/SolutionTemplate';

export default function BusinessConsultancy() {
  return (
    <SolutionTemplate
      category="Business Consultancy"
      heroTitle="Business Consultancy For Ambitious Businesses"
      heroCopy="Helping business owners make better decisions, improve systems and identify opportunities before investing in technology."
      challengeCopy={<p>Many businesses invest in software hoping it will solve operational problems. We believe the opposite approach delivers better results. Technology should follow strategy, not replace it.</p>}
      helpsCopy={<p>Before recommending AI, automation or digital systems, we take time to understand how your business operates, where opportunities are being missed and where practical improvements can create measurable value.</p>}
      benefits={[
        { title: "Clear Roadmap", description: "Gain a clear, practical plan for improving operations and technology." },
        { title: "Avoid Wasted Investment", description: "Ensure you only invest in technology that solves genuine business problems." },
        { title: "Measurable Results", description: "Focus on improvements that directly impact the bottom line and team productivity." }
      ]}
      included={[
        "Business review",
        "Process improvement",
        "Customer experience",
        "Sales processes",
        "Operational efficiency",
        "Recommendations before technology investment",
        "Practical implementation roadmap"
      ]}
      worksSteps={[
        { title: "Understand", description: "We learn about your business, customers and current processes." },
        { title: "Discover", description: "We identify bottlenecks, missed opportunities and areas where improvements could create measurable value." },
        { title: "Recommend", description: "We provide practical recommendations focused on business improvement rather than unnecessary technology." },
        { title: "Implement", description: "Where appropriate, we help implement AI, automation, digital systems and growth strategies." }
      ]}
      forAudiences={[
        "Business owners", "Managing Directors", "Operations Managers", "Growing SMEs", 
        "Family Businesses", "Professional Services"
      ]}
      faqs={[
        { question: "What happens during a business review?", answer: "We conduct an in-depth conversation to understand your current operations, identify immediate pain points, and explore your growth goals." },
        { question: "Do you force us to use specific software?", answer: "No. We remain software-agnostic and always look to maximize the tools you already have before suggesting new investments." },
        { question: "How long does a typical consultancy project take?", answer: "The initial discovery phase is usually completed within a few weeks, allowing us to deliver a fast, practical roadmap for improvement." }
      ]}
    />
  );
}
