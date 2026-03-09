'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { Database, ArrowLeft, Users, Building, Mail, FileText, Calendar, Trash2, Lock } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  // Security State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Data State
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const SECRET_PASSWORD = "dynamics2026"; // <-- This is your secret password!

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === SECRET_PASSWORD) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Incorrect password. Access denied.');
      setPasswordInput('');
    }
  };

  const fetchLeads = async () => {
    const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
    if (!error) setLeads(data || []);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this lead? This cannot be undone.");
    if (isConfirmed) {
      const { error } = await supabase.from('leads').delete().eq('id', id);
      if (!error) setLeads(leads.filter((lead) => lead.id !== id));
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // THE LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="h-5 w-5" /> Back to Website
        </Link>
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 max-w-md w-full text-center">
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Admin Access</h1>
          <p className="text-slate-500 mb-8">Enter your secure password to view CRM leads.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Enter Password..." 
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-center tracking-widest"
            />
            {loginError && <p className="text-red-500 text-sm font-medium">{loginError}</p>}
            <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors">
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // THE DASHBOARD (Only shows if authenticated)
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="bg-slate-900 shadow-sm sticky top-0 z-50 p-4 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="h-5 w-5" /> Back to Live Site
          </Link>
          <div className="flex items-center gap-2">
            <Database className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-lg tracking-tight">DynamicsPro CRM</span>
            <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full ml-2">Admin</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Lead Operations</h1>
            <p className="text-slate-600">Review and manage your incoming Dynamics 365 inquiries.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="font-bold">{leads.length} Total Leads</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-sm uppercase tracking-wider text-slate-500">
                  <th className="p-4 font-semibold"><div className="flex items-center gap-2"><Calendar className="h-4 w-4"/> Date</div></th>
                  <th className="p-4 font-semibold"><div className="flex items-center gap-2"><Users className="h-4 w-4"/> Name</div></th>
                  <th className="p-4 font-semibold"><div className="flex items-center gap-2"><Building className="h-4 w-4"/> Company</div></th>
                  <th className="p-4 font-semibold"><div className="flex items-center gap-2"><Mail className="h-4 w-4"/> Email</div></th>
                  <th className="p-4 font-semibold"><div className="flex items-center gap-2"><FileText className="h-4 w-4"/> Request Details</div></th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr><td colSpan={6} className="p-8 text-center text-slate-500">Loading leads...</td></tr>
                ) : leads.length === 0 ? (
                  <tr><td colSpan={6} className="p-8 text-center text-slate-500">No leads found. Go submit one!</td></tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 text-sm text-slate-500 whitespace-nowrap">{formatDate(lead.created_at)}</td>
                      <td className="p-4 font-medium text-slate-900 whitespace-nowrap">{lead.first_name} {lead.last_name}</td>
                      <td className="p-4 text-slate-600 whitespace-nowrap">{lead.company_name || '-'}</td>
                      <td className="p-4 text-blue-600 whitespace-nowrap"><a href={`mailto:${lead.email}`} className="hover:underline">{lead.email}</a></td>
                      <td className="p-4 text-slate-600 text-sm max-w-xs truncate" title={lead.request}>{lead.request}</td>
                      <td className="p-4 text-right">
                        <button onClick={() => handleDelete(lead.id)} className="text-slate-400 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50" title="Delete Lead">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}