import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react"; // icon Instagram

// Komponen SVG TikTok
const TikTokIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="currentColor"
  >
    <path d="M41,17.5c-3.4,0-6.5-1.1-9-3V28c0,6.6-5.4,12-12,12S8,34.6,8,28s5.4-12,12-12c0.3,0,0.7,0,1,0.1v6.2
      c-0.3,0-0.7-0.1-1-0.1c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6V4h6c0,0,0,0,0,0c0,3.9,3.1,7,7,7c0,0,0,0,0,0V17.5z" />
  </svg>
);

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-12 shadow-inner"
    >
      <div className="container mx-auto px-6 py-8 text-center space-y-2">
        <h2 className="text-lg font-bold text-gray-900">
          Desa Candibinangun
        </h2>
        <p className="text-sm font-medium text-gray-600">
          KKN 14 UYP 2025 – Kampung Tape
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-3">
          {/* Instagram Link */}
          <motion.a
            href="https://www.instagram.com/kkn14.candibinangun?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // ganti dengan link IG asli
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 font-medium text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Instagram size={16} />
            Instagram
          </motion.a>

          {/* TikTok Link */}
          <motion.a
            href="https://www.tiktok.com/@kkn.candibinangun?is_from_webapp=1&sender_device=pc" // ganti dengan link TikTok asli
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-800 font-medium text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <TikTokIcon size={16} />
            TikTok
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
