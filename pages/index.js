import Head from "next/head";
import Link from "next/link";
import Logo from "../components/logo";
import Navigation from "../components/navigation";
import AnimatedTerrain from "../components/animatedTerrain";

import Social from "../components/social";
import { FigmaIcon, PythonIcon, DotNetCoreIcon } from "../components/icons";

const Avatar = ({ src, alt, size = "md" }) => {
  const sizeStyle = {
    sm: "h-12 w-12",
    md: "h-32 w-32",
    lg: "h-64 w-64",
  }[size];

  return <img className={`${sizeStyle} block rounded-full`} src={src} alt={alt} />;
};

let experienceEntries = () => {
  return [
    {
      "title": "Hochschule Niederrhein",
      "position": "Computer Science",
      "time": "01/2018 - 03/2018",
      "description": "While my stay at eEvolution GmbH was short, it was a very interesting look at the world of professional software development. Getting to help develop an enterprise-ready ERP solution used by middle class companies was very interesting, leaving a void to be filled for the next time I’ll work on a project of that scale."
    },
    {
      "title": "Hochschule Niederrhein",
      "position": "",
      "time": "",
      "description": ""
    },
    {
      "title": "Hochschule Niederrhein",
      "position": "Computer Science",
      "time": "",
      "description": ""
    },
    {
      "title": "Hochschule Niederrhein",
      "position": "",
      "time": "",
      "description": ""
    }
  ]
};

const Experience = ({ title, position, time, description }) => {
  return (
    <article>
      <h1 className="font-bold">{title}</h1>
      <section className="flex">
        <header className="w-full max-w-xs">
          <div>
            <h3 className="uppercase font-medium text-sm text-gray-500">What?</h3>
            <span>{position}</span>
          </div>
          <div>
            <h3 className="uppercase font-medium text-sm text-gray-500">When?</h3>
            <span>{time}</span>
          </div>
        </header>
        <div className="w-auto flex-1">
          {description}
        </div>
      </section>
    </article>
  )
}

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Tim Nelke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col px-24 py-8">
        <div className="flex items-center justify-between border-b py-6">
          <Link href="/">
            <a className="z-50">
              <Logo className="h-8 hover:text-foxfire-600" />
            </a>
          </Link>
          <Navigation />
        </div>

        <section className="grid grid-cols-2 gap-8 my-auto z-10">
          <h1 className="text-black text-lg leading-none">
            Ohayo, my name is <br />
            <span className="text-transparent text-gradient text-6xl font-bold">Tim Nelke.</span>
          </h1>

          <p className="font-medium text-gray-600">
            Based in Willich, Germany, I’m a computer science student at <a className="text-foxfire-600">Hochschule Niederrhein</a>, currently threading the needle between being a jack-of-all-trades and becoming an expert, who blends design knowledge and application development.
          </p>
        </section>
        <AnimatedTerrain className="block absolute bottom-0 left-0 opacity-50 overflow-hidden w-screen max-w-full" />

        {/* <div className="inline-flex items-start" style={{ "width": "335px" }}>
                  <Social />
                </div> */}
        {/* <img className="rounded-full block" style={{ "width": "335px", "height": "335px" }} src="profile.png" size="lg" /> */}
        {/* 
        <section className="space-y-12 mb-16">
          <div className="border-b py-4">
            <div className="flex items-end space-x-24">


              <h1 className="text-black text-lg leading-none">
                  Ohayo, my name is <br/> <span className="text-transparent text-gradient text-6xl font-bold">Tim Nelke.</span>
              </h1>

            </div>
          </div>

          <div className="w-full">
            <div className="flex space-x-24">

{/* 

              <div className="w-reading">
                <p>
                  Based in Willich, Germany, I’m a computer science student at{" "}
                  <a
                    className="font-medium text-foxfire-600 hover:underline"
                    href="https://www.hs-niederrhein.de/"
                  >
                    Hochschule Niederrhein
                  </a>
                  , currently threading the needle between beeing a jack-of-all-trades
                  and becoming an expert, who blends design knowledge and
                  application development.
                </p>
              </div>

            </div>
          </div>
        </section> */}
      </div>

      <section className="grid grid-cols-2 gap-8 px-24 py-8">
          <div>
            <div className="leading-relaxed border-b pb-12 mb-12">
              <h2 className="text-black font-bold my-12">Biography</h2>
              <div className="space-y-6">
                <p>Currently living and studying in and around Willich, Germany. I’m trying to find the limits of what I can achieve and surpass them. I’m a diligent worker, who in a team environment serves as a full-fleged <a className="text-foxfire-600">giver</a>.</p>
                <p>My main workflow consists of a “try - improve - deliver” concept, which is driven by my hunger to improve myself, my workflow and gain knowledge.</p>
                <p>When working with others they mostly notice me taking the initiative trying to work out problems and how to overcome them, which is a stark contrast to my normally pretty introverted personality (ISFJ-A / ISFJ-T).</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="font-bold mb-2 text-black text-xs uppercase">Skills</h2>
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
              </ul>
            </div>
              <div className="w-full bg-black h-64"></div>
            </div>
          </div>

          <div>

          </div>
        </section>

      <section className="px-24 mt-24">

        <div className="mt-24">
          <div className="flex space-x-24">


            <div className="border-b">
              <h3 className="font-bold mb-6">What working with me is like</h3>
              <p>
                When it comes to teamwork, I’m a full-fledged <a href="#">giver</a>. Driven by my hunger to improve myself, my workflow and gain knowledge, others mostly notice me taking the initiative trying to work out problems and how to overcome them, which is a stark contrast to my normally pretty introverted personality (ISFJ-A / ISFJ-T).
              </p>
            </div>
          </div>
          {/* 
          {
            experienceEntries.map(({title, position, time, description}) => {
              <Experience
                title={title}
                position={position}
                time={time}
                description={description}
              />

            })
          } */}

          <Experience
            title="Hochschule Niederrhein"
            position="Computer Science"
            time="01/2018 - 03/2018"
            description="While my stay at eEvolution GmbH was short, it was a very interesting look at the world of professional software development. Getting to help develop an enterprise-ready ERP solution used by middle class companies was very interesting, leaving a void to be filled for the next time I’ll work on a project of that scale."
          />

        </div>
      </section>

      <footer></footer>
    </div>
  );
}
