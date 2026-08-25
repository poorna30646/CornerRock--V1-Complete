"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const WHATSAPP_MESSAGE = "Hi, I'm interested in discussing a project with Corner Rock.";

function openWhatsApp() {
  if (!WHATSAPP_NUMBER) {
    console.error("[whatsapp] NEXT_PUBLIC_WHATSAPP_NUMBER is not configured.");
    return;
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

export function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    openWhatsApp();
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      disabled={!WHATSAPP_NUMBER}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-white shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline text-sm font-medium">Chat on WhatsApp</span>
    </motion.button>
  );
}

export function WhatsAppContactSection() {
  const handleWhatsAppClick = () => {
    openWhatsApp();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-green-200 bg-green-50 p-6 sm:flex-row sm:justify-between"
    >
      <div>
        <p className="text-sm font-medium text-green-900">
          Prefer to chat? Message us on WhatsApp
        </p>
        <p className="text-xs text-green-800">
          Get instant replies from our team
        </p>
      </div>
      <button
        onClick={handleWhatsAppClick}
        disabled={!WHATSAPP_NUMBER}
        className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-600 transition-colors whitespace-nowrap"
      >
        <MessageCircle size={16} />
        Message on WhatsApp
      </button>
    </motion.div>
  );
}
