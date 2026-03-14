'use client';

import React from 'react';
import Navbar from '../Navbar';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-300 font-sans">
      <Navbar />
      
      <div className="pt-40 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-12 font-bold uppercase tracking-widest">Effective Date: March 2026</p>
        
        <div className="space-y-8 text-lg text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the website and services provided by DynamicsPro Ltd., you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access the website or use any services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
            <p>DynamicsPro provides IT consulting, custom CRM architecture, Microsoft Dynamics 365 implementation, and full-stack development services. The specific scope of work for any project will be outlined in a separate Master Services Agreement (MSA).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Limitation of Liability</h2>
            <p>In no event shall DynamicsPro Ltd., nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any software deployed.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of India, specifically within the jurisdiction of Noida, UP, without regard to its conflict of law provisions.</p>
          </section>
        </div>
      </div>
    </div>
  );
}