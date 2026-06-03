import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Bistro Verde — Cuisine Bio & Végétarienne',
  description: 'Restaurant végétarien et bio à Lyon. Produits locaux, de saison, cuisinés avec passion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-fond overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <footer className="bg-vert text-white pt-16 pb-8 mt-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌿</span>
                <h3 className="font-nunito font-bold text-xl">Bistro Verde</h3>
              </div>
              <p className="text-green-100 text-sm leading-relaxed mb-4">
                Manger bien, c'est manger local, de saison et avec amour. Notre engagement pour une cuisine responsable depuis 2019.
              </p>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.4.56.22.96.48 1.38.9.42.42.68.82.9 1.38.15.42.35 1.06.4 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.4 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.15-1.06.35-2.23.4-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.4a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.15-.42-.35-1.06-.4-2.23C2.21 15.6 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.4-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.15 1.06-.35 2.23-.4C8.42 2.2 8.8 2.2 12 2.2zm0 5.6a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zm0 6.93a2.73 2.73 0 1 1 0-5.46 2.73 2.73 0 0 1 0 5.46zm5.35-7.1a.98.98 0 1 1-1.96 0 .98.98 0 0 1 1.96 0z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9.2 21.5v-8h-2.7v-3.2h2.7V7.7c0-2.7 1.6-4.2 4.1-4.2 1.2 0 2.4.2 2.4.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.7v2h2.9l-.5 3.2h-2.4v8H9.2z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-nunito font-bold mb-4">Horaires</h4>
              <ul className="text-green-100 text-sm space-y-1.5">
                <li>Lun – Ven : 11h30 – 15h</li>
                <li className="pl-12">18h30 – 22h</li>
                <li>Sam – Dim : 11h30 – 22h30</li>
              </ul>
            </div>
            <div>
              <h4 className="font-nunito font-bold mb-4">Nous contacter</h4>
              <ul className="text-green-100 text-sm space-y-1.5">
                <li>15 Rue de la République, Lyon 69001</li>
                <li><a href="tel:+33478000000" className="hover:text-white transition-colors">+33 4 78 XX XX XX</a></li>
                <li><a href="mailto:bonjour@bistroverde.fr" className="hover:text-white transition-colors">bonjour@bistroverde.fr</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 mt-10 pt-8 border-t border-white/20 text-center text-green-100 text-sm">
            © 2025 Bistro Verde — Cuisine qui fait du bien
          </div>
        </footer>
      </body>
    </html>
  )
}
