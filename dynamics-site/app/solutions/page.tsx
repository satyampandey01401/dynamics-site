'use client';

import React from 'react';
import { Database, ArrowLeft, Target, Shield, Users } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';

export default function AboutPage() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeUpStagger = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
  const slideRight = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden selection:bg-blue-600 selection:text-white">
      
      {/* Frosted Glass Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-slate-950 overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 flex items-center border-b border-slate-800">
        <div className="absolute top-0 right-0 w-full max-w-2xl h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Growth.</span>
          </h1>
        </motion.div>
      </section>

      {/* The Origin Story */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideRight} className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Bridging the gap between software and strategy.</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>Founded in Noida, Satyam Panndey Dynamics Solutions was built on a singular premise: enterprise software should not be a bottleneck; it should be an accelerator.</p>
              <p>We saw too many B2B companies struggling with out-of-the-box Microsoft deployments that didn't fit their actual workflows. Lead generation efforts were lost in messy databases, and legacy ERP migrations were terrifying tasks that kept CEOs awake at night.</p>
              <p>We set out to change that by operating not just as developers, but as <strong>Technical Sales Engineers</strong>. We map your revenue goals first, and architect the software second.</p>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl p-2 bg-slate-50 border border-slate-100">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team collaborating in Noida office" className="w-full h-auto rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Engineering Pillars */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Engineering Pillars</h2>
            <p className="text-xl text-slate-600">The standards that dictate every line of code we write.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeUpStagger} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">ROI-Driven Design</h3>
              <p className="text-slate-600">If a custom dashboard or API integration doesn't actively save time or increase your closing rate, we don't build it.</p>
            </motion.div>

            <motion.div variants={fadeUpStagger} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-slate-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Zero-Data-Loss</h3>
              <p className="text-slate-600">Data integrity is non-negotiable. Our strict staging and testing protocols ensure secure, flawless database migrations.</p>
            </motion.div>

            <motion.div variants={fadeUpStagger} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Radical Transparency</h3>
              <p className="text-slate-600">No hidden developer fees or confusing tech jargon. We act as an extension of your own internal engineering team.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}