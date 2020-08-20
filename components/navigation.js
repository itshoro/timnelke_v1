import NextLink from 'next/link';
import Logo from '../components/logo';
import { useState } from 'react';

const NavigationLinks = ({ children, active }) => {
  return (
    <nav className="h-screen w-screen md:z-50 md:w-auto md:h-auto absolute md:relative top-0 right-0 bg-white dark:bg-black md:bg-transparent transform -translate-y-full md:translate-y-0">
      <ul className="flex flex-col md:flex-row h-full space-y-4 md:space-y-0 md:space-x-12 text-2xl md:text-base md:font-medium items-center justify-center md:space-x-0 md:space-x-2">
        {[...children].map((child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ul>
    </nav>
  );
};

const backgroundStyling = 'bg-white dark:bg-black';

const Navigation = ({ scroll, children, active, className }) => {
  let [menuOpen, setMenuOpen] = useState(false);

  if (typeof document !== 'undefined') {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  return (
    <div className="w-full z-50" style={{ height: '100px' }}>
      <div className={`fixed w-full`}>
        <div
          className={`${
            scroll < 100 ? 'pt-8 ' : 'pt-0 '
          }transition-spacing duration-150 ease-out ${backgroundStyling}`}
        ></div>
        <div
          className={`${
            scroll < 100 ? 'border-b ' : 'shadow-md '
          }border-lighter-gray dark:border-off-black z-50`}
        >
          <div
            className={`flex py-6 px-8 md:px-24 lg:px-48 items-center justify-between ${backgroundStyling}`}
          >
            <NextLink href="/">
              <a className="z-50">
                <Logo className="h-8 hover:text-foxfire-600" />
              </a>
            </NextLink>
            <div className={`flex flex-row-reverse z-40`}>
              <label
                htmlFor="hamburger"
                className="inlineBlock relative md:hidden text-black dark:text-white"
                onClick={(e) => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <input className="hidden" type="checkbox" id="hamburger" />
            <NavigationLinks>{children}</NavigationLinks>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
