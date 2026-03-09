'use client';

import React, { useState } from 'react';
import { Search, Menu, Database, Cloud, ArrowRight, BarChart } from 'lucide-react';
import Link from 'next/link'; 
import { supabase } from './supabase';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Form State including Company Name
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    request: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Submit Function to send data to Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('leads')
      .insert([
        { 
          first_name: formData.firstName, 
          last_name: formData.lastName, 
          email: formData.email, 
          company_name: formData.companyName,
          request: formData.request 
        }
      ]);

    if (error) {
      alert("Supabase says: " + error.message); 
      console.error('Error saving lead:', error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', companyName: '', request: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. NAVIGATION BAR WITH HOVER DROPDOWNS */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <Database className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl tracking-tight text-slate-800">DynamicsPro</span>
            </div>

            {/* Desktop Links with Interactive Dropdowns */}
            <div className="hidden md:flex space-x-8 items-center font-medium text-slate-600">
              
              {/* Services Dropdown */}
              <div className="relative group py-6">
                <Link href="/services" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                  Services
                </Link>
                <div className="absolute left-0 top-full mt-0 w-64 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden transform origin-top group-hover:translate-y-0 translate-y-2">
                  <div className="p-2 flex flex-col">
                    <Link href="/services" className="p-3 hover:bg-slate-50 rounded-lg transition-colors">
                      <span className="block font-bold text-slate-800 text-sm">CRM Implementation</span>
                      <span className="block text-xs text-slate-500 mt-1">Setup & sales pipelines</span>
                    </Link>
                    <Link href="/services" className="p-3 hover:bg-slate-50 rounded-lg transition-colors">
                      <span className="block font-bold text-slate-800 text-sm">ERP Migration</span>
                      <span className="block text-xs text-slate-500 mt-1">Legacy system upgrades</span>
                    </Link>
                    <Link href="/services" className="p-3 hover:bg-slate-50 rounded-lg transition-colors">
                      <span className="block font-bold text-slate-800 text-sm">Custom Integration</span>
                      <span className="block text-xs text-slate-500 mt-1">Connect APIs & web apps</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group py-6">
                <Link href="/solutions" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                  Solutions
                </Link>
                <div className="absolute left-0 top-full mt-0 w-56 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden transform origin-top group-hover:translate-y-0 translate-y-2">
                  <div className="p-2 flex flex-col">
                    <Link href="/solutions" className="p-3 hover:bg-slate-50 rounded-lg transition-colors">
                      <span className="block font-bold text-slate-800 text-sm">Professional Services</span>
                    </Link>
                    <Link href="/solutions" className="p-3 hover:bg-slate-50 rounded-lg transition-colors">
                      <span className="block font-bold text-slate-800 text-sm">Retail & E-Commerce</span>
                    </Link>
                    <Link href="/solutions" className="p-3 hover:bg-slate-50 rounded-lg transition-colors">
                      <span className="block font-bold text-slate-800 text-sm">Manufacturing</span>
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
              
              {/* Search Bar */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-9 pr-4 py-2 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <Search className="h-4 w-4 text-slate-400 absolute left-3 top-2.5" />
              </div>

              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                Get a Consultation
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex flex-col items-start text-left">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4">Microsoft Partner</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Transform Your Business with <span className="text-blue-600">Dynamics 365</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We provide end-to-end implementation, customization, and support to streamline your operations and accelerate your sales pipeline.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="bg-slate-100 text-slate-700 px-8 py-3 rounded-md font-medium hover:bg-slate-200 transition-colors">
                Explore Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="Team analyzing data" 
              className="rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW SECTION */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Tailored solutions to fit your unique business requirements.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Database className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">CRM Implementation</h3>
              <p className="text-slate-600 mb-4">Set up Dynamics 365 Sales to capture high-quality leads and manage customer relationships seamlessly.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <BarChart className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">ERP Migration</h3>
              <p className="text-slate-600 mb-4">Safely migrate your legacy finance and operations data into a unified, cloud-based system.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Cloud className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Architecture</h3>
              <p className="text-slate-600 mb-4">Build powerful integrations to connect your Dynamics 365 environment with third-party web apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">See how we have helped businesses transform their operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Rajiv Sharma</h4>
                  <p className="text-sm text-slate-500">VP of Operations, TechFlow India</p>
                </div>
              </div>
              <p className="text-slate-700 italic">"The Dynamics 365 migration was seamless. Our sales team now closes deals 30% faster thanks to the custom workflows they built for us."</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Anita Desai</h4>
                  <p className="text-sm text-slate-500">Director, Global Retail Group</p>
                </div>
              </div>
              <p className="text-slate-700 italic">"Their support team is incredible. They didn't just implement the software; they trained our entire staff and completely modernized our customer service pipeline."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEAD GENERATION CONTACT FORM */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-700">
            
            <div className="md:w-2/5 p-10 bg-slate-800 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Let's talk business.</h3>
                <p className="text-slate-400 mb-8 text-sm">Fill out the form and our sales engineering team will get back to you within 24 hours.</p>
                <div className="space-y-4 text-sm">
                  <p>📍 Noida, UP</p>
                  <p>📧 solutions@dynamicspro.com</p>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-10 bg-white">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Work Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Company Name</label>
                    <input 
                      type="text" 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">How can we help?</label>
                  <textarea 
                    rows={4} 
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  ></textarea>
                </div>
                
                {status === 'success' && <p className="text-green-600 text-sm font-medium">Request sent successfully!</p>}
                {status === 'error' && <p className="text-red-600 text-sm font-medium">Something went wrong. Please try again.</p>}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mt-4 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 py-8 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>© 2026 Satyam Panndey Dynamics Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}