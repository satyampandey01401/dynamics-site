'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Database, Shield, Cpu, Zap, ArrowRight, BarChart, Server } from 'lucide-react';
import Navbar from '../Navbar';
import Link from 'next/link';

export default function Services() {
  const fadeUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  const services = [
    { 
      id: "crm",
      title: "CRM Architecture", 
      desc: "Custom Microsoft Dynamics 365 setups tailored to your exact sales cycle and data flow.", 
      icon: <Database className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      id: "erp",
      title: "ERP Data Migration", 
      desc: "Zero-data-loss transition of legacy financial systems into a secure cloud environment.", 
      icon: <Shield className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    },
    { 
      id: "api",
      title: "API Middleware", 
      desc: "Robust custom endpoints to connect Dynamics with your existing software stack seamlessly.", 
      icon: <Cpu className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      id: "automation",
      title: "Workflow Automation", 
      desc: "AI-driven triggers that eliminate manual data entry and speed up response times by 10x.", 
      icon: <Zap className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    }
  ];

  return (
    // Cursor-none is removed
    <div className="min-h-screen bg-[#020817] text-slate-300">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 relative z-10 border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-700/10 blur-[150px] rounded-full"></div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Systems Built <br/> For <span className="text-blue-500">Scale.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            We deliver enterprise-grade Microsoft Dynamics solutions that align perfectly with your complex operational needs.
          </p>
        </motion.div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-16">
            
            {services.map((service, index) => (
              // ID is added here so clicking 'Learn More' on home page scrolls exactly to this service
              <motion.div id={service.id} key={index} variants={fadeUp} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-blue-900 transition-colors`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 h-64 lg:h-96 rounded-2xl overflow-hidden border border-slate-700 relative group">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="h-12 w-12 bg-blue-900/40 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                  <p className="text-lg text-slate-400 leading-relaxed">{service.desc}</p>
                  
                  <div className="pt-4">
                    <Link href="/#contact" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-bold transition-all">
                      Request Implementation <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>
    </div>
  );
}