import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Navigation',
      links: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Why Blockchain',
          href: '/#features',
        },
        {
          text: 'About us',
          href: '/#about',
        },
        {
          text: 'Projects',
          href: '/#projects',
        },
        {
          text: 'Services',
          href: '/#services',
        },
        {
          text: 'Contact',
          href: '/#contact',
        },
        {
          text: 'Blog',
          href: 'https://mirror.xyz/metaend.eth',
        },
      ],
    },
  ],
  actions: [
    { type: 'button', text: 'AI', href: '/ai' },
    { type: 'button', text: 'Blog', href: 'https://mirror.xyz/metaend.eth' },
    { type: 'button', text: 'Services', href: '/#services' },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Mastodon', icon: 'tabler:rocket', href: 'https://mastodon.online/@ngmi' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/ngmisl' },
    { ariaLabel: 'LinkedIN', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/ngmi/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ngmisl' },
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://ngmi.ai/"> NGMI.ai</a> · All rights reserved.
  `,
};
