'use client';

import React from 'react';
import { Database, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
export default function ServicesPage() {
  
  // Reusable animation settings so we don't repeat ourselves
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-24 md:py-32">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Enterprise-Grade <span className="text-blue-400">Services</span></h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don't just install software. We architect business solutions. Discover how our end-to-end Dynamics 365 services can transform your data into revenue.
          </p>
        </motion.div>
      </div>

      {/* Service 1: Image Left, Text Right */}
      <div className="py-24 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="Team analyzing CRM data" 
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            className="md:w-1/2"
          >
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Core Offering</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">CRM Implementation & Strategy</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              A CRM is only as good as the process it supports. We build custom Dynamics 365 Sales environments tailored entirely to how your specific sales team operates.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />
                <span><strong>Custom Lead Pipelines:</strong> Automated routing for inbound leads.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />
                <span><strong>Sales Funnel Analytics:</strong> Real-time dashboards tracking deal stages.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Service 2: Text Left, Image Right */}
      <div className="py-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="md:w-1/2"
          >
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Data Security</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">ERP Migration & Upgrades</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Moving legacy financial and operations data is high-risk. We use proprietary staging environments to migrate your data to the cloud with zero downtime.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />
                <span><strong>Zero-Data-Loss Guarantee:</strong> Strict validation protocols.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />
                <span><strong>Legacy System Sunsetting:</strong> Safe extraction from SAP or Oracle.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            className="md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
              alt="Digital dashboard charts" 
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="bg-blue-600 text-white py-20 text-center"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to upgrade your infrastructure?</h2>
          <Link href="/#contact" className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            Schedule a Free Architecture Review
          </Link>
        </div>
      </motion.div>

    </div>
  );
}