'use client';

import React from 'react';
import Navbar from '../Navbar';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-300 font-sans">
      <Navbar />
      
      <div className="pt-40 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-12 font-bold uppercase tracking-widest">Last Updated: March 2026</p>
        
        <div className="space-y-8 text-lg text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>At DynamicsPro Ltd., we collect information that you provide directly to us, such as when you request a consultation, fill out a form, or communicate with us. This may include your name, email address, company details, and project requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our Microsoft Dynamics 365 and CRM architecture services. We also use it to communicate with you, process transactions, and send technical notices or support messages.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
            <p>We implement enterprise-grade security measures designed to protect your personal information from unauthorized access and data breaches. However, no security system is impenetrable, and we cannot guarantee the absolute security of our databases.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:solutions@dynamicspro.com" className="text-blue-400 hover:text-blue-300 transition-colors">solutions@dynamicspro.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}