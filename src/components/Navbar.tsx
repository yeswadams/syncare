import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row py-4 px-8 bg-transparent justify-between items-center">
      <div className="flex frlex-row items-center gap-4">
        <img src="./public/assets/logo.png" alt="logo" />

        <nav className="flex items-center justify-center">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-row items-center gap-4">
        <Link to="./login" className="">
          Get Started
        </Link>
        <Link to="./signup" className=" bg-black text-white px-4 py-2 rounded">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
