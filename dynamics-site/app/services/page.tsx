'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Database, Shield, Cpu, Zap, ArrowRight, BarChart } from 'lucide-react';
import Navbar from '../Navbar';
import CustomCursor from '../CustomCursor';

export default function Services() {
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

  const services = [
    { title: "CRM Implementation", desc: "Custom Microsoft Dynamics 365 setups tailored to your sales cycle.", icon: <Database className="h-8 w-8" /> },
    { title: "ERP Migration", desc: "Seamless transition of legacy financial data to the cloud.", icon: <Shield className="h-8 w-8" /> },
    { title: "Automation", desc: "AI-driven workflows to eliminate repetitive manual tasks.", icon: <Zap className="h-8 w-8" /> },
    { title: "Custom API", desc: "Connecting your business tools with robust middleware.", icon: <Cpu className="h-8 w-8" /> },
    { title: "Data Analytics", desc: "Real-time dashboards for actionable business intelligence.", icon: <BarChart className="h-8 w-8" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white cursor-none">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Our <span className="text-blue-500">Services</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            High-performance architecture designed to scale your enterprise operations.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp} 
                className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-all group"
              >
                <div className="mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{service.desc}</p>
                <button className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300">
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-800 text-center text-slate-500">
        <p>© 2026 Satyam Panndey Dynamics. All rights reserved.</p>
      </footer>
    </div>
  );
}