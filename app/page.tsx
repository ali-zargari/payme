'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [tapCount, setTapCount] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  // Using PayPal.me with your username
  const paymentLink = "https://paypal.me/bk4yz/5"
  
  useEffect(() => {
    if (tapCount === 2 && !isProcessing) {
      setIsProcessing(true)
      setTimeout(() => {
        setShowSuccess(true)
        setTimeout(() => {
          window.open(paymentLink, '_blank')
          setTimeout(() => {
            setShowModal(false)
            setShowSuccess(false)
            setIsProcessing(false)
            setTapCount(0)
          }, 500)
        }, 1500)
      }, 2000)
    }
    
    if (tapCount > 0) {
      const timer = setTimeout(() => setTapCount(0), 1000)
      return () => clearTimeout(timer)
    }
  }, [tapCount, isProcessing])
  
  const handleTap = () => {
    if (!isProcessing) {
      setTapCount(prev => prev + 1)
    }
  }
  
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Totally Legitimate App Store
        </h1>
        
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors"
        >
          Unlock Premium Feature
        </button>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-t-3xl p-6 transform transition-transform duration-300 animate-slide-up">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-3xl shadow-lg">
                💳
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Developer Support</h2>
              <p className="text-gray-500 mt-2">One-time contribution</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-900">One-Time Purchase</p>
                  <p className="text-sm text-gray-500">Best value!</p>
                </div>
                <p className="text-2xl font-bold text-gray-900">$5.00</p>
              </div>
            </div>
            
            <button
              onClick={handleTap}
              disabled={isProcessing || showSuccess}
              className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 relative overflow-hidden ${
                showSuccess 
                  ? 'bg-green-500 text-white' 
                  : isProcessing
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-900 text-white active:scale-95'
              }`}
            >
              {showSuccess ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  Payment Complete
                </span>
              ) : isProcessing ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-center gap-2">
                    <span>Pay</span>
                  </div>
                  <div className="text-xs mt-1 opacity-70">
                    {tapCount === 0 ? 'Double-Click to Pay' : tapCount === 1 ? 'Click Once More' : ''}
                  </div>
                </div>
              )}
              
              {tapCount === 1 && !isProcessing && (
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              )}
            </button>
            
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-3 py-3 text-gray-500 font-medium"
            >
              Cancel
            </button>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure • Instant • Powered by Cosmic Energy</span>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </main>
  )
}