import Head from 'next/head';
import Link from 'next/link';
import Logo from '../components/logo';
import Navigation from '../components/navigation';
import AnimatedTerrain from '../components/animatedTerrain';
import {
  AcademicCapOutline,
  Adjustments,
  User,
  Microphone,
  Code,
} from 'heroicons-react';

import Social from '../components/social';
import {
  FigmaIcon,
  PythonIcon,
  DotNetCoreIcon,
  JavascriptIcon,
  TimNelkeIcon,
} from '../components/icons';

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-gray-300">
      <Head>
        <title>Tim Nelke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col px-8 md:px-24 py-8">
        <div className="flex items-center justify-between border-b border-lighter-gray dark:border-off-black py-6 z-10">
          <Link href="/">
            <a className="z-50">
              <Logo className="h-8 hover:text-foxfire-600" />
            </a>
          </Link>
          <Navigation />
        </div>

        <section className="grid grid-flow-row md:grid-cols-2 gap-8 my-auto z-10">
          <h1 className="text-black font-medium dark:text-white text-lg leading-none">
            Ohayo, my name is <br />
            <span className="text-transparent text-gradient text-6xl font-bold">
              Tim Nelke.
            </span>
          </h1>

          <p className="font-medium text-black dark:text-gray-200">
            Based in Willich, Germany, I’m a computer science student at{' '}
            <a
              className="text-foxfire-600 hover:underline"
              href="https://www.hs-niederrhein.de/"
            >
              Hochschule Niederrhein
            </a>
            , currently threading the needle between being a jack-of-all-trades
            and becoming an expert, who blends design knowledge and application
            development.
          </p>
        </section>
        <AnimatedTerrain className="block absolute bottom-0 left-0 opacity-75 overflow-hidden w-screen max-w-full z-0" />
      </div>

      <section className="grid grid-cols-1 grid-flow-row md:grid-rows-1 md:grid-cols-2 md:gap-8">
        <div className="px-8 md:pr-0 md:pl-24 py-12">
          <div className="leading-relaxed border-b border-lighter-gray dark:border-off-black pb-12 mb-12">
            <h2 className="text-black dark:text-white font-bold my-12">
              Biography
            </h2>
            <div className="space-y-6 dark:text-light-gray">
              <p>
                Currently living and studying in and around Willich, Germany.
                I’m trying to find the limits of what I can achieve and surpass
                them. I’m a diligent worker, who in a team environment, serves
                as a full-fleged{' '}
                <a
                  className="text-foxfire-600 hover:underline font-medium"
                  href="https://www.youtube.com/watch?v=YyXRYgjQXX0"
                >
                  giver
                </a>
                .
              </p>
              <p>
                My main workflow consists of a “try - improve - deliver”
                concept, which is driven by my hunger to gain knowledge and try
                out amazing new tools.
              </p>
              <p>
                When working with others they mostly notice me taking the
                initiative trying to work out problems and how to overcome them,
                which is a stark contrast to my normally pretty introverted
                personality (ISFJ-A / ISFJ-T).
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-light-gray">
            <div>
              <div className="flex items-center space-x-2 text-black mb-2">
                <Adjustments size="16" />
                <h2 className="font-bold text-xs uppercase">Stats</h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <div className="flex items-center space-x-2">
                    <AcademicCapOutline size="16" />
                    <span>Active Student</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <User size="16" />
                    <span>Giver, ISFJ-A / ISFJ-T</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Microphone size="16" />
                    <span>Conference Talk on PWAs</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-black mb-2">
                <Code size="16" />
                <h2 className="font-bold uppercase">Skills</h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <div className="flex items-center space-x-2">
                    <FigmaIcon />
                    <span>Design, Wireframes</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <PythonIcon />
                    <span>Python</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <DotNetCoreIcon />
                    <span>.NET Core</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <JavascriptIcon />
                    <span>JavaScript, HTML5, CSS3</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-off-black bg-opacity-50 w-full h-full row-start-1 md:row-start-auto">
          <div className="flex flex-col h-full py-8 md:py-0">
            <div className="flex flex-col overflow-hidden w-2/5 bg-white dark:bg-black rounded shadow-lg m-auto">
              <img src="/profile.jpg" className="block object-contain" />
              <div className="flex px-8 py-4">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-24">
        <h2 className="text-black font-bold my-12">Projects</h2>
        <div className="grid grid-cols-4 gap-8">
          <div className="w-full h-64 bg-black dark:bg-off-black col-span-2 rounded"></div>
          <div className="w-full h-64 bg-teal-600 rounded"></div>
          <div className="w-full h-64 bg-foxfire-600 rounded"></div>
        </div>
      </section>

      <footer className="flex items-center justify-center text-light-gray dark:text-dark-gray px-24 py-12 space-x-2">
        <Logo className="h-8 border-r border-lighter-gray dark:border-off-black pr-2" />
        <div className="flex flex-col text-xs">
          <span>Designed and Developed by</span>
          <span className="font-medium">
            &copy; Tim Nelke 2018 &mdash; 2020
          </span>
        </div>
      </footer>
    </div>
  );
}
