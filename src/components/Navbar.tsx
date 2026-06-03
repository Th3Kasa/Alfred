export function Navbar() {
  const links = ['How It Works', 'Services', 'Guarantee']
  return (
    <div className="absolute top-0 left-0 right-0 z-20 flex items-start justify-between">
      <div className="bg-black rounded-br-2xl md:rounded-br-3xl px-5 py-2.5 md:px-7">
        <span className="text-primary font-medium text-sm tracking-tight">GrowVera</span>
      </div>
      <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2.5 md:px-8">
        <ul className="flex items-center gap-4 sm:gap-6 md:gap-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[10px] sm:text-xs md:text-sm transition-colors"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E1E0CC')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(225, 224, 204, 0.8)')}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="#free-audit"
        className="bg-primary rounded-bl-2xl md:rounded-bl-3xl px-5 py-2.5 md:px-7 text-black font-medium text-[10px] sm:text-xs md:text-sm"
      >
        Free Audit
      </a>
    </div>
  )
}
