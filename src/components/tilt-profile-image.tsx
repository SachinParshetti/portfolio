'use client';

import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export function TiltProfileImage() {
  return (
    <Tilt
      className="parallax-effect-glare-scale rounded-full"
      perspective={500}
      glareEnable={false}
      scale={1.02}
      gyroscope={true}
      style={{
        borderRadius: '9999px',
      }}
    >
      <div className="relative group mb-4">
        <Image
          src="/images/profile-pic.jpeg"
          alt="Sachin Parashetti"
          width={250}
          height={250}
          className="rounded-full relative"
          style={{
             boxShadow: '0 0 10px 2px #f0abfc, 0 0 15px 5px #93c5fd, 0 0 20px 8px #6ee7b7',
          }}
       
        />
      </div>
    </Tilt>
  );
}
