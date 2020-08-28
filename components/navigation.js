import NextLink from 'next/link';
import { TimNelkeIcon } from '../components/icons';
import { useState } from 'react';

const NavigationLinks = ({ children, menuOpen }) => {
  return (
    <nav
      className={`h-screen w-screen md:z-50 md:w-auto md:h-auto absolute md:relative top-0 right-0 transform -translate-y-full md:translate-y-0 md:bg-transparent md:bg-opacity-0 ${backgroundStyling}`}
    >
      <ul className="flex flex-col md:flex-row h-screen md:h-full space-y-4 md:space-y-0 md:space-x-12 text-2xl md:text-base md:font-medium items-center justify-center md:space-x-0 md:space-x-2">
        {[...children].map((child, i) => (
          <li
            key={i}
            className={`opacity-0 transition-opacity duration-100 ease-out ${
              menuOpen ? 'opacity-100' : ''
            } md:opacity-100`}
          >
            {child}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const backgroundStyling =
  'bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75';
const inlineStyle = { backdropFilter: 'blur(0.2rem)' };

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
    <div className="w-full" style={{ height: '113px' }}>
      <div
        className={`fixed w-full z-50 ${backgroundStyling} transition-transform duration-200 ease-out transform ${
          scroll > 100 ? '-translate-y-8' : ''
        }`}
        style={inlineStyle}
      >
        <div className="pt-8" />
        <div
          className={`${
            scroll < 100 ? 'border-b ' : `shadow `
          }transition-shadow duration-300 border-lighter-gray dark:border-off-black z-50`}
        >
          <input className="hidden" type="checkbox" id="hamburger" />

          <div
            // className={`flex py-6 px-8 md:px-24 lg:px-48 items-center justify-between ${backgroundStyling}`}
            className={`flex py-6 px-8 md:px-24 lg:px-48 items-center justify-between z-50`}
          >
            <NextLink href="/">
              <a className="z-50" aria-label="Tim Nelke Icon">
                <TimNelkeIcon className="h-8 hover:text-foxfire-600" />
              </a>
            </NextLink>
            <div className={`flex flex-row-reverse z-50`}>
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
            <NavigationLinks menuOpen={menuOpen}>{children}</NavigationLinks>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
