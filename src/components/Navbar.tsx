import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-row w-full py-4 px-8 bg-transparent justify-between items-center">
      <div className="flex flex-row gap-4 items-center">
        <img src="/assets/logo.png" alt="logo" className="w-10" />
        <nav className="flex flex-row gap-6 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </nav>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Link to="/login" className="">
          Get Started
        </Link>
        <Link to="/signup" className="bg-black text-white px-4 py-2 rounded">
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;