import { NavLink } from './../interfaces/index';

export const navLinksLeft: NavLink[] = [
    {
        label: 'About',
        link: '#top',
    },
    {
        label: 'Projects',
        link: '#projects',
    },
    {
        label: 'Team',
        link: '#team',
    },
];

export const socialLinks: NavLink[] = [
    {
        label: 'Twitter',
        link: 'https://twitter.com/PrivacyScaling',
        src: '/ui-images/icons/twitter_round.svg',
        msg: 'Follow us on Twitter',
    },
    {
        label: 'Discord',
        link: 'https://discord.gg/g5YTV7HHbh',
        src: '/ui-images/icons/discord_round.svg',
        msg: 'Join our Discord',
    },
];

export const navLinksRight: NavLink[] = [
    {
        label: 'Job Openings',
        link: 'https://jobs.lever.co/ethereumfoundation/?department=Ethereum%20Foundation&team=Privacy%20and%20Scaling%20Explorations',
    },
    ...socialLinks,
];
