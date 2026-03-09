import React from 'react';
import { Database, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Simple Header with Back Button */}
      <Navbar />

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">About Us</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Founded in Noida, Dynamics Solutions was built on a simple premise: enterprise software shouldn't be a bottleneck; it should be an accelerator. We specialize in transforming complex Microsoft Dynamics 365 implementations into streamlined, revenue-generating systems for our clients.
        </p>
        
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-slate-700">
            To empower B2B service businesses with custom CRM architectures that capture every lead, manage every relationship, and close every deal efficiently. We bridge the gap between technical complexity and business growth.
          </p>
        </div>
      </div>
    </div>
  );
}