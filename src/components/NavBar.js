import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="bg-gray-900 top-0 fixed z-10">
      <div className="grid p-1 cursive md:grid-cols-2">
        <nav className="grid sm:grid-cols-3">
          <NavLink
            to="/"
            exact
            activeClassName="text-gray-200 bg-gray-500"
            className="flex align-middle items-center justify-center rounded text-gray-100 hover:text-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-gray-200 bg-gray-500"
            className="flex align-middle items-center justify-center rounded text-gray-100 hover:text-gray-300"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-gray-200 bg-gray-500"
            className="flex align-middle items-center justify-center rounded text-gray-100 hover:text-gray-300"
          >
            About me
          </NavLink>
        </nav>
        <div className="flex py-1 pl-4 md:justify-end">
          <SocialIcon
            url="https://www.linkedin.com/in/cokorda-agung-yudhana-505a9b66/"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/ckrdi"
            className="ml-4"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
