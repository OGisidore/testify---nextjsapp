import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projects = [
    {
        title: 'Sneakers',
        description: 'It was a project to practice with HTML, CSS, and JavaScript 1 year ago.',
        cover : "/Sneakers.jpeg",
        link: 'https://e-com-product.netlify.app/'
    },
    {
        title: 'All DOCs',
        description: 'It was a project to practice with React, TypeScript, and Tailwind CSS 1 year ago.',
        cover : "/allDoc.jpeg",
        link: 'https://alldocs.netlify.app/'
    },
    {
        title: 'Loops Studios',
        description: ' It was a challenge from Frontend Mentor to practice with Html, css, and js 1 year ago.',
        cover : "/Loopstudio.jpeg",
        link: 'https://loopstudios-ch.netlify.app/'
    },
    {
        title: 'Time Track',
        description: 'It was a challenge from Frontend Mentor to practice with Html, css, and js 1 year ago.',
        cover : "/timetrack.jpeg",
        link: 'https://time-track32.netlify.app/'
    },
];

const Portfolio: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <p className="text-accent-foreground bg-accent font-medium p-2 text-lg  mb-6">
                Here are some of the projects I have worked on for fun and learning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <Link href={project.link} key={index} className="bg-accent/25 shadow-md hover:bg-accent border  hover:transition-[1s] rounded-lg p-2">
                        <Image src={project.cover} width={500} height={500} alt={project.title} className="mb-4 w-full" />
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        {/* <p className="text-gray-700 mb-4">{project.description}</p> */}
                        {/* <a href={project.link} className="text-blue-500 hover:underline">
                            View Project
                        </a> */}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;