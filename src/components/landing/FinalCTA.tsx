import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-800 relative overflow-hidden">
      {/* Subtle background pattern/animation if desired later */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Ready to Dive In?</h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
          Unlock a new dimension of interaction with AI personas tailored to your interests.
        </p>
        <Link href="/chat">
          <button className="px-10 py-4 font-bold text-white bg-gradient-to-r from-pink-500 to-red-600 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl active:scale-95">
            Start Your AI Journey
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
