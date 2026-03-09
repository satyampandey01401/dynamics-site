'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Database, ArrowLeft, Search as SearchIcon } from 'lucide-react';
import Link from 'next/link';

// Our searchable "database" of website content
const siteContent = [
  { id: 1, title: 'CRM Implementation', category: 'Services', url: '/services', desc: 'Set up Dynamics 365 Sales to capture leads and manage pipelines.' },
  { id: 2, title: 'ERP Migration', category: 'Services', url: '/services', desc: 'Safely migrate legacy finance data into a unified cloud system.' },
  { id: 3, title: 'Custom Architecture', category: 'Services', url: '/services', desc: 'Build powerful integrations connecting Dynamics 365 with third-party apps.' },
  { id: 4, title: 'Professional Services', category: 'Solutions', url: '/solutions', desc: 'Automate lead generation and track billable hours.' },
  { id: 5, title: 'Retail & E-Commerce', category: 'Solutions', url: '/solutions', desc: 'Connect supply chain directly to customer service.' },
  { id: 6, title: 'Manufacturing', category: 'Solutions', url: '/solutions', desc: 'Predictive maintenance and resource planning integrations.' },
  { id: 7, title: 'About Us', category: 'Company', url: '/about', desc: 'Learn about our mission to empower B2B service businesses.' },
];

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const lowercaseQuery = query.toLowerCase();

  // Filter the content based on what the user typed
  const results = siteContent.filter(
    (item) => 
      item.title.toLowerCase().includes(lowercaseQuery) || 
      item.desc.toLowerCase().includes(lowercaseQuery) ||
      item.category.toLowerCase().includes(lowercaseQuery)
  );

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

      {/* Results Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-10 border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Search Results</h1>
          <p className="text-slate-600">
            Showing results for: <span className="font-semibold text-blue-600">"{query}"</span>
          </p>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-100 shadow-sm">
            <SearchIcon className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-700 mb-2">No results found</h3>
            <p className="text-slate-500">We couldn't find anything matching "{query}". Try checking for typos or searching another term.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {results.map((result) => (
              <Link key={result.id} href={result.url} className="block bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">{result.category}</span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{result.title}</h3>
                    <p className="text-slate-600">{result.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// We wrap it in Suspense because reading URL parameters is a dynamic client-side action in Next.js
export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}