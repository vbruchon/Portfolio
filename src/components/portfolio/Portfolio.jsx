import React from 'react'
import PortfolioElement from './PortfolioElement'
import CedilleFormationImg from 'public/img/cedilleFormation.png'
import MardinnovImg from 'public/img/mardinnov.png'
import SiteCVImg from 'public/img/siteCv.png'
import ArchimedeImg from 'public/img/archimede.png'
import Image from 'next/image';


function Portfolio() {
    const projects = [
        {
            id: 1,
            screenShotSrc: MardinnovImg,
            alt: "Capture d'écran du site Mardinnov.com",
            projectName: "Mardinnov",
            demoUrl: "https://mardinnov.com",
            githubLink: "",
        },
        {
            id: 2,
            screenShotSrc: CedilleFormationImg,
            alt: "Capture d'écran du site cedille-formation.fr",
            projectName: "Cédille formation",
            demoUrl: "htpps://cedille-formation.fr",
            githubLink: "",
        },
        {
            id: 3,
            screenShotSrc: ArchimedeImg,
            alt: "Logo de Archimède",
            projectName: "Archimède",
            demoUrl: "https://demo-archimede.vivianb.fr",
            githubLink: "",
        },
        {
            id: 4,
            screenShotSrc: SiteCVImg,
            alt: "Capture d'écran du site vivianb.fr",
            projectName: "Mon Portfolio",
            githubLink: "",
        },
    ]

    // Reverse the projects array
    const reversedProjects = projects.slice().reverse();

    return (
        <div className='mx-5%'>
            <h2 className='text-4xl font-bolder inline border-b-4 border-red-800'>Portfolio</h2>
            <section className="flex flex-wrap justify-center items-center min-h-screen">
                {reversedProjects.map(({ id, screenShotSrc, alt, projectName, demoUrl }) => (
                    <div key={id} className=" mr-8 relative group transform transition duration-250 hover:scale-105">
                        <Image className="mx-auto shadow-lg shadow-gray-700 rounded-2xl " src={screenShotSrc} alt={alt} width={500} height={500} />
                        <div className="overlay group-hover:opacity-100 rounded-2xl opacity-0 transition-opacity duration-300 ease-in absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center">
                            <div className="project-details text-white text-center">
                                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="bg-red-800 px-4 py-2 rounded-lg mt-2 inline-block">
                                    Discover Project
                                </a>
                                <h3 className='text-xl font-semibold mt-12'>{projectName}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Portfolio


/* 



      <Projet
        dataProject="cedilleFormation"
        imageSrc="/img/cedilleFormation.png"
        projectName="Cédille formation, l'organisme de formation mutualisé"
      />
      <Projet
        dataProject="mardinnov"
        imageSrc="/img/mardinnov.png"
        projectName="Mardinnov', l'événement sur l'innovation en Drôme"
      />
      <Projet
        dataProject="siteCV"
        imageSrc="/img/siteCv.png"
        projectName="Mon site CV / Portfolio"
      />
      <Projet
        dataProject="cedille"
        imageSrc="/img/cedille.png"
        projectName="Cédille.pro, le réseaux des Tiers-Lieux en Drôme"
        inProgressImageSrc="/img/encours.png"
      />
      <Projet
        dataProject="archimede"
        imageSrc="/img/archimede.png"
        projectName="Application Web pour la gestion de la programmation d'événements"
        inProgressImageSrc="/img/encours.png"
      />

*/