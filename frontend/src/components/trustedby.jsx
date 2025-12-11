import React from 'react';

const TrustedBy = () => {
  const companies = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" }
  ];

  const duplicated = [...companies, ...companies];

  return (
    <section className="bg-[#e6f9ed] from-gray-50 to-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider font-semibold mb-3" style={{ color: '#3DB049' }}>
            Trusted By
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#004080' }}>
            Leading Companies Worldwide
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative mb-16">

          <style>{`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .slide-track { 
              animation: slide 30s linear infinite; 
              will-change: transform;
            }
            .slide-track:hover { animation-play-state: paused; }
          `}</style>

          {/* Track */}
          <div className="flex slide-track gap-6">

            {duplicated.map((c, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-56 md:w-64"
              >
                <div className="
                  group 
                  bg-white 
                  h-28
                  px-6 
                  rounded-2xl 
                  shadow-md 
                  hover:shadow-xl
                  border-2 
                  border-transparent
                  hover:border-opacity-100
                  transition-all 
                  duration-300
                  flex 
                  flex-col 
                  items-center 
                  justify-center 
                  gap-3
                " style={{ borderColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3DB049'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                >
                  <img 
                    src={c.logo} 
                    alt={`${c.name} logo`}
                    className="
                      h-10 md:h-12
                      w-auto 
                      max-w-full
                      object-contain 
                      grayscale 
                      opacity-60
                      group-hover:grayscale-0 
                      group-hover:opacity-100
                      transition-all 
                      duration-300
                    "
                  />
                  <span 
                    className="
                      text-sm md:text-base
                      font-semibold 
                      text-center
                      truncate
                      w-full
                      px-2
                    "
                    style={{ color: '#005699' }}
                  >
                    {c.name}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl transition-transform hover:scale-105" style={{ backgroundColor: '#f0f9ff' }}>
            <p className="text-4xl font-bold mb-2" style={{ color: '#3DB049' }}>500+</p>
            <p className="text-gray-600 font-medium">Enterprise Clients</p>
          </div>

          <div className="p-6 rounded-xl transition-transform hover:scale-105" style={{ backgroundColor: '#f0f9ff' }}>
            <p className="text-4xl font-bold mb-2" style={{ color: '#004080' }}>50+</p>
            <p className="text-gray-600 font-medium">Countries Served</p>
          </div>

          <div className="p-6 rounded-xl transition-transform hover:scale-105" style={{ backgroundColor: '#f0f9ff' }}>
            <p className="text-4xl font-bold mb-2" style={{ color: '#005699' }}>99.9%</p>
            <p className="text-gray-600 font-medium">Customer Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedBy;
