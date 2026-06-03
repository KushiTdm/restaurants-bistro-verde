'use client'

import { useState } from 'react'
import { useGsapAnimations } from '../components/useGsapAnimations'
import { photos } from '../components/images'

const plats = [
  { id: 1, nom: 'Buddha Bowl Vert', categorie: 'salades', prix: 14, tags: ['vegan', 'gluten'], desc: 'Quinoa, avocat, edamame, carotte, betterave, graines de courge, sauce tahini-citron' },
  { id: 2, nom: 'Salade de Lentilles du Puy', categorie: 'salades', prix: 12, tags: ['vegan', 'gluten'], desc: 'Lentilles vertes du Puy AOP, tomates séchées, persil plat, vinaigrette moutarde à l\'ancienne' },
  { id: 3, nom: 'Risotto aux Champignons Sauvages', categorie: 'plats', prix: 16, tags: ['veggie'], desc: 'Arborio crémeux, cèpes et pleurotes de saison, parmesan AOP, huile de truffe, roquette fraîche' },
  { id: 4, nom: 'Curry de Lentilles Corail', categorie: 'plats', prix: 13, tags: ['vegan'], desc: 'Lentilles corail, lait de coco, épinards, tomates cerises, garam masala, naan fait maison' },
  { id: 5, nom: 'Tarte Rustique Courgettes & Chèvre', categorie: 'plats', prix: 14, tags: ['veggie'], desc: 'Pâte brisée à l\'huile d\'olive, courgettes de saison, chèvre frais, thym, miel de lavande' },
  { id: 6, nom: 'Poke Bowl Tropical', categorie: 'plats', prix: 15, tags: ['vegan', 'gluten'], desc: 'Riz sushi, mangue, ananas, edamame, concombre, avocat, sauce ponzu maison, graines de sésame' },
  { id: 7, nom: 'Falafels Maison & Houmous', categorie: 'plats', prix: 12, tags: ['vegan'], desc: 'Falafels de pois chiches au four, houmous crémeux, taboulé de quinoa, pain pita complet' },
  { id: 8, nom: 'Soupe du Jour', categorie: 'soupes', prix: 8, tags: ['vegan', 'gluten'], desc: 'Potage de légumes de saison préparé chaque matin, croûtons à l\'ail, huile d\'olive de qualité' },
  { id: 9, nom: 'Velouté de Potimarron', categorie: 'soupes', prix: 9, tags: ['vegan', 'gluten'], desc: 'Potimarron rôti, lait de coco, gingembre frais, noix de muscade, graines de courge grillées' },
  { id: 10, nom: 'Brownie Vegan Noix de Cajou', categorie: 'desserts', prix: 7, tags: ['vegan'], desc: 'Chocolat noir 72%, noix de cajou, sirop d\'agave, huile de coco — sans lait, sans œufs' },
  { id: 11, nom: 'Tarte Tatin de Saison', categorie: 'desserts', prix: 8, tags: ['veggie'], desc: 'Fruit de saison caramélisé, pâte feuilletée pur beurre, crème fraîche locale' },
  { id: 12, nom: 'Smoothie Bowl Açaï', categorie: 'desserts', prix: 9, tags: ['vegan', 'gluten'], desc: 'Açaï, banane glacée, granola maison sans gluten, fruits frais, graines de chia, noix de coco' },
]

const categories = [
  { key: 'tous', label: 'Tous' },
  { key: 'salades', label: '🥗 Salades' },
  { key: 'soupes', label: '🍲 Soupes' },
  { key: 'plats', label: '🍽 Plats' },
  { key: 'desserts', label: '🍰 Desserts' },
]

const filtresAlim = [
  { key: 'vegan', label: '🌱 Vegan' },
  { key: 'veggie', label: '🥚 Végétarien' },
  { key: 'gluten', label: '🌾 Sans Gluten' },
]

export default function CartePage() {
  const [categorie, setCategorie] = useState('tous')
  const [filtresActifs, setFiltresActifs] = useState<string[]>([])
  useGsapAnimations([categorie, filtresActifs])

  const toggleFiltre = (f: string) => {
    setFiltresActifs((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f])
  }

  const platsFiltres = plats.filter((p) => {
    const catOk = categorie === 'tous' || p.categorie === categorie
    const filtreOk = filtresActifs.length === 0 || filtresActifs.every((f) => p.tags.includes(f))
    return catOk && filtreOk
  })

  return (
    <div className="bg-fond min-h-screen">
      {/* Hero carte */}
      <div className="relative py-16 sm:py-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div data-parallax="0.25" className="parallax-img absolute inset-0" style={{
            backgroundImage: `url(${photos.heroMain})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.15)',
          }} />
          <div className="absolute inset-0 bg-gradient-to-br from-vert-fonce/95 via-vert/90 to-vert/85" />
          <div className="absolute inset-0 bg-black/15" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="gsap-fade-up font-nunito font-extrabold text-white text-4xl sm:text-5xl mb-3">Notre Carte</h1>
          <p className="gsap-fade-up text-green-100 text-sm sm:text-base">100% végétarien · Bio certifié · Produits locaux</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        {/* Filtres catégories */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-4 sm:mb-6">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategorie(c.key)}
              className={`px-4 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all ${
                categorie === c.key
                  ? 'bg-vert text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-vert hover:text-vert'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Filtres alimentaires */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-10">
          {filtresAlim.map((f) => (
            <button
              key={f.key}
              onClick={() => toggleFiltre(f.key)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all ${
                filtresActifs.includes(f.key)
                  ? 'bg-orange text-white font-semibold shadow-md scale-105'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-orange hover:text-orange'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Compteur résultats */}
        <p className="text-center text-gray-400 text-xs sm:text-sm mb-6">
          {platsFiltres.length} plat{platsFiltres.length > 1 ? 's' : ''} {platsFiltres.length > 1 ? 'disponibles' : 'disponible'}
        </p>

        {/* Grille de plats */}
        {platsFiltres.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🤷</div>
            <p className="text-gray-400">Aucun plat ne correspond à vos critères.</p>
            <button onClick={() => { setCategorie('tous'); setFiltresActifs([]) }} className="mt-4 text-vert font-semibold text-sm hover:underline">
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div key={categorie + filtresActifs.join(',')} className="gsap-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {platsFiltres.map((plat) => (
              <div key={plat.id} className="gsap-stagger-item card-plat group">
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img src={photos.plat[plat.id]} alt={plat.nom} className="img-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    {plat.tags.includes('vegan') && <span className="badge-vegan shadow-md">🌱 Vegan</span>}
                    {plat.tags.includes('veggie') && <span className="badge-veggie shadow-md">🥚 Végé</span>}
                    {plat.tags.includes('gluten') && <span className="badge-gluten shadow-md">🌾 S. Gluten</span>}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-nunito font-bold text-gray-800 text-base mb-2">{plat.nom}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{plat.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-nunito font-bold text-vert text-xl">{plat.prix} €</span>
                    <a href="/commande" className="text-xs bg-vert/10 text-vert px-3 py-1.5 rounded-full hover:bg-vert hover:text-white transition-colors font-semibold">
                      + Ajouter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
