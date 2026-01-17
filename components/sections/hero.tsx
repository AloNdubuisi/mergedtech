"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroImage from "../layout/hero-image";

export default function Hero() {
  return (
    <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-400 text-sm font-semibold">🚀 SaaS Product & Developer Community</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build Better.
              <span className="text-emerald-400"> Learn Faster.</span>
              <br />Grow Together.
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join our thriving community of developers. Access cutting-edge SaaS tools, 
              expert mentorship, and collaborative learning experiences that accelerate your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 shadow-lg">
                Start Your Journey <ArrowRight size={20} />
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Explore Community
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-slate-800">
              <div>
                <div className="text-3xl font-bold text-emerald-400">5K+</div>
                <div className="text-slate-400 text-sm mt-1">Active Developers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">100+</div>
                <div className="text-slate-400 text-sm mt-1">Expert Mentors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">24/7</div>
                <div className="text-slate-400 text-sm mt-1">Support Available</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Single Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}