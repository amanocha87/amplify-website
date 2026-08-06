import SolutionTemplate from '../components/SolutionTemplate';

export default function CustomerEngagement() {
  return (
    <SolutionTemplate
      category="Customer Engagement"
      heroTitle="Capture Every Enquiry. Create Better Customer Experiences."
      heroCopy="Bring voice, website chat, WhatsApp automation, lead qualification and customer support together so your business can respond quickly across every channel."
      challengeCopy={<p>Today's customers expect immediate responses. Missed calls, delayed emails and ignored website enquiries lead to lost revenue and frustrated clients. Relying solely on manual responses makes it difficult to scale your support during busy periods.</p>}
      helpsCopy={<p>We implement automated, intelligent systems that handle initial enquiries, answer common questions, and route complex issues to the right human team member. This ensures every prospect and customer receives a fast, professional response 24/7.</p>}
      benefits={[
        { title: "Never Miss A Lead", description: "Capture every enquiry instantly across all channels, ensuring no opportunity is lost." },
        { title: "24/7 Availability", description: "Provide professional, accurate responses to customer questions outside of office hours." },
        { title: "Free Up Staff Time", description: "Automate repetitive queries so your team can focus on high-value conversations and complex support." }
      ]}
      included={[
        "AI reception and call handling",
        "Voice assistants",
        "Website chatbots",
        "WhatsApp automation",
        "Lead capture and qualification",
        "Appointment booking",
        "Customer service workflows",
        "Human escalation for complex enquiries"
      ]}
      worksSteps={[
        { title: "Review", description: "We analyse your current communication channels and response times." },
        { title: "Design", description: "We map out the ideal customer journey and automated workflows." },
        { title: "Build", description: "We implement the necessary AI assistants, chatbots and integrations." },
        { title: "Refine", description: "We monitor performance and optimize responses based on real interactions." }
      ]}
      forAudiences={["Service Businesses", "Estate Agencies", "Motor Trade", "Healthcare Clinics", "Retailers"]}
      faqs={[
        { question: "Will it sound like a robot?", answer: "Modern AI assistants use natural, conversational language and can be trained to match your brand's tone of voice." },
        { question: "What happens if the AI can't help?", answer: "We build clear escalation paths. If a query is complex, it is seamlessly transferred to a human team member with the full context of the conversation." },
        { question: "Does this replace my customer service team?", answer: "No. It handles the repetitive, high-volume queries, allowing your staff to focus on meaningful customer relationships and complex problem-solving." }
      ]}
    />
  );
}
