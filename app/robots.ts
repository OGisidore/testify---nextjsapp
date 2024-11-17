export function robots() {
    return {
        rules: {
            UserAgent: "*",
            Allow: "/",
            Disallow: "/private"
        },
        sitemap: "https://isidore.dev/sitemap.xml"
    };
}