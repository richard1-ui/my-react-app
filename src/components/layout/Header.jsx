import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ec-council-white-logo.webp";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center space-x-8 font-medium">

          {/* Mega Menu */}
          <div className="group">
            <Link
        to="/traincertify" className="text-white hover:text-red-500 transition">
              Train & Certify
            </Link>

            {/* Mega Dropdown */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-screen bg-black text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                            transition-all duration-300">

              <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-5 gap-10">

                {/* Column 1 */}
                <div>
                  <h3 className="text-red-500 font-bold mb-4 uppercase text-sm">
                    Ethical Hacking
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="hover:text-white cursor-pointer">
                      Certified Ethical Hacker (CEH)
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="text-red-500 font-bold mb-4 uppercase text-sm">
                    Pen Testing
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="hover:text-white cursor-pointer">
                      CPENT
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h3 className="text-red-500 font-bold mb-4 uppercase text-sm">
                    SOC Analyst
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="hover:text-white cursor-pointer">
                      CSA
                    </li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div>
                  <h3 className="text-red-500 font-bold mb-4 uppercase text-sm">
                    Essentials Series
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="hover:text-white cursor-pointer">
                      NDE
                    </li>
                    <li className="hover:text-white cursor-pointer">
                      EHE
                    </li>
                  </ul>
                </div>

                {/* Column 5 */}
                <div>
                  <h3 className="text-red-500 font-bold mb-4 uppercase text-sm">
                    AI Certifications
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="hover:text-white cursor-pointer">
                      CAIPM
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <Link to="/training" className="text-white hover:text-red-500">
            Degrees
          </Link>

          <Link to="/resources" className="text-white hover:text-red-500">
            Resources
          </Link>

          <Link to="/about" className="text-white hover:text-red-500">
            About
          </Link>
           <Link
            to="/contact"
            className="bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700"
          >
            Get Training
          </Link>

        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="lg:hidden bg-black text-white px-6 py-6 space-y-4">

          {/* Mobile Mega Accordion */}
          <div>
            <button
              onClick={() => setMobileMegaOpen(!mobileMegaOpen)}
              className="flex justify-between w-full"
            >
              Certifications
              <span>{mobileMegaOpen ? "-" : "+"}</span>
            </button>

            {mobileMegaOpen && (
              <div className="mt-4 space-y-4 text-gray-300">

                <div>
                  <p className="text-red-500 font-semibold">Ethical Hacking</p>
                  <p className="pl-4">CEH</p>
                </div>

                <div>
                  <p className="text-red-500 font-semibold">Pen Testing</p>
                  <p className="pl-4">CPENT</p>
                </div>

                <div>
                  <p className="text-red-500 font-semibold">SOC Analyst</p>
                  <p className="pl-4">CSA</p>
                </div>

              </div>
            )}
          </div>

          <Link to="/training" className="block">
            Training
          </Link>

          <Link to="/resources" className="block">
            Advisory
          </Link>

          <Link to="/about" className="block">
            About
          </Link>

          <Link
            to="/contact"
            className="block bg-red-600 text-center py-2 rounded-md"
          >
            Get Training
          </Link>
        </div>
      )}
    </header>
  );
}