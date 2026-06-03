'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/carte', label: 'Carte' },
  { href: '/commande', label: 'Commander' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group" aria-label="Bistro Verde - Accueil">
          <span className="text-2xl sm:text-3xl transition-transform group-hover:rotate-12">🌿</span>
          <div className="leading-tight">
            <span className="font-nunito font-extrabold text-vert text-lg sm:text-xl block">Bistro Verde</span>
            <p className="text-[10px] sm:text-xs text-gray-400 font-inter">Bio · Local · Végétarien</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                className={`font-inter text-sm font-medium transition-colors relative ${active ? 'text-vert' : 'text-gray-600 hover:text-vert'}`}
              >
                {l.label}
                {active && <span className="absolute left-0 -bottom-1.5 w-full h-0.5 bg-vert rounded-full" />}
              </a>
            )
          })}
          <a href="/commande" className="btn-vert text-sm">Commander</a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-vert rounded-full hover:bg-vert/5 transition-colors"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          <span className={`absolute block w-6 h-0.5 bg-vert transition-all duration-300 ${open ? 'rotate-45' : '-translate-y-2'}`} />
          <span className={`absolute block w-6 h-0.5 bg-vert transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`absolute block w-6 h-0.5 bg-vert transition-all duration-300 ${open ? '-rotate-45' : 'translate-y-2'}`} />
        </button>
      </div>

      <div className={`md:hidden fixed inset-x-0 top-[60px] bg-white border-t border-vert/10 shadow-lg transition-all duration-300 origin-top ${open ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}>
        <nav className="px-6 py-6 flex flex-col gap-1">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                className={`px-4 py-3 rounded-xl font-medium transition-colors ${active ? 'bg-vert/10 text-vert' : 'text-gray-700 hover:bg-vert/5 hover:text-vert'}`}
              >
                {l.label}
              </a>
            )
          })}
          <a href="/commande" className="mt-3 btn-vert text-center">Commander en ligne</a>
        </nav>
      </div>
    </header>
  )
}
