import Image from 'next/image';
import NextLink from 'next/link';
import { FunctionComponent, useState } from 'react';
import { NavLink } from '../../interfaces';

import pseLogo from '../../public/ui-images/pse-logo.svg';

const navLinksLeft: NavLink[] = [
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

const socialLinks: NavLink[] = [
    {
        label: 'Twitter',
        link: 'https://twitter.com/PrivacyScaling',
        src: '/ui-images/icons/twitter_round.svg',
    },
    {
        label: 'Discord',
        link: 'https://discord.gg/g5YTV7HHbh',
        src: '/ui-images/icons/discord_round.svg',
    },
];

const navLinksRight: NavLink[] = [
    {
        label: 'Job Openings',
        link: 'https://jobs.lever.co/ethereumfoundation/?department=Ethereum%20Foundation&team=Privacy%20and%20Scaling%20Explorations',
    },
    ...socialLinks,
];
const mobileNavLinks: NavLink[] = [...navLinksLeft, ...navLinksRight].filter(
    (link) => !link.src
);

const Nav: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <nav className="justify-between p-4">
            {/* Tablet and desktop nav */}
            <div className="hidden md:flex">
                <div className="nav-right flex space-x-4">
                    {navLinksLeft.map(({ label, link }) => (
                        <NextLink href={link}>
                            <a>{label}</a>
                        </NextLink>
                    ))}
                </div>
                <NextLink href="#">
                    <Image src={pseLogo} alt="pse logo" className="pselogo" />
                </NextLink>
                <div className="nav-left flex space-x-4">
                    {navLinksRight.map(({ label, link, src }) => (
                        <NextLink href={link}>
                            <a>
                                {src ? (
                                    <Image
                                        src={src}
                                        alt={label}
                                        width="32px"
                                        height="32px"
                                    />
                                ) : null}
                                {src ? null : <a>{label}</a>}
                            </a>
                        </NextLink>
                    ))}
                </div>
            </div>

            {/* Mobile nav */}
            <div className="flex md:hidden justify-between items-center">
                <div className="nav-left flex space-x-2">
                    {socialLinks.map(({ label, link, src }) => (
                        <NextLink href={link}>
                            <a>
                                <Image
                                    src={src}
                                    alt={label}
                                    width={24}
                                    height={24}
                                />
                            </a>
                        </NextLink>
                    ))}
                </div>
                <NextLink href="#">
                    <Image
                        src={pseLogo}
                        alt="pse logo"
                        height={40}
                        width={28.98}
                        className="pselogo"
                    />
                </NextLink>
                <div className="nav-right flex space-x-4">
                    <button
                        className="outline-none font-semibold"
                        onClick={toggleNav}
                    >
                        Menu
                        <span className="sr-only">Open menu</span>
                    </button>
                    <div
                        className={
                            'absolute right-2 z-50 my-6 text-base list-none bg-white rounded divide-y divide-gray-100 shadow ' +
                            (isOpen ? ' flex flex-col' : ' hidden')
                        }
                        id="dropdown"
                    >
                        {mobileNavLinks.map(({ label, link }) => (
                            <NextLink href={link}>
                                <a className="p-2">{label}</a>
                            </NextLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
