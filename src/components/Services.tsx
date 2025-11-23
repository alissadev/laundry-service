import { Truck, Droplet, Package, Zap } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Pick-up & Delivery',
    description: 'Convenient scheduled pickup and delivery right to your doorstep. No more laundromat trips.',
    color: 'blue',
  },
  {
    icon: Droplet,
    title: 'Wash & Fold',
    description: 'Professional washing with premium detergents. Your clothes treated with expert care.',
    color: 'cyan',
  },
  {
    icon: Package,
    title: 'Impeccable Folding',
    description: 'Perfectly folded clothes every time. Our signature folding technique keeps items wrinkle-free.',
    color: 'indigo',
  },
  {
    icon: Zap,
    title: '24-Hour Express',
    description: 'Need it fast? Our next-day express service ensures your laundry is ready when you need it.',
    color: 'purple',
  },
];

const colorClasses: Record<string, { bg: string; icon: string; hover: string }> = {
  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', hover: 'hover:bg-blue-100' },
  cyan: { bg: 'bg-cyan-50', icon: 'text-cyan-600', hover: 'hover:bg-cyan-100' },
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', hover: 'hover:bg-indigo-100' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', hover: 'hover:bg-purple-100' },
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive laundry solutions designed to make your life easier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.hover} p-8 rounded-2xl transition-all transform hover:scale-105 hover:shadow-xl`}
              >
                <div className={`${colors.icon} mb-6`}>
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
