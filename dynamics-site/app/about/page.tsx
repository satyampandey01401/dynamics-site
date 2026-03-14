'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code2, Target, Users2, Zap, ArrowRight, MapPin } from 'lucide-react';
import Navbar from '../Navbar';
import Link from 'next/link';

export default function About() {
  const fadeUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  return (
    <div className="min-h-screen bg-[#020817] text-slate-300 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 relative z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020817] to-[#020817] -z-10"></div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Bridging the gap between <span className="text-blue-500">Sales Logic</span> and <span className="text-cyan-400">Code.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Satyam Panndey Dynamics isn't just a development agency. We are business architects based in Noida, engineering CRM and Full Stack solutions that directly impact your bottom line.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Bento Box */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <motion.div variants={fadeUp} className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-all"></div>
              <Target className="h-10 w-10 text-blue-500 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Our DNA</h2>
              <p className="text-slate-400 leading-relaxed max-w-xl">
                Having deep roots in Lead Generation and Tech Sales, we understand that software is useless if it doesn't generate revenue. We build custom Dynamics 365 and Full Stack architectures designed to accelerate sales cycles.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-slate-900/50 border border-slate-800 p-10 rounded-3xl backdrop-blur-sm flex flex-col justify-center">
              <MapPin className="h-10 w-10 text-cyan-500 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-2">HQ</h2>
              <p className="text-slate-400">Noida, UP<br/>Serving Global Enterprise Clients</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-slate-900/50 border border-slate-800 p-10 rounded-3xl backdrop-blur-sm">
              <Code2 className="h-10 w-10 text-indigo-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Full Stack Expertise</h3>
              <p className="text-slate-400 text-sm leading-relaxed">From Java backends to React frontends, we write clean, scalable code that integrates perfectly with enterprise CRM systems.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-slate-900/50 border border-slate-800 p-10 rounded-3xl backdrop-blur-sm">
              <Zap className="h-10 w-10 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Agile Delivery</h3>
              <p className="text-slate-400 text-sm leading-relaxed">No bloatware. We deploy optimized solutions fast, ensuring your team experiences zero downtime during transitions.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-slate-900/50 border border-slate-800 p-10 rounded-3xl backdrop-blur-sm">
              <Users2 className="h-10 w-10 text-pink-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Client-Centric</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We don't hand over a manual and leave. We train your staff and provide ongoing technical architecture support.</p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Team / Founder Section with Image */}
      <section className="py-24 border-t border-slate-800/50 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Leadership</span>
              <h2 className="text-4xl font-black text-white mb-6">Built by Tech Sales Engineers.</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Founded by Satyam Panndey, our team brings a unique blend of hardcore computer science logic and aggressive sales strategy. We don't just write code; we engineer scalable business growth.
              </p>
              <Link href="/#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white w-fit px-8 py-4 rounded-lg font-bold transition-all">
                Work With Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/2 min-h-[400px] relative">
              {/* Note: This is a professional placeholder image representing a modern tech founder/office */}
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop" alt="Tech Office" className="absolute inset-0 w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}