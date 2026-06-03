'use client'

import { useState } from 'react'
import { photos } from '../components/images'

type PlatMenu = {
  id: number
  nom: string
  prix: number
  categorie: string
}

const menuCommande: PlatMenu[] = [
  { id: 1, nom: 'Buddha Bowl Vert', prix: 14, categorie: 'Salades' },
  { id: 2, nom: 'Salade de Lentilles du Puy', prix: 12, categorie: 'Salades' },
  { id: 3, nom: 'Risotto aux Champignons', prix: 16, categorie: 'Plats' },
  { id: 4, nom: 'Curry de Lentilles Corail', prix: 13, categorie: 'Plats' },
  { id: 5, nom: 'Tarte Courgettes & Chèvre', prix: 14, categorie: 'Plats' },
  { id: 6, nom: 'Poke Bowl Tropical', prix: 15, categorie: 'Plats' },
  { id: 7, nom: 'Falafels Maison & Houmous', prix: 12, categorie: 'Plats' },
  { id: 9, nom: 'Velouté de Potimarron', prix: 9, categorie: 'Soupes' },
  { id: 10, nom: 'Brownie Vegan Cajou', prix: 7, categorie: 'Desserts' },
  { id: 11, nom: 'Tarte Tatin de Saison', prix: 8, categorie: 'Desserts' },
]

export default function CommandePage() {
  const [panier, setPanier] = useState<Record<number, number>>({})
  const [etape, setEtape] = useState<'selection' | 'confirmation'>('selection')

  const ajouter = (id: number) => setPanier((p) => ({ ...p, [id]: (p[id] || 0) + 1 }))
  const retirer = (id: number) => setPanier((p) => {
    const next = { ...p }
    if (next[id] > 1) next[id]--
    else delete next[id]
    return next
  })

  const total = Object.entries(panier).reduce((acc, [id, qty]) => {
    const plat = menuCommande.find((p) => p.id === Number(id))
    return acc + (plat ? plat.prix * qty : 0)
  }, 0)

  const nbArticles = Object.values(panier).reduce((a, b) => a + b, 0)

  const panierItems = Object.entries(panier)
    .map(([id, qty]) => ({ plat: menuCommande.find((p) => p.id === Number(id))!, qty }))
    .filter((i) => i.plat)

  if (etape === 'confirmation') {
    return (
      <div className="min-h-screen bg-fond flex items-center justify-center py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 text-center">
          <div className="text-6xl sm:text-7xl mb-6 animate-bounce">🎉</div>
          <h1 className="font-nunito font-extrabold text-vert text-3xl sm:text-4xl mb-4">Commande envoyée !</h1>
          <p className="text-gray-500 mb-8 text-sm sm:text-base">Merci pour votre commande. Elle sera prête dans environ 20 minutes. Vous recevrez une confirmation par SMS.</p>
          <div className="bg-white rounded-2xl p-5 sm:p-6 text-left mb-8 shadow-sm">
            {panierItems.map(({ plat, qty }) => (
              <div key={plat.id} className="flex justify-between py-2 border-b border-gray-100 text-sm">
                <span className="flex items-center gap-2">
                  <img src={photos.plat[plat.id]} alt="" className="w-8 h-8 rounded-full object-cover" />
                  {qty}× {plat.nom}
                </span>
                <span className="font-semibold text-vert whitespace-nowrap">{(plat.prix * qty).toFixed(2)} €</span>
              </div>
            ))}
            <div className="flex justify-between pt-4 font-bold text-vert">
              <span>Total</span>
              <span>{total.toFixed(2)} €</span>
            </div>
          </div>
          <button onClick={() => { setPanier({}); setEtape('selection') }} className="btn-vert">
            Nouvelle commande
          </button>
        </div>
      </div>
    )
  }

  const categories = Array.from(new Set(menuCommande.map((p) => p.categorie)))

  return (
    <div className="bg-fond min-h-screen">
      <div className="relative py-10 sm:py-12 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${photos.heroVeg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          <div className="absolute inset-0 bg-gradient-to-br from-vert-fonce/95 via-vert/90 to-vert-clair/80" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-nunito font-extrabold text-white text-3xl sm:text-4xl">Commander en ligne</h1>
          <p className="text-green-100 mt-2 text-sm sm:text-base">Récupérez votre commande sur place ou faites-vous livrer</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid lg:grid-cols-3 gap-8">
        {/* Menu */}
        <div className="lg:col-span-2 space-y-8 sm:space-y-10">
          {categories.map((cat) => (
            <div key={cat}>
              <h2 className="font-nunito font-bold text-vert text-xl sm:text-2xl mb-4 pb-2 border-b-2 border-vert/20">{cat}</h2>
              <div className="space-y-3">
                {menuCommande.filter((p) => p.categorie === cat).map((plat) => (
                  <div key={plat.id} className="bg-white rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md transition-shadow">
                    <img src={photos.plat[plat.id]} alt={plat.nom} className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0" loading="lazy" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{plat.nom}</h3>
                      <p className="text-vert font-bold text-sm sm:text-base">{plat.prix} €</p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                      {panier[plat.id] ? (
                        <>
                          <button onClick={() => retirer(plat.id)} aria-label="Retirer" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition-colors font-bold">−</button>
                          <span className="font-bold text-gray-800 w-4 text-center text-sm">{panier[plat.id]}</span>
                          <button onClick={() => ajouter(plat.id)} aria-label="Ajouter" className="w-8 h-8 bg-vert rounded-full flex items-center justify-center text-white hover:bg-vert-clair transition-colors font-bold">+</button>
                        </>
                      ) : (
                        <button onClick={() => ajouter(plat.id)} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-vert/10 text-vert rounded-full text-xs sm:text-sm font-semibold hover:bg-vert hover:text-white transition-colors whitespace-nowrap">
                          Ajouter
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Panier */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 lg:sticky lg:top-24">
            <h2 className="font-nunito font-bold text-gray-800 text-lg sm:text-xl mb-6 flex items-center gap-2">
              Mon Panier
              {nbArticles > 0 && <span className="bg-vert text-white text-xs rounded-full px-2 py-0.5">{nbArticles}</span>}
            </h2>
            {panierItems.length === 0 ? (
              <div className="text-center py-10 text-gray-400">
                <div className="text-5xl mb-3">🛒</div>
                <p className="text-sm">Votre panier est vide</p>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {panierItems.map(({ plat, qty }) => (
                    <div key={plat.id} className="flex justify-between text-sm gap-2">
                      <span className="text-gray-600 truncate">{qty}× {plat.nom}</span>
                      <span className="font-semibold text-gray-800 whitespace-nowrap">{(plat.prix * qty).toFixed(2)} €</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 mb-6 flex justify-between font-bold text-vert text-lg">
                  <span>Total</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
                <button onClick={() => setEtape('confirmation')} className="w-full btn-vert text-center">
                  Commander ({total.toFixed(2)} €)
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
