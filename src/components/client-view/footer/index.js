"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  { id: "facebook", icon: <FaFacebookF color="#fff" /> },
  { id: "twitter", icon: <FaTwitter color="#fff" /> },
  { id: "linkedin", icon: <FaLinkedinIn color="#fff" /> },
  { id: "instagram", icon: <FaInstagram color="#fff" /> },
];

export default function Footer() {
  return (
    <div className=" flex items-center bg-gray-100 justify-center">
      <footer className="bg-gray-800 text-white py-6 px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center">
          {/* Left Side: Text/Brand */}
          <div className="text-center">
            <p className="text-lg font-semibold">Built by Shakil Ahmed</p>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} Shakil Ahmed. All right reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-4">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={`https://www.${item.id}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
