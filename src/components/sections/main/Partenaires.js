import React from 'react';
import Image from 'next/image';
import toyota from '../../../assets/brands/toyota.png'
import yale from '../../../assets/brands/yale.png'
import heli from '../../../assets/brands/heli.png'
import tcm from '../../../assets/brands/tcm.png'
import mitsubishi from '../../../assets/brands/mitsubishi.png'
import nissan from '../../../assets/brands/nissan.png'
import bt from '../../../assets/brands/bt.png'

const Partenaires = () => {
  // Real partner logos from the web
  const logos = [
    { src: heli, alt: 'Heli', width: 100, height: 60 },
    { src: yale, alt: 'Yale', width: 100, height: 60 },
    { src: toyota, alt: 'Toyota', width: 100, height: 60 },
    { src: bt, alt: 'BT', width: 100, height: 60 },
    { src: tcm, alt: 'TCM', width: 100, height: 60 },
    { src: mitsubishi, alt: 'Mitsubishi', width: 100, height: 60 },
    { src: nissan, alt: 'Nissan', width: 100, height: 60 },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-gray-100 pt-10 pb-20">
      <h2 className="text-center text-2xl font-bold mb-6">Nos Partenaires</h2>
      <div className="relative">
        <div className="flex justify-center items-center animate-marquee [animation-play-state:running] hover:[animation-play-state:paused]">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex-shrink-0 mx-10"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
                priority={index < logos.length} // Optimize initial logos
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partenaires;