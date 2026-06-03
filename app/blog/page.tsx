'use client'

import { useEffect, useState } from 'react'
import { useGsapAnimations } from '../components/useGsapAnimations'
import { photos } from '../components/images'

type Article = {
  id: number
  titre: string
  extrait: string
  contenu: string
  date: string
  temps: string
  categorie: string
  auteur: string
  tags: string[]
}

const articles: Article[] = [
  {
    id: 1,
    titre: 'Les Légumineuses : Superstars de la Cuisine Végétarienne',
    extrait: 'Riches en protéines, fibres et minéraux, les légumineuses sont la pierre angulaire d\'une alimentation végétarienne équilibrée. Lentilles, pois chiches, haricots… découvrez comment les préparer pour en tirer le meilleur.',
    contenu: `Les légumineuses constituent une formidable source de protéines végétales — jusqu'à 25 g pour 100 g de produit sec. Couplées à une céréale (riz, blé, quinoa), elles fournissent l'ensemble des acides aminés essentiels, exactement comme la viande.\n\nChez Bistro Verde, nous travaillons quatre familles principales : les lentilles (vertes du Puy, corail, noires Beluga), les pois chiches que nous transformons en houmous et falafels, les haricots (rouges, blancs, azukis) pour nos chilis et soupes, et les fèves de soja sous forme d'edamame ou de tofu fumé maison.\n\n**Notre conseil :** faites tremper vos légumineuses sèches une nuit, puis cuisez-les avec une feuille de laurier et un morceau d'algue kombu — vous gagnerez en digestibilité et en saveur.`,
    date: '12 mai 2025',
    temps: '5 min',
    categorie: 'Nutrition',
    auteur: 'Chef Camille',
    tags: ['Protéines végétales', 'Légumineuses', 'Nutrition'],
  },
  {
    id: 2,
    titre: 'Recette : Notre Curry de Lentilles Corail Maison',
    extrait: 'Plat star de notre carte depuis l\'ouverture, ce curry de lentilles corail est une recette à la fois simple, économique et ultra-gourmande. On vous livre tous nos secrets, de la sélection des épices à la cuisson parfaite.',
    contenu: `**Pour 4 personnes — 30 minutes**\n\n**Ingrédients :** 300 g de lentilles corail, 1 oignon, 2 gousses d'ail, 1 morceau de gingembre frais (2 cm), 1 boîte de tomates concassées, 400 ml de lait de coco, 200 g d'épinards frais, 2 c. à café de garam masala, 1 c. à café de curcuma, 1 c. à café de cumin moulu, huile d'olive, sel, coriandre fraîche.\n\n**Préparation :** faites revenir l'oignon émincé dans l'huile d'olive jusqu'à translucidité. Ajoutez l'ail, le gingembre râpé et les épices, faites torréfier 30 secondes. Versez les tomates et le lait de coco, portez à ébullition. Ajoutez les lentilles rincées et laissez mijoter 15 minutes à feu doux. En fin de cuisson, incorporez les épinards et la coriandre.\n\n**Servir** avec du riz basmati et un naan tiède.`,
    date: '28 avril 2025',
    temps: '8 min',
    categorie: 'Recette',
    auteur: 'Chef Camille',
    tags: ['Recette', 'Vegan', 'Épices'],
  },
  {
    id: 3,
    titre: 'Manger Local en Ville : Nos 5 Producteurs Partenaires',
    extrait: 'Circuit court, saisons respectées, biodiversité préservée… Chez Bistro Verde, nous avons fait le choix d\'un approvisionnement local et raisonné. Portrait de cinq producteurs de la région lyonnaise qui font notre cuisine.',
    contenu: `**La Ferme des Monts d'Or** — Légumes bio cultivés à 15 km de Lyon. Jean-Marc et Sophie nous livrent chaque semaine paniers de saison.\n\n**Le Maraîcher Beaujolais** — Spécialiste des herbes aromatiques et fleurs comestibles. Une vraie palette de couleurs et de saveurs.\n\n**Fromagerie Étoile** — Famille Granjon, 3e génération. Saint-Marcellin, Saint-Félicien et chèvres frais qui parfument nos tartes.\n\n**Boulangerie Le Levain** — Pains au levain naturel cuits chaque matin. Leurs naans complets accompagnent notre curry signature.\n\n**Brasserie La Verte** — Bières bio brassées à 5 km. Notre IPA pression et notre saison sont une fierté locale.`,
    date: '10 avril 2025',
    temps: '6 min',
    categorie: 'Engagement',
    auteur: 'Équipe Bistro Verde',
    tags: ['Circuit court', 'Producteurs locaux', 'Agriculture bio'],
  },
]

