export function Navbar() {
  const links = ['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries']
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
      <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
        <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
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
    </div>
  )
}
