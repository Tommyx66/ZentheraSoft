"use client"
import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-zenthera-dark flex items-center justify-center z-50">
      <motion.div
        className="text-white text-3xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        ZentheraSoft
      </motion.div>
    </div>
  )
}
