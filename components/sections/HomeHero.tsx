import NextLink from 'next/link';
import Image from 'next/image';

import downArrow from '../../public/ui-images/icons/arrow-down.svg';

const HomeHero = () => (
    <div className="home-hero">
        <div className="container mx-auto px-4 py-16 flex flex-col space-y-4">
            <p className="uppercase text-xs tracking-wider font-semibold">
                Privacy & Scaling Explorations
            </p>
            <h1 className="text-3xl font-bold">
                Enhancing Ethereum through cryptographic research.
            </h1>
            <NextLink href="#projects">
                <div className="flex space-x-2">
                    <p className="font-semibold underline text-purple-800 active:text-opacity-70 transition-all">
                        Explore our work
                    </p>
                    <div>
                        <Image src={downArrow} width={12} height={12} />
                    </div>
                </div>
            </NextLink>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row border-t-2 border-b-2 border-gray-800">
            <div className="flex flex-1 bg-yellow-400 p-4"></div>
            <div className="flex flex-2 bg-white p-4">
                <h3 className="text-xl font-bold">
                    We explore new use cases for zero- knowledge proofs and
                    other cryptographic primitives through research and
                    proof-of-concepts.
                </h3>
            </div>
        </div>
    </div>
);

export default HomeHero;
