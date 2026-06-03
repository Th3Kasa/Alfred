const industries = [
  'Dental Practices',
  'Med Spas',
  'NDIS Providers',
  'Physio Clinics',
  'Law Firms',
  'Accounting Firms',
  'Trades',
  'Childcare Centres',
  'Podiatry Clinics',
  'Chiropractic Practices',
]

export function Industries() {
  const doubled = [...industries, ...industries]

  return (
    <section className="bg-black py-8 overflow-hidden">
      <p className="text-center text-primary text-[10px] uppercase tracking-widest mb-6 px-4">
        Industries we serve
      </p>
      <div className="relative">
        <div className="flex gap-3 animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center px-5 py-2 rounded-full border text-primary/60 text-xs shrink-0"
              style={{ borderColor: 'rgba(222,219,200,0.12)' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
