import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Start?</h2>
        <p className="text-lg text-white/80 mb-8">Experience the future of AI conversations today.</p>
        <Link href="/chat">
          <button className="px-8 py-3 font-bold text-cyan-500 bg-white rounded-full hover:scale-105 transition-transform">
            Chat Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
