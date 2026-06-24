"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function FadeIn({ children, delay = 0, className }: AnimatedProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({
  children,
  delay = 0,
  className,
}: AnimatedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
