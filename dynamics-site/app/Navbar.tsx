'use client';

import React, { useState } from 'react';
import { Search, Menu, X, Database, Lock } from 'lucide-react';
import Link from 'next/link'; 
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');

  const handleSearch = (query: string) => { 
    if (query.trim() !== '') { 
      setIsMenuOpen(false); 
      router.push(`/search?q=${encodeURIComponent(query.trim())}`); 
    } 
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Database className="h-8 w-8 text-blue-600" />
            <span className="font-extrabold text-xl tracking-tight text-slate-900">DynamicsPro</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center font-semibold text-slate-600">
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/solutions" className="hover:text-blue-600 transition-colors">Solutions</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
            
            <div className="relative group">
              <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(searchQuery); }} className="pl-10 pr-4 py-2 bg-slate-100/50 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all w-48 group-hover:w-64" />
              <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-2.5" />
            </div>

            <div className="flex items-center gap-4">
              <a href="/#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                Get Started
              </a>
              
              {/* THE SECRET ADMIN BACKDOOR */}
              <Link href="/admin" className="text-slate-300 hover:text-blue-600 transition-colors" title="Admin Portal">
                <Lock className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            {/* Secret link for mobile too */}
            <Link href="/admin" className="text-slate-300 hover:text-blue-600 transition-colors">
              <Lock className="h-4 w-4" />
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-blue-600 transition-colors p-2">
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full left-0 z-40 origin-top animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="pt-4 pb-6 space-y-2 flex flex-col">
            <div className="px-4 mb-2">
              <div className="relative">
                <input type="text" placeholder="Search site..." value={mobileSearchQuery} onChange={(e) => setMobileSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(mobileSearchQuery); }} className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg text-base focus:outline-none focus:border-blue-500 bg-slate-50" />
                <Search className="h-5 w-5 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-lg font-medium text-slate-700 hover:text-blue-600">Services</Link>
            <Link href="/solutions" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-lg font-medium text-slate-700 hover:text-blue-600">Solutions</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-lg font-medium text-slate-700 hover:text-blue-600">About Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}