module.exports = {
    pathPrefix: "/oguzsh.github.io",
    siteMetadata: {
        title: `Oğuzhan İNCE`,
        description: `Frontend Developer`,
        author: `@oguzsh`,
        siteUrl: `https://oguzsh.github.io`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: "pages",
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [{
                    resolve: `gatsby-remark-prismjs`,
                    options: {
                        classPrefix: "language-",
                        inlineCodeMarker: null,
                        aliases: {},
                        showLineNumbers: false,
                        noInlineHighlight: false,
                    },
                }, ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "process.env.GOOGLE_TAG",
                head: true,
            },
        },
        'gatsby-plugin-dark-mode',
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://oguzsh.github.io",
                sitemap: "https://oguzsh.github.io/sitemap.xml",
                policy: [{
                    userAgent: "*",
                    allow: "/",
                }, ],
            },
        },
        {
            resolve: 'gatsby-plugin-html-minifier',
            options: {
                caseSensitive: false,
                collapseBooleanAttributes: false,
                useShortDoctype: false
            }
        },
        `gatsby-image`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-v2-plugin-page-transitions",
            options: {
                transitionTime: 1100,
            },
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `oguzsh-website`,
                short_name: `oguzsh-web`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                icon: `./src/images/siteLogo.png`, // This path is relative to the root of the site.
            },
        },
    ],
}
