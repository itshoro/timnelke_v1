

const Navigation = ({ className }) => {
  return (
    <div className={`flex flex-row-reverse z-40 ${className}`}>
      <input className="hidden" type="checkbox" id="hamburger" />
      <label htmlFor="hamburger" className="inlineBlock relative" >
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className="h-screen w-screen absolute top-0 right-0 bg-gray-100">
        <ul className="flex flex-col h-full space-y-4 text-2xl items-center justify-center md:space-x-0 md:space-x-2">
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          z-index: -1;
          transform: translateY(-100%);
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
          background-color: black;
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
  )
}

export default Navigation