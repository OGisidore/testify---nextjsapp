import Link from 'next/link';
import React from 'react';

const certifications = [
    { id: 1, Link: 'https://lablab.ai/u/@ogisidore722/cm1g6grp4000su2daeac9q82q', image: 'https://lablab.ai/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Flablab-static-eu%2Fcertificates%2FLLMXXM518VNK.png&w=640&q=75' },
    { id: 2, Link: 'https://lablab.ai/u/@ogisidore722/cm0gxnthf004pma50u658y8dm?_gl=1*17vdrcx*_up*MQ..*_ga*NTE1NDU5NTQ1LjE3MzE3ODkwNjU.*_ga_0DKXC1L0Y7*MTczMTc4OTA2NS4xLjAuMTczMTc4OTA2NS4wLjAuMTQ1MjU2OTcyNA..', image: 'https://lablab.ai/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Flablab-static-eu%2Fcertificates%2FY2RQUSH6UJ53.png&w=640&q=75' },
];

const Certification: React.FC = () => {
    return (
        <section className="py-12 bg--100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-start mb-8">Certifications</h2>
                <p className="text-accent-foreground bg-accent font-medium text-lg p-2 mb-6">
                    Here are some of the certifications I have earned  this year.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map(cert => (
                        <Link href={cert.Link} key={cert.id} className="shadow-muted-foreground border p- rounded-lg shadow-md">
                            <img src={cert.image} alt="Certification" className="w-full" />
                            
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certification;