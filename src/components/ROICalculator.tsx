import { useState } from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const profiles = ['Small Business', 'Sole Trader', 'Local Business', 'Individual'];

export default function ROICalculator() {
  const [profile, setProfile] = useState('Small Business');
  const [hours, setHours] = useState(18);
  const [rate, setRate] = useState(45);

  const reclaimRate = 0.75;
  const weeklySavedHours = Math.round(hours * reclaimRate);
  const weeklyROI = Math.round(weeklySavedHours * rate);
  const annualROI = weeklyROI * 52;

  return (
    <section className="py-20 md:py-24 px-6 max-w-[1400px] mx-auto">
      <div className="max-w-3xl mb-12">
        <span className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-4 block">
          Value Assessment Tool
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
          Calculate Your Automation Potential &amp; ROI
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
          Most businesses spend 15 to 25 hours every week on repetitive admin tasks. See roughly how many hours Amplify could save you, and what that's worth.
        </p>
      </div>

      <div className="bg-neutral-50 rounded-[2rem] border border-neutral-200 p-8 md:p-12 max-w-3xl">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="w-5 h-5 text-purple-900" />
          <h3 className="text-xl font-semibold text-neutral-900">AI Savings Estimator</h3>
        </div>

        <div className="mb-8">
          <span className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-3 block">
            My Profile Type
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {profiles.map((p) => (
              <button
                key={p}
                onClick={() => setProfile(p)}
                className={`px-4 py-3 rounded-full text-sm font-medium transition-colors border ${
                  profile === p
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold tracking-widest uppercase text-neutral-500">
              Manual Hours Spent Per Week
            </span>
            <span className="text-sm font-semibold text-purple-900 bg-purple-100 px-3 py-1 rounded-full">
              {hours} Hours
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={60}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full accent-purple-900"
          />
          <div className="flex justify-between text-xs text-neutral-400 mt-1">
            <span>5 Hours</span>
            <span>30 Hours</span>
            <span>60 Hours</span>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold tracking-widest uppercase text-neutral-500">
              My Average Hourly Rate / Value
            </span>
            <span className="text-sm font-semibold text-purple-900 bg-purple-100 px-3 py-1 rounded-full">
              £{rate} / Hr
            </span>
          </div>
          <input
            type="range"
            min={15}
            max={150}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-purple-900"
          />
          <div className="flex justify-between text-xs text-neutral-400 mt-1">
            <span>£15/hr</span>
            <span>£80/hr</span>
            <span>£150/hr</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-neutral-200 p-5 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-2">
              Weekly Saved Time
            </span>
            <span className="text-2xl font-semibold text-purple-900 block">~{weeklySavedHours} Hrs</span>
            <span className="text-xs text-neutral-500">75% reclaim rate</span>
          </div>
          <div className="bg-white rounded-2xl border border-neutral-200 p-5 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-2">
              Weekly Financial ROI
            </span>
            <span className="text-2xl font-semibold text-neutral-900 block">£{weeklyROI.toLocaleString()}</span>
            <span className="text-xs text-neutral-500">At value of £{rate}/hr</span>
          </div>
          <div className="bg-white rounded-2xl border border-neutral-200 p-5 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-2">
              Annual Savings Potential
            </span>
            <span className="text-2xl font-semibold text-green-700 block">£{annualROI.toLocaleString()}</span>
            <span className="text-xs text-neutral-500">Recurring return</span>
          </div>
        </div>

        <Link
          to="/contact"
          className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white rounded-full py-4 font-semibold hover:bg-neutral-800 transition-colors"
        >
          Contact Us to Start Saving
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
