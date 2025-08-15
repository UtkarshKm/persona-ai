const HowItWorks = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-8 border border-gray-700 rounded-2xl">
            <div className="text-5xl font-bold text-cyan-400 mb-4">1</div>
            <h3 className="text-2xl font-bold text-white mb-2">Choose a Persona</h3>
            <p className="text-gray-400">Select from a list of unique AI personas.</p>
          </div>
          <div className="p-8 border border-gray-700 rounded-2xl">
            <div className="text-5xl font-bold text-cyan-400 mb-4">2</div>
            <h3 className="text-2xl font-bold text-white mb-2">Start Chatting</h3>
            <p className="text-gray-400">Engage in a conversation with the selected persona.</p>
          </div>
          <div className="p-8 border border-gray-700 rounded-2xl">
            <div className="text-5xl font-bold text-cyan-400 mb-4">3</div>
            <h3 className="text-2xl font-bold text-white mb-2">Enjoy the Experience</h3>
            <p className="text-gray-400">Discover the unique personality of each AI.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
