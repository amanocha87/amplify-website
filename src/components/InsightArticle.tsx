import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const articles = {
  'why-leicestershire-businesses-should-consider-automation': {
    category: 'Leicestershire Business',
    title: 'Why Leicestershire Businesses Should Consider Automation',
    intro:
      'Automation does not have to mean replacing people or transforming your entire business. For many local businesses, the biggest opportunities are simple improvements that remove repetitive work and help customers get a faster response.',
    sections: [
      {
        heading: 'Start with the business, not the technology',
        paragraphs: [
          'The best automation projects usually start with a business problem rather than a particular piece of software.',
          'A missed enquiry, repetitive administration task or slow follow-up can often be improved without changing the way a business fundamentally operates.'
        ]
      },
      {
        heading: 'Where automation can make a difference',
        paragraphs: [
          'For local businesses, useful opportunities can include enquiry capture, appointment booking, customer follow-ups, CRM updates and handling routine questions.',
          'The aim is to give teams more time to focus on customers and the work that actually requires human judgement.'
        ]
      },
      {
        heading: 'Keep the personal touch',
        paragraphs: [
          'Good automation should make a business feel more responsive, not less personal.',
          'The technology should handle repetitive steps while people remain available for conversations, decisions and relationships where human interaction matters most.'
        ]
      }
    ]
  },

  'hidden-cost-of-missed-customer-enquiries': {
    category: 'Customer Experience',
    title: 'The Hidden Cost of Missed Customer Enquiries',
    intro:
      'A missed call or delayed reply can look like a small operational problem. For a growing business, however, repeated missed enquiries can quietly become a significant source of lost opportunities.',
    sections: [
      {
        heading: 'Every enquiry represents an opportunity',
        paragraphs: [
          'Customers often contact several businesses when they are ready to buy. If your business does not respond quickly, another company may get the conversation instead.',
          'This is particularly important for businesses where each enquiry can lead to a valuable appointment, quotation or sale.'
        ]
      },
      {
        heading: 'The problem is often the process',
        paragraphs: [
          'The issue is not always a lack of effort from staff. Teams are busy, customers arrive, phones ring and administration builds up.',
          'A clear enquiry-handling process can make sure important opportunities are captured even when the team cannot respond immediately.'
        ]
      },
      {
        heading: 'Simple systems can help',
        paragraphs: [
          'Automated enquiry capture, follow-up messages and CRM updates can create a more consistent customer journey without removing the human element.',
          'The result is fewer opportunities falling through the cracks and more time for the team to focus on converting genuine enquiries.'
        ]
      }
    ]
  },

  'ai-should-support-staff-not-replace-them': {
    category: 'AI & Automation',
    title: 'AI Should Support Staff — Not Replace Them',
    intro:
      'The most useful applications of AI are often the ones that remove repetitive work while allowing people to spend more time doing the things that require experience, judgement and empathy.',
    sections: [
      {
        heading: 'Technology should solve a business problem',
        paragraphs: [
          'AI is becoming easier to access, but that does not mean every business needs to automate everything.',
          'The right starting point is understanding where staff are spending time on repetitive tasks that could be handled more efficiently.'
        ]
      },
      {
        heading: 'Give people more time',
        paragraphs: [
          'Answering routine questions, capturing customer information and organising follow-ups can consume valuable working hours.',
          'When those tasks are supported by sensible automation, employees can concentrate on customers, sales, service and decision-making.'
        ]
      },
      {
        heading: 'Human relationships still matter',
        paragraphs: [
          'Customers still value people. Good automation should make those human interactions more effective rather than trying to remove them.',
          'That is why every AI implementation should be designed around the people, customers and processes already working within the business.'
        ]
      }
    ]
  },

  'five-repetitive-tasks-smes-can-automate': {
    category: 'Business Systems',
    title: 'Five Repetitive Tasks SMEs Can Automate',
    intro:
      'You do not need a huge technology project to benefit from automation. Many SMEs can start by improving a handful of repetitive tasks that quietly consume hours every week.',
    sections: [
      {
        heading: '1. Enquiry capture',
        paragraphs: [
          'Customer enquiries can be captured automatically and organised so that important information is not lost between calls, emails and messages.'
        ]
      },
      {
        heading: '2. Appointment booking',
        paragraphs: [
          'Routine appointment requests can often be handled automatically, reducing the back-and-forth involved in finding a suitable time.'
        ]
      },
      {
        heading: '3. Follow-ups',
        paragraphs: [
          'Simple reminders and follow-up messages can be triggered automatically so potential customers do not disappear simply because someone was too busy to respond.'
        ]
      },
      {
        heading: '4. CRM updates',
        paragraphs: [
          'Customer information and enquiry details can be transferred between systems automatically, reducing repetitive data entry.'
        ]
      },
      {
        heading: '5. Routine customer questions',
        paragraphs: [
          'Frequently asked questions can often be answered automatically while more complex conversations are passed to a member of the team.'
        ]
      }
    ]
  },

  'why-business-websites-fail-to-generate-enquiries': {
    category: 'Digital Growth',
    title: 'Why Many Business Websites Fail To Generate Enquiries',
    intro:
      'A professional-looking website is important, but appearance alone does not generate enquiries. Visitors need a clear reason to take the next step and an easy route to do it.',
    sections: [
      {
        heading: 'A website needs a clear purpose',
        paragraphs: [
          'Every page should help a visitor understand what the business does, who it helps and what they should do next.',
          'If those answers are unclear, visitors can leave even when the website looks polished.'
        ]
      },
      {
        heading: 'Make the next step obvious',
        paragraphs: [
          'A clear call to action can make a significant difference. Depending on the business, that might mean booking a review, requesting a quotation, making an enquiry or starting a conversation.'
        ]
      },
      {
        heading: 'Build the journey around the customer',
        paragraphs: [
          'The strongest websites are designed around the questions customers actually have and the decisions they need to make.',
          'That means combining clear messaging, useful content and simple journeys rather than adding technology simply because it is available.'
        ]
      }
    ]
  }
};

export default function InsightArticle() {
  const { slug } = useParams();
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-neutral-900 mb-6">
          Article not found
        </h1>
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-neutral-900 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24">
      <article className="px-6 max-w-4xl mx-auto">

        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-900">
            {article.category}
          </span>

          <div className="w-12 h-1 bg-purple-900 my-6" />

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight mb-8">
            {article.title}
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
            {article.intro}
          </p>
        </motion.header>

        <div className="space-y-12">
          {article.sections.map((section, index) => (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-5">
                {section.heading}
              </h2>

              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-lg text-neutral-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-neutral-200">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            Want to explore what's possible in your business?
          </h2>

          <p className="text-neutral-600 leading-relaxed mb-6">
            A Business Review is a practical starting point. We'll look at
            your current processes, identify opportunities and recommend only
            what makes sense for your business.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Book a Review
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </article>
    </div>
  );
}
