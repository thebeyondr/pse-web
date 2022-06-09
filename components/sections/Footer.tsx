import { FunctionComponent } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import pseLogo from '../../public/ui-images/pse-logo.svg';

import { socialLinks } from '../../utils/navlinks';

const Footer: FunctionComponent = () => (
    <footer className="p-6">
        <hr className="h-0.5 bg-gray-800 w-full" />
        <div className="flex flex-col md:flex-row space-y-8 md:justify-around items-center">
            <div className="flex space-x-8 p-4 items-center">
                <Image src={pseLogo} width={56.76} height={80} />
                <div className="flex flex-col">
                    <h6 className="font-bold">
                        Privacy & Scaling Exploration{' '}
                    </h6>
                    <p className="text-sm">
                        A multidisciplinary team supported by the Ethereum
                        Foundation.
                    </p>
                </div>
            </div>
            <div className="flex justify-between space-x-4 px-4 items-center font-semibold">
                {socialLinks.map(({ label, link, src, msg }) => (
                    <NextLink href={link}>
                        <a className="flex space-x-2">
                            <div>
                                <Image
                                    src={src}
                                    alt={label}
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <p className="text-sm">{msg}</p>
                        </a>
                    </NextLink>
                ))}
            </div>
        </div>
    </footer>
);

export default Footer;
