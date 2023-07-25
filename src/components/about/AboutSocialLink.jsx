import React from 'react';
import Image from 'next/image';

const AboutSocialLink = () => {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      <button className='w-2/5 rounded-lg border-2 border-red-500 p-4 hover:bg-red-500'>
        Télécharger mon CV complet
      </button>
      <a id="linkedin" href="https://www.linkedin.com/in/vivian-bruchon-89441a230/" target="_blank" className='w-1/5 block'>
        <Image className='w-3/5 mx-auto' src='/img/linkedin.png' alt='LinkedIn' width={150} height={150} />
      </a>
      <a id="github" href="https://github.com/vbruchon" target="_blank" className='w-1/5 block'>
        <Image className='w-2/5 mx-auto' src='/img/github.png' alt='GitHub' width={120} height={120} />
      </a>
    </div>
  );
};

export default AboutSocialLink;