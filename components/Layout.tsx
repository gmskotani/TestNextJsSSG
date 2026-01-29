
import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              {SITE_NAME}
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">ホーム</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">ブログ</Link>
            </nav>
            <div className="flex items-center space-x-4">
               <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                 Get Started
               </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-600">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
