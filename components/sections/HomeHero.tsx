import NextLink from 'next/link';
import Image from 'next/image';

import downArrow from '../../public/ui-images/icons/arrow-down.svg';
import triangleGraphic from '../../public/ui-images/triangle-gfc.svg';
import lockGraphic from '../../public/ui-images/lock-gfc.svg';

const HomeHero = () => (
    <div className="container mx-auto home-hero max-w-[1920px]">
        <div className="container mx-auto px-4 md:px-16 xl:pl-18 py-12 lg:py-16 xl:py-24 flex flex-col space-y-4 lg:space-y-6 md:max-w-4xl lg:max-w-6xl">
            <p className="uppercase text-xs lg:text-sm xl:text-base tracking-wider font-semibold">
                Privacy & Scaling Explorations
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[110%] font-bold">
                Enhancing Ethereum through cryptographic research.
            </h1>
            <NextLink href="#projects">
                <div className="flex space-x-2">
                    <div className="font-semibold underline text-purple-800 active:text-opacity-70 transition-all lg:text-lg">
                        Explore our work
                    </div>
                    <div className="animate-bounce">
                        <Image src={downArrow} width={12} height={12} />
                    </div>
                </div>
            </NextLink>
        </div>
        <div className="w-full flex flex-col md:flex-row border-2 border-gray-800">
            <div className="hidden md:block w-[108px] h-[149.44px] lg:w-[195px] lg:h-[269.83px] xl:w-[270px] xl:h-[373.61px] absolute right-[6%] 2xl:right-[10%] top-60 hover:animate-spin">
                <Image src={triangleGraphic} layout="fill" />
            </div>
            {/* Lock */}
            <div className="md:w-1/4 bg-yellow-400">
                <div className="w-auto h-[91px] lg:w-[177.08px] lg:h-[173px] relative right-1/3 md:-right-2/4 xl:-right-3/4 top-6 md:top-12 lg:top-16 xl:top-32 hover:animate-bounce">
                    <Image src={lockGraphic} layout="fill" />
                </div>
            </div>
            <div className="flex-auto bg-white py-12 lg:py-16 xl:py-24 px-4 md:px-24 xl:px-44">
                <h3 className="text-xl lg:text-3xl xl:text-4xl lg:leading-[145%] xl:leading-[150%] font-semibold md:max-w-xl xl:max-w-2xl ">
                    We explore new use cases for zero-knowledge proofs and other
                    cryptographic primitives through research and
                    proof-of-concepts.
                </h3>
            </div>
        </div>
    </div>
);

export default HomeHero;