export default function BlogPage() {
  const [open, setOpen] = useState<number | null>(null)
  useGsapAnimations()

  useEffect(() => {
    document.body.style.overflow = open !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const article = open !== null ? articles.find((a) => a.id === open) : null

  return (
    <div className="bg-fond min-h-screen">
      {/* Hero */}
      <div className="relative py-16 sm:py-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div data-parallax="0.25" className="parallax-img absolute inset-0" style={{
            backgroundImage: `url(${photos.blog[1]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.15)',
          }} />
          <div className="absolute inset-0 bg-gradient-to-br from-vert-fonce/95 via-vert/90 to-vert/85" />
          <div className="absolute inset-0 bg-black/15" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="gsap-fade-up font-nunito font-extrabold text-white text-4xl sm:text-5xl mb-3">Le Blog Vert</h1>
          <p className="gsap-fade-up text-green-100 text-sm sm:text-base">Recettes, nutrition, engagement — tout ce qui nous inspire</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Article vedette */}
        <article className="gsap-fade-up bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 mb-10 sm:mb-12">
          <div className="relative h-56 sm:h-72 overflow-hidden group">
            <img src={photos.blog[articles[0].id]} alt={articles[0].titre} className="img-cover transition-transform duration-700 group-hover:scale-105" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute top-4 left-4 bg-orange text-white text-xs font-bold px-3 py-1.5 rounded-full">À la une</span>
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 text-xs sm:text-sm">
              <span className="bg-vert/10 text-vert font-bold px-3 py-1 rounded-full">{articles[0].categorie}</span>
              <span className="text-gray-400">{articles[0].date}</span>
              <span className="text-gray-400">· {articles[0].temps} de lecture</span>
            </div>
            <h2 className="font-nunito font-extrabold text-gray-800 text-2xl sm:text-3xl mb-4 leading-tight">{articles[0].titre}</h2>
            <p className="text-gray-500 leading-relaxed mb-6">{articles[0].extrait}</p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2 flex-wrap">
                {articles[0].tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <button onClick={() => setOpen(articles[0].id)} className="btn-vert text-sm">Lire l&apos;article</button>
            </div>
          </div>
        </article>

        {/* Autres articles */}
        <div className="gsap-stagger grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {articles.slice(1).map((article) => (
            <article key={article.id} className="gsap-stagger-item bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group flex flex-col">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img src={photos.blog[article.id]} alt={article.titre} className="img-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3 text-xs">
                  <span className="bg-vert/10 text-vert font-bold px-3 py-1 rounded-full">{article.categorie}</span>
                  <span className="text-gray-400">{article.date}</span>
                </div>
                <h3 className="font-nunito font-bold text-gray-800 text-lg sm:text-xl mb-3 leading-snug">{article.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{article.extrait}</p>
                <button onClick={() => setOpen(article.id)} className="text-vert font-semibold text-sm hover:underline self-start">
                  Lire la suite →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA newsletter */}
        <div className="gsap-fade-up mt-12 sm:mt-16 bg-gradient-to-br from-vert to-vert-clair rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-vert-pale/20 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-nunito font-extrabold text-white text-2xl sm:text-3xl mb-3">Ne manquez rien !</h2>
            <p className="text-green-100 mb-6 text-sm sm:text-base">Recevez nos nouveaux articles, recettes et offres chaque semaine.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Merci ! Vous êtes inscrit·e à notre newsletter 🌿') }}>
              <input
                type="email"
                required
                placeholder="votre@email.com"
                className="flex-1 px-5 py-3 rounded-full bg-white text-gray-700 focus:outline-none text-sm"
              />
              <button type="submit" className="bg-white text-vert font-nunito font-bold px-6 py-3 rounded-full hover:bg-vert-pale transition-colors whitespace-nowrap text-sm">
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal article */}
      {article && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 animate-[fadeIn_0.2s_ease]"
          onClick={() => setOpen(null)}
        >
          <div
            className="bg-white w-full sm:max-w-2xl max-h-[95vh] sm:max-h-[90vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 sm:h-60 flex-shrink-0">
              <img src={photos.blog[article.id]} alt="" className="img-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <button
                onClick={() => setOpen(null)}
                aria-label="Fermer"
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 rounded-full flex items-center justify-center text-gray-700 hover:bg-white shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
                <span className="bg-vert/10 text-vert font-bold px-3 py-1 rounded-full">{article.categorie}</span>
                <span className="text-gray-400">{article.date} · {article.temps} de lecture</span>
                <span className="text-gray-400">· Par {article.auteur}</span>
              </div>
              <h2 className="font-nunito font-extrabold text-gray-800 text-2xl sm:text-3xl mb-5 leading-tight">{article.titre}</h2>
              <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 leading-relaxed space-y-4">
                {article.contenu.split('\n\n').map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, '<strong class="text-vert">$1</strong>') }} />
                ))}
              </div>
              <div className="mt-8 pt-6 border-t flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
    </div>
  )
}
