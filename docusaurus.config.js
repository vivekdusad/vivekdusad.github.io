// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vivek Khandelwal',
  tagline: 'Android Developer||Backend Developer',
  url: 'https://vivekdusad.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vivekdusad', // Usually your GitHub org/user name.
  projectName: 'vivekdusad.github.io',
  trailingSlash: false,
  deploymentBranch:'master', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Vivek Khandelwal',
        logo: {
          alt: 'Vivek Khandelwal',
          src: 'img/logo.svg',
        },
        items: [
          // { 
          //   position: 'left',
          //   label: 'Flutter Stack',
          // },
          {
            href: 'https://www.instagram.com/flutter.stack/',
            label: 'Flutter Stack',            
          },
          {
            href: 'https://play.google.com/store/apps/developer?id=VIVEK+KHANDELWAL',
            label: 'My Apps',            
          },
          {to: '/blog', label: 'Blogs', position: 'left'},
          {
            href: 'https://github.com/vivekdusad',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Blogs',
            items: [
              {
                label: 'Blogs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/flutter.stack/',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@vivekdusad55',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vivekdusad',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vivek, Inc. Built by Vivek Khandelwal.`,
      },
      prism: {
        theme: lightCodeTheme,
        additionalLanguages: ['dart'],
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
