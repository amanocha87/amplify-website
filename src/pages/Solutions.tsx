import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Workflow, TrendingUp, Users } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: "Business Consultancy",
      icon: <Users className="w-8 h-8 text-purple-900" />,
      problem: "Many businesses struggle with operational inefficiencies and unclear processes.",
      how: "We review your operations, identify bottlenecks, and recommend practical improvements before any technology investment.",
      outcomes: ["Clear operational roadmap", "Improved team productivity", "Streamlined processes"],
      link: "/services/business-consultancy"
    },
    {
      title: "Customer Engagement",
      icon: <MessageSquare className="w-8 h-8 text-purple-900" />,
      problem: "Missed enquiries and slow response times lead to lost revenue and poor customer experience.",
      how: "We implement systems like AI reception, voice assistants, and unified communications to ensure every customer is handled quickly.",
      outcomes: ["Capture every enquiry", "Faster response times", "Better customer satisfaction"],
      link: "/services/customer-engagement"
    },
    {
      title: "Business Systems",
      icon: <Workflow className="w-8 h-8 text-purple-900" />,
      problem: "Repetitive administration and disconnected systems slow teams down.",
      how: "We connect your existing tools, automate repetitive tasks, and improve the flow of information across your business.",
      outcomes: ["Reduced administration", "Connected workflows", "Fewer manual errors"],
      link: "/services/business-systems"
    },
    {
      title: "Digital Growth",
      icon: <TrendingUp className="w-8 h-8 text-purple-900" />,
      problem: "A weak digital presence means missing out on potential local and online customers.",
      how: "We improve your website, local visibility, and customer journey to turn more visitors into genuine enquiries.",
      outcomes: ["More website enquiries", "Better local visibility", "Higher conversion rates"],
      link: "/services/digital-growth"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen">
      <div className="max-w-4xl mb-20">
        <span className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-6 block">
          Our Solutions
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-8 leading-tight">
          Practical Ways To Improve Your Business.
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
          We combine business experience with practical technology to solve real challenges and create measurable results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white p-8 md:p-12 rounded-3xl border border-neutral-200 shadow-sm flex flex-col">
            <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mb-8">
              {solution.icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-6">
              {solution.title}
            </h2>
            
            <div className="space-y-6 mb-12 flex-grow">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-2">The Challenge</h3>
                <p className="text-neutral-600 leading-relaxed">{solution.problem}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-2">How We Help</h3>
                <p className="text-neutral-600 leading-relaxed">{solution.how}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-3">Key Outcomes</h3>
                <ul className="space-y-2">
                  {solution.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center text-neutral-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-900 mr-3"></div>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Link 
              to={solution.link}
              className="inline-flex items-center text-neutral-900 font-medium hover:text-purple-900 transition-colors group"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
