import React from 'react';

interface ProjectProps {
    title: string;
    description: string;
    link: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, link }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a href={link} className="text-blue-500 hover:text-blue-700">
                    View Project
                </a>
            </div>
        </div>
    );
};

export default Project;