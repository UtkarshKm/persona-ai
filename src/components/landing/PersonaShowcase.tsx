import PersonaCard from "./PersonaCard";

const PersonaShowcase = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Meet the Personas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <PersonaCard
            name="Hitesh Choudhary"
            imageSrc="/hitesh.webp"
            tagline="The pragmatic programmer."
            colorClass="from-cyan-500 to-blue-500"
            href="/chat?persona=hitesh"
          />
          <PersonaCard
            name="Piyush Garg"
            imageSrc="/piyush.webp"
            tagline="The enthusiastic innovator."
            colorClass="from-green-400 to-teal-500"
            href="/chat?persona=piyush"
          />
        </div>
      </div>
    </section>
  );
};

export default PersonaShowcase;
