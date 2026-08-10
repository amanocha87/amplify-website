import { ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  "Business Growth",
  "AI & Automation",
  "Customer Experience",
  "Business Systems",
  "Digital Growth",
  "Local Business",
  "Leicestershire Business"
];

const articles = [
  {
    slug: "why-leicestershire-businesses-should-consider-automation",
    title: "Why Leicestershire Businesses Should Consider Automation",
    category: "Leicestershire Business",
    excerpt:
      "A practical look at how local businesses can adopt simple automation tools to stay competitive without losing their personal touch."
  },
  {
    slug: "hidden-cost-of-missed-customer-enquiries",
    title: "The Hidden Cost of Missed Customer Enquiries",
    category: "Customer Experience",
    excerpt:
      "Exploring the real financial impact of delayed responses and missed calls on service businesses."
  },
  {
    slug: "ai-should-support-staff-not-replace-them",
    title: "AI Should Support Staff — Not Replace Them",
    category: "AI & Automation",
    excerpt:
      "Why the most successful technology implementations focus on freeing up teams rather than reducing headcount."
  },
  {
    slug: "five-repetitive-tasks-smes-can-automate",
    title: "Five Repetitive Tasks SMEs Can Automate",
    category: "Business Systems",
    excerpt:
      "Simple administrative processes that take up hours of time, and how practical automation can reduce the workload."
  },
  {
    slug: "why-business-websites-fail-to-generate-enquiries",
    title: "Why Many Business Websites Fail To Generate Enquiries",
    category: "Digital Growth",
    excerpt:
      "Common mistakes in local business website design and how to create clearer journeys that generate more enquiries."
  }
];

export default function Insights() {
  return (
    <div className="pt-24 pb-24">
      <div className="px-6 max-w-[1400px] mx-auto">

        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-6">
            Insights & Articles
          </h1>

          <p className="text-xl text-neutral-600 leading-relaxed mb-4">
            Practical thinking for growing businesses.
          </p>

          <p className="text-lg text-neutral-600 leading-relaxed">
            Opinion, guides, and practical advice on using technology to improve
            operations and customer experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article
              key={i}
              className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col h-full"
            >
              <div className="flex items-center gap-2 mb-6">
                <Tag className="w-4 h-4 text-purple-900" />

                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {article.category}
                </span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
                {article.title}
              </h2>

              <p className="text-neutral-600 mb-8 flex-grow leading-relaxed">
                {article.excerpt}
              </p>

              <div className="mt-auto pt-6 border-t border-neutral-100">
                <Link
                  to={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-2 text-neutral-900 font-medium border-b border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
