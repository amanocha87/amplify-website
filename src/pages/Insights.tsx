import { Calendar, Tag } from 'lucide-react';

export default function Insights() {
  const categories = [
    "Business Growth", "AI & Automation", "Customer Experience", 
    "Business Systems", "Digital Growth", "Local Business", "Leicestershire Business"
  ];

  const articles = [
    {
      title: "Why Leicestershire Businesses Should Consider Automation",
      category: "Leicestershire Business",
      excerpt: "A practical look at how local businesses can adopt simple automation tools to stay competitive without losing their personal touch."
    },
    {
      title: "The Hidden Cost of Missed Customer Enquiries",
      category: "Customer Experience",
      excerpt: "Exploring the real financial impact of delayed responses and missed calls on service businesses."
    },
    {
      title: "AI Should Support Staff — Not Replace Them",
      category: "AI & Automation",
      excerpt: "Why the most successful technology implementations focus on freeing up teams rather than reducing headcount."
    },
    {
      title: "Five Repetitive Tasks SMEs Can Automate",
      category: "Business Systems",
      excerpt: "Simple administrative processes that take up hours of time, and the tools you can use to automate them."
    },
    {
      title: "Why Many Business Websites Fail To Generate Enquiries",
      category: "Digital Growth",
      excerpt: "Common mistakes in local business website design and how to optimize for better lead generation."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen">
      <div className="max-w-4xl mb-20">
        <span className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-6 block">
          Insights & Articles
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-8 leading-tight">
          Practical Thinking For Growing Businesses.
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light mb-12">
          Opinion, guides, and practical advice on using technology to improve operations and customer experience.
        </p>

        <div className="flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <span key={i} className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700">
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl mb-12 flex items-start gap-4">
        <div className="text-purple-900 font-semibold mt-0.5">Note:</div>
        <p className="text-purple-800 text-sm md:text-base leading-relaxed">
          The articles below represent planned content currently in development. They will be published soon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col h-full opacity-75">
            <div className="flex items-center gap-2 mb-6">
              <Tag className="w-4 h-4 text-purple-900" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {article.category}
              </span>
            </div>
            
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4 line-clamp-3">
              {article.title}
            </h2>
            
            <p className="text-neutral-600 mb-8 flex-grow">
              {article.excerpt}
            </p>
            
            <div className="mt-auto pt-6 border-t border-neutral-100 flex items-center gap-4 text-sm font-medium text-neutral-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
