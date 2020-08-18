import Link from 'next/link';

const Navigation = ({ className }) => {
  return (
    <div className={`flex flex-row-reverse z-40 ${className}`}>
      <input className="hidden" type="checkbox" id="hamburger" />
      <label
        htmlFor="hamburger"
        className="inlineBlock relative md:hidden text-black dark:text-white"
      >
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className="h-screen w-screen md:w-auto md:h-auto absolute md:relative top-0 right-0 bg-gray-100 dark:bg-black md:bg-transparent transform -translate-y-full md:translate-y-0">
        <ul className="flex flex-col md:flex-row h-full space-y-4 md:space-y-0 md:space-x-12 text-2xl md:text-base md:font-medium items-center justify-center md:space-x-0 md:space-x-2">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          z-index: -1;
          transition: 150ms ease-out transform;
        }
        #hamburger:checked ~ nav {
          transform: none;
        }

        label {
          width: 23px;
          height: 14px;
          cursor: pointer;
        }
        label span {
          position: absolute;
          display: block;
          background-color: currentColor;
          height: 2px;
          width: 100%;
          transition: 150ms ease-out transform, 100ms ease-in opacity;

          transform-origin: left;
          transition: 150ms ease-out transform, 100ms ease-in opacity;
        }
        label span:nth-child(2) {
          top: 50%;
        }
        label span:nth-child(3) {
          top: 100%;
        }

        #hamburger:checked ~ label span:nth-child(1) {
          transform: rotateZ(45deg) translateY(-75%);
        }
        #hamburger:checked ~ label span:nth-child(2) {
          opacity: 0;
        }
        #hamburger:checked ~ label span:nth-child(3) {
          transform: rotateZ(-45deg) translateY(75%);
          transform-origin: left;
        }
      `}</style>
    </div>
  );
};

export default Navigation;
