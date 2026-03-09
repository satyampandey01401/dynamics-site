import React from 'react';
import { Database, ArrowLeft, Briefcase, ShoppingCart, Factory } from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Simple Header */}
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

      {/* Solutions Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Industry Solutions</h1>
          <p className="text-lg text-slate-600">Dynamics 365 architectures tailored to your specific sector.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <Briefcase className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Professional Services</h3>
            <p className="text-slate-600">Automate lead generation, track billable hours, and manage client projects in one unified dashboard.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <ShoppingCart className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Retail & E-Commerce</h3>
            <p className="text-slate-600">Connect your supply chain directly to your customer service pipeline for real-time inventory and support.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <Factory className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
            <p className="text-slate-600">Predictive maintenance and resource planning integrations to keep your production lines moving.</p>
          </div>
        </div>
      </div>
    </div>
  );
}