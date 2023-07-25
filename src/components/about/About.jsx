// About.jsx

import React from 'react';
import AboutParagraphe from './AboutParagraphe';
import AboutIntro from './AboutIntro';
import AboutSocialLink from './AboutSocialLink';
import Image from 'next/image';

const About = () => {
    return (

        <section className="flex flex-wrap justy-center items-center min-h-screen">
            <div className="w-3/5 mx-5% mt-5%">
                <AboutIntro />
                <AboutParagraphe />
                <AboutSocialLink />
            </div>
            <div id="me">
                <Image className='' src='/img/me.png' alt='Logo' width={350} height={350} />
            </div>
        </section>
    );
};

export default About;
