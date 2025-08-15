import { UsersIcon, BoltIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Multiple Personas',
    description: 'Switch between different AI personas with unique personalities.',
    icon: UsersIcon,
  },
  {
    name: 'Real-time Conversation',
    description: 'Engage in smooth, real-time conversations with our AI.',
    icon: BoltIcon,
  },
  {
    name: 'Engaging Experience',
    description: 'A user-friendly interface for an enjoyable chat experience.',
    icon: ChatBubbleLeftRightIcon,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.name} className="p-8 bg-gray-800 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
              <feature.icon className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
