"use client"; // Pour Next.js côté client
import { UserIcon } from "lucide-react";
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md rounded-3xl bg-gray-900 mx-5 mt-3 fixed top-0 left-0 right-0 z-50">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img src="/logo-atoute.png" alt="Logo Atoute" className="h-12 w-auto" />
          </a>

          {/* Links */}
          <div className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Nos services
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Nos partenaires
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Logistique &amp; Exploitation
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Notre histoire
            </a>
          </div>

          {/* Right Buttons (Visible for desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition duration-300"
            >
              {/* Icône Nous contacter */}
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h8M8 14h4m-6 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Demander un devis
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-[rgb(208,155,43)] hover:bg-[rgb(208,175,43)] text-white rounded-lg transition duration-300"
            >
              {/* Icône Mon compte */}
              <UserIcon className="h-5 w-5 mr-2 " />
              Mon compte
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <a
              href="#"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Accueil
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Services
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              À propos
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              Contact
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
            Demander un devis
            </a>

            <a href="#">
              <div className="flex items-center py-2 px-4 bg-[rgb(208,155,43)] hover:bg-[rgb(208,175,43)] text-white rounded-xl">
                <UserIcon className="h-5 w-5 mr-2" />
                <span>Mon compte</span>
              </div>
            </a>

          </div>
        )}
      </div>
    </nav>
  );
}