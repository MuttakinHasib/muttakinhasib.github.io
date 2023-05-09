import { NextSeoProps } from "next-seo";
import keywords from "./keywords";

export const SEO = {
  titleTemplate: "Hasib | %s",
  defaultTitle: "Hasib | Full Stack Developer",
  description: `Experienced Full Stack JavaScript Developer with expertise in TypeScript, AWS (Amazon Web Services), and Digital Ocean. Skilled in front-end and back-end development, I excel in creating responsive web applications, building RESTful APIs, and managing databases. Proficient in popular frameworks like Node.js, Express.js, React.js, and AngularJS. With a strong focus on performance optimization and scalable architecture, I bring a problem-solving mindset and agile methodologies to deliver high-quality solutions. As a CTO, I possess excellent leadership and project management abilities, ensuring successful collaboration and client communication. Explore my portfolio showcasing professional experience, projects, and technical blog posts. Contact me to discuss your next project and leverage the power of full stack JavaScript development.`,
  additionalMetaTags: [
    {
      property: "dc:creator",
      content: "Hasib",
    },
    {
      name: "application-name",
      content: "Hasib | Full Stack Developer",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge; chrome=1",
    },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
    },
    {
      name: "msapplication-TileColor",
      content: "#da532c",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
    {
      name: "keywords",
      content: keywords.join(", "),
    },
  ],
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "https://muttakinhasib.com/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "https://muttakinhasib.com/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "https://muttakinhasib.com/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "https://muttakinhasib.com/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "https://muttakinhasib.com/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  ],
  canonical: "https://muttakinhasib.com",
  noindex: true,
  openGraph: {
    site_name: "Hasib | Full Stack Developer",
    url: "https://muttakinhasib.com",
    title: "Hasib | Full Stack Developer",
    description: `Experienced Full Stack JavaScript Developer with expertise in TypeScript, AWS (Amazon Web Services), and Digital Ocean. Skilled in front-end and back-end development, I excel in creating responsive web applications, building RESTful APIs, and managing databases. Proficient in popular frameworks like Node.js, Express.js, React.js, and AngularJS. With a strong focus on performance optimization and scalable architecture, I bring a problem-solving mindset and agile methodologies to deliver high-quality solutions. As a CTO, I possess excellent leadership and project management abilities, ensuring successful collaboration and client communication. Explore my portfolio showcasing professional experience, projects, and technical blog posts. Contact me to discuss your next project and leverage the power of full stack JavaScript development.`,
    images: [
      {
        url: "https://muttakinhasib.com/banner.png",
        width: 1200,
        height: 630,
        alt: "Hasib | Full Stack Developer",
      },
    ],
    type: "website",
  },

  twitter: {
    cardType: "summary_large_image",
    handle: "@MuttakinHasib",
    site: "@MuttakinHasib",
  },
} as NextSeoProps;
