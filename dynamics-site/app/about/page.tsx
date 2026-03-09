import React from 'react';
import { Database, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Simple Header with Back Button */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="h-5 w-5" /> Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <Database className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-lg tracking-tight text-slate-800">DynamicsPro</span>
          </div>
        </div>
      </nav>

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">About Us</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Founded in Noida, Satyam Panndey Dynamics Solutions was built on a simple premise: enterprise software shouldn't be a bottleneck; it should be an accelerator. We specialize in transforming complex Microsoft Dynamics 365 implementations into streamlined, revenue-generating systems for our clients.
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