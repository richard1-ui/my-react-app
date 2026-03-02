import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ec-council-white-logo.webp";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[var(--primary-dark)] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
             src={logo}
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 font-medium text-gray-700">
          <Link to="/certifications" className="text-white hover:text-[var(--e-global-color-764f993)] transition">
            Certifications
          </Link>
          <Link to="/training" className="text-white hover:text-[var(--e-global-color-764f993)]  transition">
            Training
          </Link>
          <Link to="/resources" className="text-white hover:text-[var(--e-global-color-764f993)]  transition">
            Resources
          </Link>
          <Link to="/about" className="text-white hover:text-[var(--e-global-color-764f993)]  transition">
            About
          </Link>
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/login"
            className="text-gray-700 text-white hover:text-[var(--e-global-color-764f993)]  font-medium"
          >
            Login
          </Link>

          <Link
            to="/contact"
            className="bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium text-gray-700">
          <Link to="/certifications" className="block">
            Certifications
          </Link>
          <Link to="/training" className="block">
            Training
          </Link>
          <Link to="/resources" className="block">
            Resources
          </Link>
          <Link to="/about" className="block">
            About
          </Link>
          <Link to="/login" className="block">
            Login
          </Link>
          <Link
            to="/contact"
            className="block bg-red-600 text-white px-4 py-2 rounded-md text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}