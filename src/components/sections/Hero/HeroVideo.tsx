import React from 'react';

interface HeroVideoProps {
  src: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ src }) => {
  return (
    <>
      <video
        className="absolute z-0 w-full object-cover animate-[fadeIn_1.2s_ease-out_0.2s_both] 
                   top-[30%] h-[70%] object-[80%_center] 
                   md:inset-0 md:h-full md:top-0 md:object-center"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Mobile-only gradient overlay div at top-[30%] fading #5F9AD1 to transparent */}
      <div 
        className="absolute md:hidden top-[30%] left-0 w-full h-32 bg-gradient-to-b from-[#5F9AD1] to-transparent z-[1] pointer-events-none" 
      />
    </>
  );
};
