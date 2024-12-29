"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronLeft } from 'lucide-react';

const PaymentLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const paymentLinks = {
    venmo: "suzi-chang",
    paypal: "mspink",
    cashapp: "chinggiskhan",
    zelle: "mspink"
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.08
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const heartVariants = {
    idle: {
      scale: 1,
      filter: "drop-shadow(0 0 8px rgba(255, 105, 180, 0.5))"
    },
    hover: {
      scale: 1.05,
      filter: "drop-shadow(0 0 12px rgba(255, 105, 180, 0.8))",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const paymentOptions = [
    {
      name: 'Venmo',
      color: 'from-blue-400 to-blue-600',
      handle: paymentLinks?.venmo,
      url: `venmo://paycharge?txn=pay&recipients=${paymentLinks?.venmo}`,
      description: 'Sacred V-Offering'
    },
    {
      name: 'PayPal',
      color: 'from-indigo-600 to-indigo-800',
      handle: paymentLinks?.paypal,
      url: `https://paypal.me/${paymentLinks?.paypal}`,
      description: 'PayPal Your Devotion'
    },
    {
      name: 'Cash App',
      color: 'from-emerald-400 to-emerald-600',
      handle: paymentLinks?.cashapp,
      url: `https://cash.app/$${paymentLinks?.cashapp}`,
      description: 'Green Light to Grace'
    },
    {
      name: 'Zelle',
      color: 'from-purple-500 to-purple-700',
      handle: paymentLinks?.zelle,
      url: `https://enroll.zellepay.com/${paymentLinks?.zelle}`,
      description: 'Zellestial Tribute'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md relative">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="heart"
              className="flex justify-center"
              initial="idle"
              whileHover="hover"
              variants={heartVariants}
              onClick={() => setIsOpen(true)}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-2 bg-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-300 animate-pulse"></div>
                <Heart 
                  size={88} 
                  className="text-pink-500 relative transform transition-all duration-300"
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="payment-options"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl"></div>
              </div>

              <motion.div 
                className="relative bg-black/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-white/90 text-lg font-medium">Choose Your Divine Offering Path</h2>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="text-pink-500/80 hover:text-pink-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                </div>

                <div className="space-y-3">
                  {paymentOptions.map((option) => (
                    <motion.a
                      key={option.name}
                      href={option.url}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full p-4 rounded-xl bg-gradient-to-r ${option.color} 
                                shadow-lg transform transition-all duration-300 cursor-pointer
                                border border-white/10 relative overflow-hidden group`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 
                                    transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <div className="relative flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center
                                      border border-white/20 shadow-inner">
                          <span className="text-lg font-semibold text-white">{option.name[0]}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white text-lg font-medium">{option.name}</h3>
                          <p className="text-white/70 text-sm">{option.description}</p>
                        </div>
                        <div className="text-white/50 text-sm">@{option.handle}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PaymentLinks;