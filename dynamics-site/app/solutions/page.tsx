'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Globe, ArrowRight } from 'lucide-react';
import Navbar from '../Navbar';
import CustomCursor from '../CustomCursor';

export default function Solutions() {
  // Animation Variants with explicit Types for TypeScript
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const caseStudies = [
    { 
      title: "Manufacturing Giant", 
      result: "60% Efficiency Increase", 
      desc: "Migrated 20 years of legacy ERP data to Dynamics 365 in 4 months.",
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />
    },
    { 
      title: "Retail Chain", 
      result: "$2M Revenue Growth", 
      desc: "Implemented automated CRM pipelines across 50+ locations.",
      icon: <Users className="h-6 w-6 text-indigo-500" />
    },
    { 
      title: "Logistics Global", 
      result: "99.9% Data Accuracy", 
      desc: "Built custom API middleware for real-time tracking and reporting.",
      icon: <Globe className="h-6 w-6 text-blue-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 cursor-none">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] bg-blue-600/20 blur-[100px] rounded-full"></div>
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          className="max-w-7xl mx-auto px-4 text-center relative z-10"
        >
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">Proven Results</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Solutions</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">We don't just install software; we re-engineer your entire business logic for the digital age.</p>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp} 
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {study.icon}
              </div>
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">{study.result}</h3>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">{study.title}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">{study.desc}</p>
              <div className="flex items-center gap-2 text-slate-900 font-bold cursor-pointer group-hover:text-blue-600">
                View Case Study <ArrowRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to modernize your operations?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 font-semibold bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <CheckCircle2 className="h-5 w-5" /> 24/7 Support
            </div>
            <div className="flex items-center gap-2 font-semibold bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <CheckCircle2 className="h-5 w-5" /> Cloud Security
            </div>
            <div className="flex items-center gap-2 font-semibold bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <CheckCircle2 className="h-5 w-5" /> Rapid Deployment
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-sm">
        <p>© 2026 Satyam Panndey Dynamics Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}