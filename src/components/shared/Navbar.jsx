import { memo, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { Github, Menu, X } from "lucide-react";
import { useAppContext } from "../../contexts/context";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { user } = useAppContext();

  return (
    <header className="bg-white w-full border-b border-gray-200 fixed z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2 text-gray-800 hover:text-purple-700"
            >
              <figure className="w-12">
                <img src={logo} alt="HERO.IO logo" />
              </figure>
              <span className="font-bold text-xl">HERO.IO</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10 navContainer">
            <NavLink
              to="/"
              className="font-semibold hover:text-purple-600 pb-1"
            >
              Home
            </NavLink>
            <NavLink
              to="/all-apps"
              className="font-semibold hover:text-purple-600 transition-colors pb-1"
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              className="font-semibold hover:text-purple-600 transition-colors pb-1"
            >
              Installation
            </NavLink>
            {user ? (
              <NavLink
                to="/profile"
                className="cursor-pointer font-semibold hover:text-purple-600 transition-colors pb-1"
              >
                Profile
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="font-semibold hover:text-purple-600 transition-colors pb-1"
              >
                Login
              </NavLink>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="https://github.com/CodeWithArafat1"
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-br from-purple-800 to-purple-400 text-white font-semibold px-4 py-2 rounded-lg hover:from-purple-700 hover:to-purple-500 transition-all focus:outline-none"
            >
              <Github className="h-5 w-5" />
              <span>Contribute</span>
            </Link>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
            >
              Home
            </NavLink>
            <NavLink
              to="/all-apps"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
            >
              Installation
            </NavLink>
            {user ? (
              <NavLink
                to="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              >
                Profile
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default memo(Navbar);
