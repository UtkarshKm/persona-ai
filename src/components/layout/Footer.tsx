import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-white text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm mb-4">Made with ❤️ by Utkarsh</p>
        <div className="flex justify-center space-x-4">
          <Link href="https://www.linkedin.com/in/utkarshkm/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link href="https://x.com/UtkKumawat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.21-6.917L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.714 6.237L18.244 2.25zm-2.97 1.8L9.433 18.87H6.406L13.14 4.05h3.134z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
