import '../styles/global.css';
import Navigation from '../components/navigation';
import NextLink from 'next/link';

import { useState, useEffect } from 'react';

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

  let [activeLink, setActiveLink] = useState(navLinks[0].name);

  return (
    <div>
      <Navigation scroll={scroll}>
        {[...navLinks].map(({ name, href, isLocal }) =>
          isLocal ? (
            <NextLink href={href} key={name}>
              <a
                onClick={(e) => {
                  setActiveLink(name);
                }}
                className={`${
                  activeLink === name
                    ? 'border-black dark:border-white pb-1'
                    : 'pb-2'
                } md:text-sm font-bold hover:pb-1 border-b-2 border-transparent hover:border-black transition-all duration-150 ease-out`}
              >
                {name}
              </a>
            </NextLink>
          ) : (
            <a href={href} key={name}>
              {name}
            </a>
          )
        )}
      </Navigation>
      {/* <Component className="pt-32" {...pageProps} /> */}
      <Component {...pageProps} />
    </div>
  );
};

export default App;
