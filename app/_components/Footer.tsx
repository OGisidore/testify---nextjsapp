import React from 'react';
import { CustomIcon } from './icons/CusturmICon';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
            <div className=" border-b justify-center flex gap-3 p-2 ">
                        <Link className="p-2 hover:bg-muted/20 rounded-full" href={"https://github.com/OGisidore"}>
                        <CustomIcon name="Github" size={25} />
                        </Link>
                        <Link className="p-2 hover:bg-muted/20 rounded-full" href={"https://www.linkedin.com/in/isidore-ogoulodo-677667209/"}>
                        <CustomIcon name="LinkedIn" size={25} />
                        </Link>
                        <Link className="p-2 hover:bg-muted/20 rounded-full" href={"https://x.com/IOgoulodo"}>
                        <CustomIcon name="X" size={25} />
                        </Link>
                    </div>
                <p>&copy; {new Date().getFullYear()}  <code>Isidore OGOULODO</code></p>
                
            </div>
        </footer>
    );
};

export default Footer;