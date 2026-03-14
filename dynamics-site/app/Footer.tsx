import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Youtube, Mail, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Partner Badge */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tight text-white">DynamicsPro.</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Architecting the future of enterprise operations with scalable Microsoft Dynamics 365 solutions.
            </p>
            {/* Microsoft Partner Badge (Placeholder image, ~90px width) */}
            <div className="inline-block bg-white/5 p-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" 
                alt="Microsoft Partner" 
                className="w-[90px] object-contain opacity-90"
              />
              <p className="text-[10px] text-slate-400 mt-1 text-center font-semibold tracking-wider uppercase">Partner</p>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Services</h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li><Link href="/services#crm" className="hover:text-blue-400 transition-colors">CRM Systems</Link></li>
              <li><Link href="/services#erp" className="hover:text-blue-400 transition-colors">ERP Migration</Link></li>
              <li><Link href="/services#api" className="hover:text-blue-400 transition-colors">Custom APIs</Link></li>
              <li><Link href="/services#staff" className="hover:text-blue-400 transition-colors">Staff Augmentation</Link></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li>
                <a href="mailto:solutions@dynamicspro.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <Mail className="h-4 w-4 text-slate-500" /> solutions@dynamicspro.com
                </a>
              </li>
              <li>
                <a href="https://calendly.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <Calendar className="h-4 w-4 text-slate-500" /> Book a Call
                </a>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="h-10 w-10 bg-slate-800/50 rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all text-slate-400 border border-slate-700">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 bg-slate-800/50 rounded-full flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all text-slate-400 border border-slate-700">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 bg-slate-800/50 rounded-full flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all text-slate-400 border border-slate-700">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
          <p>© 2026 DynamicsPro Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}