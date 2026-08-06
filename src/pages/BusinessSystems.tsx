import SolutionTemplate from '../components/SolutionTemplate';

export default function BusinessSystems() {
  return (
    <SolutionTemplate
      category="Business Systems"
      heroTitle="Simplify The Way Your Business Works."
      heroCopy="Connect your systems, automate repetitive administration and improve the flow of information across your business."
      challengeCopy={<p>As businesses grow, they often accumulate a patchwork of disconnected software. This leads to double data entry, manual reporting, lost information, and teams spending more time on administration than actual productive work.</p>}
      helpsCopy={<p>We connect your existing tools and build automated workflows to move data seamlessly between systems. By removing the manual administration, your business becomes easier to manage and your team can achieve more.</p>}
      benefits={[
        { title: "Reduce Administration", description: "Automate repetitive data entry and administrative tasks." },
        { title: "Connect Disconnected Software", description: "Make your CRM, accounting, and operational tools talk to each other." },
        { title: "Improve Accuracy", description: "Eliminate human error by automating data transfers." }
      ]}
      included={[
        "Workflow automation",
        "Make.com",
        "Microsoft 365",
        "Google Workspace",
        "CRM integration",
        "Notifications and reminders",
        "Data transfer between systems",
        "Reporting and dashboards",
        "Removing repetitive administration"
      ]}
      worksSteps={[
        { title: "Audit", description: "We review your current software stack and manual processes." },
        { title: "Map", description: "We design the ideal data flow and identify automation opportunities." },
        { title: "Integrate", description: "We connect the systems and build the automated workflows." },
        { title: "Test", description: "We rigorously test the processes to ensure data moves accurately." }
      ]}
      forAudiences={["Growing SMEs", "Professional Services", "Manufacturing", "Agencies", "B2B Companies"]}
      faqs={[
        { question: "Do we need to change our current software?", answer: "Usually, no. We focus on connecting the tools you already use (like Microsoft 365, Google Workspace, or your existing CRM) to make them work better together." },
        { question: "What is Make.com?", answer: "Make.com is a powerful integration platform that allows us to connect thousands of different software applications and build complex automated workflows without writing custom code." },
        { question: "Is my data secure?", answer: "Yes. We use enterprise-grade integration platforms that comply with strict data security standards and GDPR regulations." }
      ]}
    />
  );
}
