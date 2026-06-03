export function Navbar() {
  const links = ['How It Works', 'Services', 'Guarantee']
  return (
    <div className="absolute top-0 left-0 right-0 z-20 flex items-start justify-between">
      {/* Logo */}
      <div className="bg-black rounded-br-2xl px-4 py-3 md:px-6">
        <span className="text-primary font-medium text-sm tracking-tight">GrowVera</span>
      </div>

      {/* Nav links — desktop only */}
      <nav className="hidden md:block bg-black rounded-b-2xl px-6 py-3 lg:px-10">
        <ul className="flex items-center gap-8 lg:gap-12">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs lg:text-sm transition-colors"
                style={{ color: 'rgba(225, 224, 204, 0.7)' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E1E0CC')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(225, 224, 204, 0.7)')}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Free Audit CTA */}
      <a
        href="#free-audit"
        className="bg-primary rounded-bl-2xl px-4 py-3 md:px-6 text-black font-medium text-xs md:text-sm whitespace-nowrap"
      >
        Free Audit
      </a>
    </div>
  )
}
