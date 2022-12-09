import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Blog</span>,
  project: {
    link: "https://github.com/ekaone",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/ekaone/blog-note",
  footer: {
    text: "Blog note daily",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Blog",
    };
  },
};

export default config;
