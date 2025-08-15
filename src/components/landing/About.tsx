const About = () => {
  return (
    <section className="relative py-20 bg-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-purple-600 to-transparent filter blur-3xl animate-aurora"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-cyan-600 to-transparent filter blur-3xl animate-aurora animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">About Persona AI</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Persona AI is a modern chat application that allows you to interact with different AI personas. Each persona has a unique personality and knowledge base, providing a diverse and engaging chat experience. Our goal is to push the boundaries of human-computer interaction and create a more personalized and enjoyable way to communicate with AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
