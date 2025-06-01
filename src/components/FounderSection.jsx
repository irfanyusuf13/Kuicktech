import React from 'react';
import photoChristopher from '../assets/sut.jpg';
import photoIrfan from '../assets/irpan.png';
import photoRizqi from '../assets/qiqi.jpg';

const foundersData = [
  {
    name: "Christopher Sutandar",
    photo: photoChristopher,
    role: "Computer Engineering 2022 Student, Universitas Indonesia" 
  },
  {
    name: "Irfan Yusuf Khaerullah",
    photo: photoIrfan,
    role: "Computer Engineering 2022 Student, Universitas Indonesia" 
  },
  {
    name: "Rizqi Zaidan",
    photo: photoRizqi,
    role: "Computer Engineering 2022 Student, Universitas Indonesia" 
  }
];

const FoundersSection = () => {
  return (
    <section id="founders" className="py-16 md:py-24 bg-gradient-to-br from-gray-700 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          Behind The <span className="text-yellow-300">KuickTech</span> 
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
          {foundersData.map((founder, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl shadow-xl backdrop-blur-sm group"> 
              <img 
                src={founder.photo} 
                alt={`Foto ${founder.name}`} 
                className="w-28 h-28 md:w-32 md:h-32 rounded-full mb-5 shadow-lg object-cover border-4 border-gray-700 group-hover:border-yellow-400 transition-colors duration-300" // Styling untuk foto
              />
              <h3 className="text-xl md:text-2xl font-semibold group-hover:text-yellow-300 transition-colors duration-300">{founder.name}</h3>
              <p className="text-yellow-200 text-sm md:text-base">{founder.role}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 md:mt-16 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
        </p>
      </div>
    </section>
  );
};

export default FoundersSection;