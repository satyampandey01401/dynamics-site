'use client';

import React, { useState } from 'react';
import { Database, ArrowRight, Zap, Shield, Cpu, Star, CheckCircle2 } from 'lucide-react';
import Link from 'next/link'; 
import { supabase } from './supabase';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';

export default function Home() {
  // Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // ROI Calculator State
  const [leadsPerMonth, setLeadsPerMonth] = useState(500);
  const [avgDealSize, setAvgDealSize] = useState(5000);
  
  // The Math (Tech Sales Logic)
  const currentCloseRate = 0.10; // 10%
  const newCloseRate = 0.16; // 16% with CRM
  const currentMonthlyRevenue = leadsPerMonth * currentCloseRate * avgDealSize;
  const projectedMonthlyRevenue = leadsPerMonth * newCloseRate * avgDealSize;
  const addedMonthlyValue = projectedMonthlyRevenue - currentMonthlyRevenue;

  // Form & Toast State
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', companyName: '', request: '' });
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');
  const [toast, setToast] = useState<{ show: boolean, type: 'success' | 'error', message: string }>({ show: false, type: 'success', message: '' });

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: 'success', message: '' }), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('leads').insert([{ first_name: formData.firstName, last_name: formData.lastName, email: formData.email, company_name: formData.companyName, request: formData.request }]);
    if (error) {
      showToast('error', 'Database connection failed. Please try again.');
      setStatus('idle');
    } else {
      showToast('success', 'Architecture Review Requested! We will contact you shortly.');
      setFormData({ firstName: '', lastName: '', email: '', companyName: '', request: '' });
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Animation Constants
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeUpStagger = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
  const slideLeft = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const slideRight = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-600 selection:text-white cursor-default">
      
      <CustomCursor />
      
      {/* 1. SCROLL PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]" style={{ scaleX }} />

      <Navbar />

      {/* 2. DYNAMIC TOAST NOTIFICATION */}
      <AnimatePresence>
        {toast.show && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
            className={`fixed bottom-8 right-8 z-[100] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 font-bold border ${toast.type === 'success' ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'}`}
          >
            {toast.type === 'success' ? <CheckCircle2 className="h-6 w-6 text-green-600" /> : <Shield className="h-6 w-6 text-red-600" />}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative bg-slate-950 overflow-hidden pt-32 pb-32 lg:pt-48 lg:pb-40 flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUpStagger} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-sm mb-8 backdrop-blur-sm">
              <Zap className="h-4 w-4" /> Microsoft Dynamics 365 Partner
            </motion.div>
            <motion.div variants={fadeUpStagger}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                Architecting the Future of <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Enterprise Operations</span>
              </h1>
            </motion.div>
            <motion.div variants={fadeUpStagger}>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                We design, deploy, and scale custom Dynamics 365 architectures that eliminate bottlenecks and turn your complex data into pure revenue.
              </p>
            </motion.div>
            <motion.div variants={fadeUpStagger} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Start Your Project <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. INTERACTIVE ROI CALCULATOR (NEW SECTION) */}
      <section className="py-24 bg-white relative z-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Calculate Your Lost Revenue</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">See exactly how much money is slipping through the cracks of a fragmented sales process.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row gap-12 items-center">
            
            {/* The Sliders */}
            <div className="w-full lg:w-1/2 space-y-10">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-bold text-slate-700">Monthly Inbound Leads</label>
                  <span className="font-black text-blue-600 text-xl">{leadsPerMonth.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="50" max="2000" step="50" value={leadsPerMonth} 
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))} 
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-bold text-slate-700">Average Deal Size ($)</label>
                  <span className="font-black text-blue-600 text-xl">${avgDealSize.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="500" max="50000" step="500" value={avgDealSize} 
                  onChange={(e) => setAvgDealSize(Number(e.target.value))} 
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            {/* The Results Panel */}
            <div className="w-full lg:w-1/2 bg-slate-950 rounded-2xl p-8 text-white shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/30 blur-[50px] rounded-full pointer-events-none"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="border-b border-slate-800 pb-6">
                  <p className="text-slate-400 font-medium mb-1">Current Monthly Revenue (10% Close Rate)</p>
                  <p className="text-3xl font-bold text-slate-200">${currentMonthlyRevenue.toLocaleString()}</p>
                </div>
                
                <div className="border-b border-slate-800 pb-6">
                  <p className="text-slate-400 font-medium mb-1 flex items-center gap-2">Projected Revenue with DynamicsPro <Zap className="h-4 w-4 text-blue-400"/></p>
                  <p className="text-4xl font-black text-white">${projectedMonthlyRevenue.toLocaleString()}</p>
                  <p className="text-sm text-slate-500 mt-2">Assuming a conservative 60% pipeline efficiency increase.</p>
                </div>

                <div className="pt-2">
                  <p className="text-blue-200 font-bold uppercase tracking-wider text-sm mb-2">Monthly Added Value</p>
                  <motion.p 
                    key={addedMonthlyValue}
                    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
                  >
                    +${addedMonthlyValue.toLocaleString()}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="py-24 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeUpStagger} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">CRM Systems</h3>
              <p className="text-slate-600 leading-relaxed">Capture high-quality leads and manage pipelines automatically.</p>
            </motion.div>
            <motion.div variants={fadeUpStagger} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
              <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-slate-900/30">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">ERP Migration</h3>
              <p className="text-slate-600 leading-relaxed">Safely migrate legacy finance data into a secure cloud environment.</p>
            </motion.div>
            <motion.div variants={fadeUpStagger} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
              <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-600/30">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Custom APIs</h3>
              <p className="text-slate-600 leading-relaxed">Connect your Dynamics environment with all third-party web apps.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 bg-slate-950 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight} className="md:w-5/12 p-12 lg:p-16 bg-blue-600 text-white flex flex-col justify-between">
              <div>
                <span className="text-blue-200 font-bold tracking-wider uppercase text-sm mb-4 block">Request Review</span>
                <h3 className="text-4xl font-extrabold mb-6 leading-tight">Let's build your CRM.</h3>
                <p className="text-blue-100 mb-12 text-lg">Fill out the form and our engineering team will architect a roadmap within 24 hours.</p>
                <div className="space-y-6 text-base font-medium">
                  <p className="flex items-center gap-4 text-white"><span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">📍</span> Noida, UP</p>
                  <p className="flex items-center gap-4 text-white"><span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">📧</span> solutions@dynamicspro.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft} className="md:w-7/12 p-12 lg:p-16 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">First Name</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full border-b-2 border-slate-200 px-2 py-3 focus:border-blue-600 outline-none" /></div>
                  <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Last Name</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full border-b-2 border-slate-200 px-2 py-3 focus:border-blue-600 outline-none" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Work Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border-b-2 border-slate-200 px-2 py-3 focus:border-blue-600 outline-none" /></div>
                  <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Company</label><input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full border-b-2 border-slate-200 px-2 py-3 focus:border-blue-600 outline-none" /></div>
                </div>
                <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">How can we help?</label><textarea rows={3} name="request" value={formData.request} onChange={handleChange} required className="w-full border-b-2 border-slate-200 px-2 py-3 focus:border-blue-600 outline-none resize-none"></textarea></div>
                
                <button type="submit" disabled={status === 'loading'} className="w-full bg-slate-900 text-white font-bold text-lg py-5 rounded-xl hover:bg-blue-600 transition-all duration-300 mt-4 disabled:opacity-70 cursor-none">
                  {status === 'loading' ? 'Sending...' : 'Initialize Consultation'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}