import React, { ReactNode } from 'react';
import Head from 'next/head';
import Nav from './sections/Nav';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({
    children,
    title = 'Privacy & Scaling Explorations',
}: Props) => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="icon" href="./favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="./apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="./favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="./favicon-16x16.png"
            />
            <link rel="manifest" href="/manifest.json" />
            <link
                rel="mask-icon"
                href="./safari-pinned-tab.svg"
                color="#cfc4fb"
            />
            <meta name="msapplication-TileColor" content="#cfc4fb" />
            <meta name="theme-color" content="#cfc4fb" />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta
                name="description"
                content="The Privacy and Scaling Exploration Team's website. Enjoy."
            />
            <title>{title}</title>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
        </Head>
        <header>
            <Nav />
        </header>
        {children}
        <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
);

export default Layout;
