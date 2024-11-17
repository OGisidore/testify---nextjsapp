import { GetServerSideProps } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const links = [
        { url: '/', changefreq: 'daily', priority: 0.7 },
        // { url: '/about', changefreq: 'monthly', priority: 0.7 },
        // { url: '/contact', changefreq: 'monthly', priority: 0.7 },
        // Add more links here
    ];

    const stream = new SitemapStream({ hostname: `https://yourwebsite.com` });
    const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data: { toString: () => any; }) => data.toString());

    res.setHeader('Content-Type', 'application/xml');
    res.write(xmlString);
    res.end();

    return {
        props: {},
    };
};

export default function Sitemap() {
    return null;
}