'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-sm z-40 border-b"
    >
      <div className="container h-full flex items-center justify-between">
        <Link href="/" className="relative group">
          <motion.div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-mono text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            PT
          </motion.div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            Home
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: '/about', label: 'About' },
            { href: '/journey', label: 'Journey' },
            { href: '/hobbies', label: 'Hobbies' },
            { href: '/portfolio', label: 'Portfolio' },
            { href: '/blog', label: 'Blog' },
            { href: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  )
} 