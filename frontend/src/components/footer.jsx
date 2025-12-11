import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#004080] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Dharti Automation</h3>
          <p className="text-white/80 leading-relaxed">
            Driving innovation with automation solutions tailored for modern industries.
            We focus on quality, reliability, and customer satisfaction.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#3DB049]">Contact Us</h3>
          <p className="text-white/80">📍 Patna, Bihar, India</p>
          <p className="text-white/80 mt-2">📞 +91 90000 00000</p>
          <p className="text-white/80 mt-1">📧 support@dhartiautomation.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#3DB049]">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-[#3DB049] transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-[#3DB049] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#3DB049] transition"><FaFacebook /></a>
            <a href="#" className="hover:text-[#3DB049] transition"><FaInstagram /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 border-t border-white/20 pt-6 text-white/70 text-sm">
        © {new Date().getFullYear()} Dharti Automation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
