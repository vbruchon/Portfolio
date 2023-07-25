import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const links = [
        {
            id: 1,
            content: 'A propos'
        },
        {
            id: 2,
            content: 'Portfolio'
        },
        {
            id: 3,
            content: 'Experience'
        },
        {
            id: 4,
            content: 'Avis clients'
        }
    ];

    return (
        <div className='flex justify-between items-center w-full h-20 px-12 bg-black fixed'>
            <Image className='w-28' src='/img/logo-transparent.png' alt='Logo' width={100} height={100} />
            <ul className='flex'>
                {links.map(({ id, content }) => (
                    <li key={id} className='px-8 md:text-lg lg:text-2xl bolder hover:cursor-pointer hover:text-red-500'>
                        {content}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Navbar;
