import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Free Audit Request — ${form.business}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\nPhone: ${form.phone}`
    )
    window.location.href = `mailto:admin@growvera.com.au?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="free-audit" className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <motion.p
          className="text-primary text-[10px] uppercase tracking-widest mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          No Obligation
        </motion.p>

        <motion.h2
          className="text-primary text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Start with a free audit.
        </motion.h2>

        <motion.p
          className="text-gray-500 text-sm leading-relaxed mb-10 max-w-lg mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          We'll look at how your business appears on Google right now — for free. You'll see exactly
          what's holding you back and what it would take to fix it. New agency — you get the
          founder's direct attention, not a junior account manager.
        </motion.p>

        {submitted ? (
          <motion.p
            className="text-primary text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Your email client should have opened. If not, email us at{' '}
            <a href="mailto:admin@growvera.com.au" className="underline">
              admin@growvera.com.au
            </a>
          </motion.p>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 text-left"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-[#101010] border rounded-xl px-4 py-3 text-primary placeholder-gray-600 text-sm outline-none focus:border-primary/40 transition-colors"
                style={{ borderColor: 'rgba(222,219,200,0.1)' }}
              />
              <input
                type="text"
                placeholder="Business name"
                required
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                className="bg-[#101010] border rounded-xl px-4 py-3 text-primary placeholder-gray-600 text-sm outline-none focus:border-primary/40 transition-colors"
                style={{ borderColor: 'rgba(222,219,200,0.1)' }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="email"
                placeholder="Email address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-[#101010] border rounded-xl px-4 py-3 text-primary placeholder-gray-600 text-sm outline-none focus:border-primary/40 transition-colors"
                style={{ borderColor: 'rgba(222,219,200,0.1)' }}
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-[#101010] border rounded-xl px-4 py-3 text-primary placeholder-gray-600 text-sm outline-none focus:border-primary/40 transition-colors"
                style={{ borderColor: 'rgba(222,219,200,0.1)' }}
              />
            </div>
            <button
              type="submit"
              className="group flex items-center gap-2 bg-primary rounded-full pl-6 pr-2 py-1.5 w-fit mt-2 mx-auto hover:gap-3 transition-all duration-300"
            >
              <span className="font-medium text-sm text-black">Get my free audit</span>
              <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" style={{ color: '#DEDBC8' }} />
              </div>
            </button>
          </motion.form>
        )}

        <motion.p
          className="text-gray-700 text-[10px] mt-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Takes 60 seconds · No lock-in beyond 2 months · Custom quote after audit
        </motion.p>
      </div>
    </section>
  )
}
