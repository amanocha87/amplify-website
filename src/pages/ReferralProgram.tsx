import { Gift } from 'lucide-react';

const rewards = [
  "£100 Amazon or One4All gift card",
  "£200 credit towards any Amplify service",
  "A free one-stage automation build"
];

export default function ReferralProgram() {
  return (
    <div className="pt-24 pb-24 px-6 max-w-3xl mx-auto">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-8">
        <Gift className="w-8 h-8 text-purple-900" />
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
        Amplify Referral Rewards
      </h1>
      <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-12">
        Know a business that could benefit from better process, systems, AI or automation? Introduce us — and if we work together, you both get rewarded.
      </p>

      <h2 className="text-2xl font-semibold text-neutral-900 mb-6">How it works</h2>
      <ol className="space-y-4 mb-12 text-neutral-600 text-lg leading-relaxed list-decimal list-inside">
        <li>Refer a business to Amplify — just make sure they mention your name when they get in touch</li>
        <li>We complete a paid project together worth £1,000 or more</li>
        <li>You and the business you referred both choose a reward</li>
      </ol>

      <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Choose your reward</h2>
      <ul className="space-y-3 mb-12">
        {rewards.map((reward, index) => (
          <li key={index} className="text-neutral-600 text-lg leading-relaxed flex items-start gap-3">
            <span className="text-purple-900 font-semibold">•</span>
            {reward}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Terms</h2>
      <p className="text-neutral-600 leading-relaxed">
        Reward is issued once the referred project is fully paid and completed, with a minimum project value of £1,000. Both the referrer and the referred business receive their own reward, redeemable from the options above. Limited to a maximum of 3 successful referrals per person, per year.
      </p>
    </div>
  );
}
