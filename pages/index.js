import Head from "next/head";
import Link from "next/link";
import Logo from "../components/logo";
import Navigation from "../components/navigation";

const Avatar = ({ src, alt, size = "md" }) => {
  const sizeStyle = {
    sm: "h-12 w-12",
    md: "h-32 w-32",
    lg: "h-64 w-64",
  }[size];

  return <img className={`${sizeStyle} rounded-full`} src={src} alt={alt} />;
};

export default function Home() {
  return (
    <div className="antialiased">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-between px-12 py-8">
        <Link href="/">
          <a className="z-50">
            <Logo className="h-8 hover:text-foxfire-600" />
          </a>
        </Link>
        <Navigation />
      </div>

      <main className="grid-cols-12 px-12 space-y-12 mt-24">
        <div className="col-start-1 col-span-8 flex items-center space-x-4">
          <h1>
            <span className="text-transparent text-gradient text-6xl font-bold">
              Ohayo, I'm Tim Nelke.
            </span>
          </h1>
          <Avatar src="profile.png" />
        </div>
        <div className="space-y-4">
          <div>
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
          <div className="space-x-1">
            <Link href="">
              <a className="font-medium text-foxfire-600 hover:underline">
                Download my CV
              </a>
            </Link>
            <span>or</span>
            <Link href="">
              <a className="font-medium text-foxfire-600 hover:underline">
                View My Projects
              </a>
            </Link>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
