import { Calendar, Package, Sparkles, Truck } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Schedule Pickup',
    description: 'Book online or call us. Choose a convenient time that works for your schedule.',
    step: '1',
  },
  {
    icon: Package,
    title: 'We Collect',
    description: 'Our team arrives at your door to collect your laundry. Just hand it over and relax.',
    step: '2',
  },
  {
    icon: Sparkles,
    title: 'We Clean & Fold',
    description: 'Professional washing with your choice of detergent and our signature perfect fold.',
    step: '3',
  },
  {
    icon: Truck,
    title: 'We Deliver',
    description: 'Fresh, clean laundry delivered back to your door. It\'s that simple!',
    step: '4',
  },
];

export function Steps() {
  return (
    <section className="p-10 my-10 m-bg-gradient-to-br from-sky-600 via-sky-400 to-sky-600 text-white relative overflow-hidden dark:from-violet-950 dark:via-purple-950 dark:to-violet-950" id="steps">
      <div className="flex px-2 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center transform rotate-6 transition-transform hover:rotate-12">
                    <step.icon className="w-10 h-10 text-purple-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900 text-sm">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold font-custom uppercase mb-3 text-violet-950 dark:text-amber-400">
                  {step.title}
                </h3>
                <p className="text-slate-800 dark:text-sky-100 leading-relaxed font-body">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-slate-800/50">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
