import Head from "next/head";
import Link from "next/link";
import Logo from "../components/logo";
import Navigation from "../components/navigation";

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

const Experience = ({title, position, time, description}) => {
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
    <div className="antialiased">
      <Head>
        <title>Tim Nelke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col justify-between px-24 py-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="z-50">
              <Logo className="h-8 hover:text-foxfire-600" />
            </a>
          </Link>
          <Navigation />
        </div>

        <section className="space-y-12 mb-16">
          <div className="border-b py-4">
            <div className="flex items-end space-x-24">

              <img className="rounded-full block" style={{ "width": "335px", "height": "335px" }} src="profile.png" size="lg" />

              <h1 className="text-black text-6xl font-bold">
                {/* <span className="text-transparent text-gradient text-6xl font-bold"> */}
                  Ohayo, my name is <br/> Tim Nelke.
                {/* </span> */}
              </h1>

            </div>
          </div>

          <div className="w-full">
            <div className="flex space-x-24">

            <div className="inline-flex items-start" style={{ "width": "335px" }}>
                <Social />
              </div>

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
        </section>
      </div>

      <section className="px-24 mt-24">

        <div className="mt-24">
          <div className="flex space-x-24">
            <div>
              <h2 className="font-bold mb-6" style={{ "min-width": "335px"}}>Skills</h2>
              <ul className="space-y-2">
                <li>
                  <div className="flex items-center space-x-1">
                    <FigmaIcon />
                    <span>Design, Wireframes</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-1">
                    <PythonIcon />
                    <span>Python</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-1">
                    <DotNetCoreIcon />
                    <span>.NET Core</span>
                  </div>
                </li>
              </ul>
            </div>

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
                title= "Hochschule Niederrhein"
                position= "Computer Science"
                time= "01/2018 - 03/2018"
                description= "While my stay at eEvolution GmbH was short, it was a very interesting look at the world of professional software development. Getting to help develop an enterprise-ready ERP solution used by middle class companies was very interesting, leaving a void to be filled for the next time I’ll work on a project of that scale."
              />

        </div>
      </section>

      <footer></footer>
    </div>
  );
}
