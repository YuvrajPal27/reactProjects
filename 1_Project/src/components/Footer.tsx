// Footer.jsx
import { Link } from "react-scroll";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-white">TechFlow</h2>
          <p className="mt-3 text-sm">
            Building the future, one step at a time. 🚀  <br />
            Join us and be part of something big.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="hero" smooth={true} duration={600} className="cursor-pointer hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="features" smooth={true} duration={600} className="cursor-pointer hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} duration={600} className="cursor-pointer hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={600} className="cursor-pointer hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white">Connect with us</h3>
          <div className="flex gap-4 mt-3">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} TechFlow. All rights reserved.
      </div>
    </footer>
  );
}
