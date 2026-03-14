'use client';

import React, { useState } from 'react';
import { Database, ArrowRight, Zap, Shield, Cpu, CheckCircle2, BarChart3, Globe2, MapPin, Clock } from 'lucide-react';
import Link from 'next/link'; 
import { supabase } from './supabase';
import { motion, useScroll, useSpring, AnimatePresence, Variants } from 'framer-motion';
import Navbar from './Navbar';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [leadsPerMonth, setLeadsPerMonth] = useState(500);
  const [avgDealSize, setAvgDealSize] = useState(5000);
  const currentMonthlyRevenue = leadsPerMonth * 0.10 * avgDealSize;
  const projectedMonthlyRevenue = leadsPerMonth * 0.16 * avgDealSize;
  const addedMonthlyValue = projectedMonthlyRevenue - currentMonthlyRevenue;

  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', companyName: '', request: '' });
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });

  // Typesafe Animations
  const fadeUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeRight: Variants = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: 'success', message: '' }), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('leads').insert([{ first_name: formData.firstName, last_name: formData.lastName, email: formData.email, company_name: formData.companyName, request: formData.request }]);
    if (error) { showToast('error', 'Connection failed.'); setStatus('idle'); } 
    else { showToast('success', 'Request Sent Successfully!'); setFormData({ firstName: '', lastName: '', email: '', companyName: '', request: '' }); setStatus('idle'); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    // Yahan se cursor-none hata diya hai, ab normal cursor aayega
    <div className="min-h-screen bg-[#020817] font-sans text-slate-300 selection:bg-blue-600 selection:text-white relative">
      
      {/* High-Tech Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]" style={{ scaleX }} />
      <Navbar />

      {/* Dynamic Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className={`fixed bottom-8 right-8 z-[100] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 font-bold border ${toast.type === 'success' ? 'bg-green-900/90 text-green-300 border-green-700' : 'bg-red-900/90 text-red-300 border-red-700'} backdrop-blur-md`}>
            <CheckCircle2 className="h-6 w-6" /> {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - Bento Box Style */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-700/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 font-semibold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
                <Globe2 className="h-4 w-4" /> Enterprise Tech Solutions
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Digital Scale.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed font-light">
                We transform fragmented workflows into high-performance architecture. Expert Microsoft Dynamics 365 implementation for industry leaders.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                  Initialize Project <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/services" className="bg-slate-800/50 border border-slate-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
                  Explore Capabilities
                </Link>
              </motion.div>
            </motion.div>

            {/* Visual Bento Side with Image */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2 h-64 rounded-2xl overflow-hidden relative group border border-slate-800">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Data Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-blue-400 font-bold tracking-wider text-sm">REAL-TIME</p>
                  <p className="text-white font-bold text-xl">Data Synchronization</p>
                </div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-center">
                <h3 className="text-4xl font-black text-white mb-2">99.9%</h3>
                <p className="text-slate-400 text-sm font-medium">System Uptime</p>
              </div>
              <div className="bg-blue-900/20 border border-blue-800/50 p-6 rounded-2xl flex flex-col justify-center backdrop-blur-sm">
                <Cpu className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-white font-bold">Automated Workflows</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METRICS / LOGO BAR */}
      {/* Text Side (Hero Section) */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 font-semibold text-xs uppercase tracking-widest mb-6 backdrop-blur-sm">
                <Globe2 className="h-4 w-4" /> Enterprise Tech Solutions
              </motion.div>
              
              {/* NEW MS PARTNER BADGE WITH SHINE ANIMATION */}
              <motion.a 
                variants={fadeUp} 
                href="https://partner.microsoft.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative group flex items-center gap-3 w-fit mb-8 bg-slate-900/80 border border-slate-700 p-3 rounded-xl overflow-hidden transition-all hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] backdrop-blur-md"
              >
                {/* Shine Element */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1.5s] ease-in-out skew-x-12 z-0"></div>
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" alt="Microsoft Partner" className="w-[90px] object-contain relative z-10" />
                <div className="text-left border-l border-slate-600 pl-3 relative z-10">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-1">Certified</p>
                  <p className="text-xs text-white font-semibold leading-none">Solutions Partner</p>
                </div>
              </motion.a>

              <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Digital Scale.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed font-light">
                We transform fragmented workflows into high-performance architecture. Expert Microsoft Dynamics 365 implementation for industry leaders.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                  Initialize Project <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/services" className="bg-slate-800/50 border border-slate-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
                  Explore Capabilities
                </Link>
              </motion.div>
            </motion.div>
      {/* FULLY DETAILED SERVICES SECTION */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="max-w-2xl">
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">Core Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">Architectural <br/> Excellence.</h2>
            </motion.div>
            <Link href="/services" className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-2 mt-6 md:mt-0 transition-colors">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <motion.div variants={fadeUp} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60" alt="CRM" />
              </div>
              <div className="p-8">
                <Database className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">CRM Architecture</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">End-to-end Microsoft Dynamics 365 implementation designed to capture leaks in your sales funnel.</p>
                {/* Working Link to Services page */}
                <Link href="/services#crm" className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Learn More <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div variants={fadeUp} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-colors">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60" alt="ERP" />
              </div>
              <div className="p-8">
                <Shield className="h-8 w-8 text-indigo-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Secure ERP Migration</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Zero-downtime migration protocols for enterprise financial data. Safe, compliant, and fast.</p>
                <Link href="/services#erp" className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">Learn More <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div variants={fadeUp} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60" alt="API" />
              </div>
              <div className="p-8">
                <Cpu className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Custom API Integrations</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Seamlessly connect your CRM with external billing, marketing, and logistics software.</p>
                <Link href="/services#api" className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">Learn More <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROI CALCULATOR - Tech Themed */}
      <section className="py-24 relative z-10 bg-[#050b1a] border-y border-slate-800/50 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/50 border border-slate-800 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/2 space-y-10">
              <div>
                <h2 className="text-3xl font-black text-white mb-2">ROI Projection Engine</h2>
                <p className="text-slate-400 mb-8">Adjust the metrics below to see real-time revenue projections based on our historical Dynamics 365 implementation data.</p>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-bold text-slate-300">Monthly Inbound Leads</label>
                    <span className="font-black text-blue-400 bg-blue-900/30 px-3 py-1 rounded text-xl border border-blue-800/50">{leadsPerMonth.toLocaleString()}</span>
                  </div>
                  <input type="range" min="50" max="2000" step="50" value={leadsPerMonth} onChange={(e) => setLeadsPerMonth(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-bold text-slate-300">Average Deal Size (USD)</label>
                    <span className="font-black text-blue-400 bg-blue-900/30 px-3 py-1 rounded text-xl border border-blue-800/50">${avgDealSize.toLocaleString()}</span>
                  </div>
                  <input type="range" min="500" max="50000" step="500" value={avgDealSize} onChange={(e) => setAvgDealSize(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-[#020817] border border-slate-800 rounded-2xl p-8 lg:p-10 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 blur-[60px] rounded-full"></div>
              <div className="space-y-8 relative z-10">
                <div className="border-b border-slate-800/60 pb-6 flex justify-between items-center">
                  <p className="text-slate-400 font-medium">Status Quo Revenue (10% Close)</p>
                  <p className="text-2xl font-bold text-slate-500">${currentMonthlyRevenue.toLocaleString()}</p>
                </div>
                <div className="border-b border-slate-800/60 pb-6 flex justify-between items-center">
                  <p className="text-blue-400 font-medium flex items-center gap-2"><Zap className="h-4 w-4"/> Optimized Revenue (16% Close)</p>
                  <p className="text-3xl font-black text-white">${projectedMonthlyRevenue.toLocaleString()}</p>
                </div>
                <div className="pt-4 bg-gradient-to-r from-blue-900/20 to-transparent p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Net Monthly Value Added</p>
                  <motion.p key={addedMonthlyValue} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    +${addedMonthlyValue.toLocaleString()}
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 lg:p-16 border-b border-slate-800 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Initialize Consultation</h2>
              <p className="text-slate-400">Our engineering team will review your requirements and respond within 24 hours.</p>
            </div>
            
            <div className="p-12 lg:p-16 border-b border-slate-800 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Initialize Consultation</h2>
              
              {/* Naye Global Trust Markers */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-medium text-slate-400 mt-6">
                <span className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50"><MapPin className="h-4 w-4 text-blue-500"/> Serving enterprise clients across the US, UK & Australia</span>
                <span className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50"><Clock className="h-4 w-4 text-blue-500"/> Response within 24 business hours guaranteed</span>
                <span className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50"><Shield className="h-4 w-4 text-blue-500"/> NDA-first engagements available</span>
              </div>
            </div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Work Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Company</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">System Requirements / Architecture Needs</label>
                  <textarea rows={4} name="request" value={formData.request} onChange={handleChange} required className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-all"></textarea>
                </div>
                <button type="submit" disabled={status === 'loading'} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.3)] disabled:opacity-50">
                  {status === 'loading' ? 'Transmitting Data...' : 'Submit Architecture Request'} <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}