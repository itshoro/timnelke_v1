import '../styles/global.css';
import Navigation from '../components/navigation';
import NextLink from 'next/link';
import Logo from '../components/logo';

import { useState } from 'react';

const App = ({ Component, pageProps }) => {
  const navLinks = [
    {
      name: 'Home',
      href: '/',
      isLocal: true,
    },
    {
      name: 'Blog',
      href: '/blog',
      isLocal: true,
    },
    {
      name: 'Projects',
      href: '/projects',
      isLocal: true,
    },
  ];

  let [scroll, setScroll] = useState(0);
  let cache = false;
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', (e) => {
      if (!cache) {
        setTimeout(() => {
          setScroll(window.scrollY);
          cache = false;
        }, 100);
      }
      cache = true;
    });
  }

  return (
    <div className="dark:bg-black dark:text-gray-300">
      <div
        className={`${
          scroll < 100 ? 'pt-8 ' : 'pt-0 '
        }fixed w-full transition-spacing duration-150 ease-out bg-white dark:bg-black z-50`}
      >
        <div
          className={`px-8 md:px-24 flex items-center justify-between border-b border-lighter-gray dark:border-off-black py-6 z-50`}
        >
          <NextLink href="/">
            <a className="z-50">
              <Logo className="h-8 hover:text-foxfire-600" />
            </a>
          </NextLink>
          <Navigation>
            {[...navLinks].map(({ name, href, isLocal }) =>
              isLocal ? (
                <NextLink href={href} key={name}>
                  <a>{name}</a>
                </NextLink>
              ) : (
                <a href={href} key={name}>
                  {name}
                </a>
              )
            )}
          </Navigation>
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
