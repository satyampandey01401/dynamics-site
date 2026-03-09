import React from 'react';
import { Database, ArrowLeft, BarChart, Cloud, ShieldCheck, Laptop } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
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

      {/* Services Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive Microsoft Dynamics 365 solutions designed to scale your operations and drive revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-6">
            <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center shrink-0">
              <Database className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">CRM Implementation</h3>
              <p className="text-slate-600 mb-4">Complete setup of Dynamics 365 Sales. We architect custom lead pipelines, dashboards, and automated workflows.</p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-6">
            <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center shrink-0">
              <BarChart className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">ERP Migration</h3>
              <p className="text-slate-600 mb-4">Securely migrate your legacy financial data into Dynamics 365 Finance & Operations with zero downtime.</p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-6">
            <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center shrink-0">
              <Cloud className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Custom Integration</h3>
              <p className="text-slate-600 mb-4">Connect your CRM with third-party web apps, email providers, and custom databases using secure APIs.</p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-6">
            <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center shrink-0">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Support & Training</h3>
              <p className="text-slate-600 mb-4">Dedicated support to resolve technical issues, plus comprehensive training for your sales and operations teams.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}