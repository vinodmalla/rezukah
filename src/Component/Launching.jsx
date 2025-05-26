import React from 'react';

const Launching = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-6">
        {/* Logo or Title */}
   
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">🚀 Rezukah</h1>

        {/* Launching Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
          We're Launching Soon!
        </h2>

        {/* Description / Teaser */}
        <p className="text-gray-400 text-lg">
          Our innovative platform is on its way. Stay tuned for an exciting experience that transforms how you engage with technology.
        </p>

        {/* Contact Info */}
        <div className="space-y-1 text-sm text-gray-400">
          <p>📧 Email: info@rezukah.com</p>
          <p>📞 Phone: +918340039341</p>
        </div>

      

        {/* Footer (optional) */}
        <p className="text-xs text-gray-600 pt-4">
          © {new Date().getFullYear()} Rezukah. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Launching;
