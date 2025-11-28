import { Truck, Droplet, Package, Zap } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Pick-up & Delivery',
    description: 'Convenient scheduled pickup and delivery right to your doorstep. No more laundromat trips.',
    color: 'sky',
  },
  {
    icon: Droplet,
    title: 'Wash & Fold',
    description: 'Professional washing with premium detergents. Your clothes treated with expert care.',
    color: 'violet',
  },
  {
    icon: Package,
    title: 'Impeccable Folding',
    description: 'Perfectly folded clothes every time. Our signature folding technique keeps items wrinkle-free.',
    color: 'green',
  },
  {
    icon: Zap,
    title: '24-Hour Express',
    description: 'Need it fast? Our next-day express service ensures your laundry is ready when you need it.',
    color: 'cyan',
  },
];


const colorClasses: Record<string, { bg: string; icon: string; hover: string }> = {
  sky: { bg: 'bg-sky-400', icon: 'text-sky-800', hover: 'hover:bg-sky-400' },
  cyan: { bg: 'bg-cyan-200', icon: 'text-cyan-600', hover: 'hover:bg-cyan-300' },
  green: { bg: 'bg-green-200', icon: 'text-green-600', hover: 'hover:bg-green-300' },
  violet: { bg: 'bg-violet-200', icon: 'text-violet-600', hover: 'hover:bg-violet-300' },
};

export function Services() {
  return (
    <section className="py-20 mb-30 bg-gradient-to-br dark:from-slate-950 dark:via-sky-950 dark:to-slate-950 dark:text-white relative overflow-hidden bg-opacity-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 mt-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold my-3 font-body uppercase text-amber-400">             Services
          </h2>
          <p className="text-xl md:text-2xl text-sky-50 max-w-2xl mx-auto font-custom font-medium mb-10">
            Comprehensive laundry solutions designed to make your life easier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 font-body pb-10 mx-10" >
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.hover} p-5 rounded-2xl transition-all transform shadow-xl hover:scale-105 hover:shadow-2xl bg-opacity-75 hover:bg-opacity-85`}
              >
                <div className={`${colors.icon} mb-3`}>
                  <service.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl text-center font-bold text-gray-900 mb-3 font-custom uppercase">
                  {service.title}
                </h3>
                <p className="text-slate-950 text-center font-body text-opacity-100 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
