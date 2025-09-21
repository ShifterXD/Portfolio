import { Header } from '@/components/header'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-3"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="block">Designer</span>
                <span className="block text-primary">&lt;coder&gt;</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Hi, I'm Pavel Tagiev — a 17-year-old vibe-coder and AI enthusiast
                exploring the intersection of design and technology.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-4"
              >
                <a
                  href="/portfolio"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                >
                  View Work
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 border rounded-full hover:bg-muted transition-colors"
                >
                  Get in Touch
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-primary-foreground opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/20 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 