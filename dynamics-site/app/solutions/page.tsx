'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { TrendingUp, Users, Globe2, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import Navbar from '../Navbar';
import Link from 'next/link';

export default function Solutions() {
  const fadeUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  const caseStudies = [
    { 
      client: "Global Manufacturing Corp",
      metric: "60% Efficiency Increase", 
      title: "Legacy ERP to Cloud Dynamics",
      desc: "Migrated 20 years of on-premise supply chain data to Microsoft Dynamics 365 in just 4 months with zero downtime.",
      icon: <Activity className="h-6 w-6 text-emerald-400" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      tag: "Manufacturing"
    },
    { 
      client: "FinTech Innovators",
      metric: "$2.4M Revenue Recovered", 
      title: "Automated Sales Pipeline",
      desc: "Re-engineered their lead generation and CRM architecture, stopping lead leakage and boosting close rates by 18%.",
      icon: <TrendingUp className="h-6 w-6 text-blue-400" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tag: "Finance"
    },
    { 
      client: "Logistics Worldwide",
      metric: "99.9% Data Accuracy", 
      title: "Custom API Middleware",
      desc: "Built robust Java-based middleware to connect third-party fleet tracking directly into their central Dynamics dashboard.",
      icon: <Globe2 className="h-6 w-6 text-indigo-400" />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      tag: "Logistics"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-slate-300 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 relative z-10 border-b border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Proven Results</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Solutions.</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">We don't just install software. We solve complex business bottlenecks with high-end architectural engineering.</p>
        </motion.div>
      </section>

      {/* Case Studies Container */}
      <section className="py-24 max-w-7xl mx-auto px-4 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={fadeUp} className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-slate-600 transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">{study.tag}</span>
                    <div className="flex items-center gap-2 text-white font-bold"><ShieldCheck className="h-5 w-5 text-blue-500"/> Verified</div>
                  </div>
                  <h3 className="text-4xl font-black text-white mb-4">{study.metric}</h3>
                  <h4 className="text-2xl font-bold text-slate-300 mb-4">{study.title}</h4>
                  <p className="text-slate-400 leading-relaxed mb-8">{study.desc}</p>
                  <Link href="/#contact" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                    Discuss Similar Solution <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="h-80 lg:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}