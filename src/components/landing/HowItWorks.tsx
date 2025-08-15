"use client";
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { UserCircleIcon, ChatBubbleLeftRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    number: 1,
    title: "Choose a Persona",
    description: "Select from a list of unique AI personas.",
    icon: UserCircleIcon,
  },
  {
    number: 2,
    title: "Start Chatting",
    description: "Engage in a conversation with the selected persona.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    number: 3,
    title: "Enjoy the Experience",
    description: "Discover the unique personality of each AI.",
    icon: SparklesIcon,
  },
];

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "p-8 border border-gray-700 rounded-2xl transition-all duration-500 ease-in-out",
                {
                  "transform scale-105 shadow-xl border-transparent bg-gradient-to-br from-gray-800 to-gray-700 ring-2 ring-offset-2 ring-offset-black ring-cyan-400": index === activeIndex, // Enhanced active state
                  "bg-gray-900 border-gray-700": index !== activeIndex, // Default state
                }
              )}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mb-6 mx-auto">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
