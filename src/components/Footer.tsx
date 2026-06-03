export function Footer() {
  return (
    <footer className="bg-black border-t px-4 md:px-8 py-10" style={{ borderColor: 'rgba(222,219,200,0.08)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <p className="text-primary font-medium text-sm mb-1">GrowVera</p>
          <p className="text-gray-400 text-xs">More local clients. Less guesswork.</p>
        </div>

        <div className="flex flex-col gap-1 text-right">
          <a
            href="mailto:admin@growvera.com.au"
            className="text-primary/60 hover:text-primary text-xs transition-colors"
          >
            admin@growvera.com.au
          </a>
          <p className="text-gray-400 text-xs">Sydney, Australia · ABN: 50 329 139 726</p>
          <p className="text-gray-400 text-xs">© 2026 GrowVera · Results may vary</p>
        </div>
      </div>
    </footer>
  )
}
