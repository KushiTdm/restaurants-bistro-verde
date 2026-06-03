'use client'

import { useGsapAnimations } from './components/useGsapAnimations'
import { photos } from './components/images'

const platsPopulaires = [
  {
    id: 1,
    nom: 'Buddha Bowl Vert',
    description: 'Quinoa, avocat, edamame, carotte râpée, betterave, graines de courge, sauce tahini-citron',
    prix: '14 €',
    tags: ['vegan', 'gluten'],
  },
  {
    id: 3,
    nom: 'Risotto aux Champignons Sauvages',
    description: 'Risotto crémeux, mélange de champignons de saison (cèpes, pleurotes, shiitake), parmesan AOP, huile de truffe',
    prix: '16 €',
    tags: ['veggie'],
  },
  {
    id: 4,
    nom: 'Curry de Lentilles Corail',
    description: 'Lentilles corail mijotées au lait de coco, épinards frais, tomates cerises, garam masala, naan fait maison',
    prix: '13 €',
    tags: ['vegan'],
  },
]

const temoignages = [
  { nom: 'Marie L.', texte: 'Enfin un resto végétarien où on sort rassasié et ravi ! Les saveurs sont incroyables.', note: 5 },
  { nom: 'Pierre D.', texte: 'Je suis omnivore mais je reviens chaque semaine. Le curry de lentilles est une merveille.', note: 5 },
  { nom: 'Sophie V.', texte: 'Cadre agréable, service souriant, et une carte qui change au fil des saisons. Un régal !', note: 5 },
]

const features = [
  { icon: '🌿', img: photos.featureBio, titre: 'Certifié Bio', desc: 'Tous nos produits sont certifiés Agriculture Biologique par Ecocert France.' },
  { icon: '🚜', img: photos.featureLocal, titre: 'Producteurs Locaux', desc: 'Nous travaillons avec 12 producteurs dans un rayon de 80 km autour de Lyon.' },
  { icon: '📅', img: photos.featureSaison, titre: 'De Saison', desc: 'Notre carte évolue chaque semaine selon les arrivages du marché Saint-Antoine.' },
]

const heroVegs = [photos.heroVeg1, photos.heroVeg2, photos.heroVeg3, photos.heroVeg4]

export default function HomePage() {
  useGsapAnimations()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
        {/* Fond avec image et overlay */}
        <div className="absolute inset-0">
          <div
            data-parallax="0.2"
            className="absolute inset-0 parallax-img"
            style={{
              backgroundImage: `url(${photos.heroMain})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.15)',
            }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(27,67,50,0.92) 0%, rgba(45,106,79,0.85) 50%, rgba(64,145,108,0.75) 100%)' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          <div className="text-white">
            <span className="gsap-fade-up inline-block bg-white/10 backdrop-blur-sm text-green-100 text-[11px] sm:text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase border border-white/20">
              🌱 100% Végétarien · Bio Certifié
            </span>
            <h1 className="gsap-fade-up font-nunito font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Manger Bien,<br />
              <span className="text-vert-pale">Vivre Mieux</span>
            </h1>
            <p className="gsap-fade-up text-green-100 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Chez Bistro Verde, nous cuisinons avec passion des produits biologiques et locaux pour vous offrir une alimentation savoureuse et responsable.
            </p>
            <div className="gsap-fade-up flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="/carte" className="inline-flex items-center justify-center bg-white text-vert font-nunito font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-center hover:bg-vert-pale hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5">
                Voir la carte
              </a>
              <a href="/commande" className="inline-flex items-center justify-center border-2 border-white text-white font-nunito font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-center hover:bg-white hover:text-vert transition-all duration-300 hover:-translate-y-0.5">
                Commander en ligne
              </a>
            </div>
          </div>

          {/* Grille de vignettes flottantes */}
          <div className="hidden md:grid grid-cols-2 gap-4 lg:gap-5">
            {heroVegs.map((src, i) => (
              <div
                key={i}
                className={`gsap-fade-up relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 ${
                  i === 0 ? 'float-anim' : i === 1 ? 'float-anim-2 mt-8' : i === 2 ? 'float-anim-3 -mt-4' : 'float-anim-4 mt-4'
                }`}
              >
                <img src={src} alt="" className="img-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-vert/30 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* Indicateur scroll */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hidden sm:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-fond-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="gsap-fade-up font-nunito font-extrabold text-vert text-3xl sm:text-4xl mb-3">Notre Engagement</h2>
            <p className="gsap-fade-up text-gray-500 max-w-xl mx-auto">Une cuisine qui respecte la terre, les producteurs et les saisons.</p>
          </div>
          <div className="gsap-stagger grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.titre} className="gsap-stagger-item bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <img src={f.img} alt={f.titre} className="img-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-vert/60 via-vert/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-4xl drop-shadow-lg">{f.icon}</div>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-nunito font-bold text-vert text-lg sm:text-xl mb-2">{f.titre}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section parallax "Notre histoire" */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            data-parallax="0.2"
            className="absolute inset-0 parallax-img"
            style={{
              backgroundImage: `url(${photos.about})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.4)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-vert-fonce/90 via-vert/85 to-vert-fonce/90" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-white text-center">
          <span className="gsap-fade-up inline-block bg-white/10 text-green-100 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase border border-white/20">
            Notre histoire
          </span>
          <h2 className="gsap-fade-up font-nunito font-extrabold text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
            Depuis 2019, nous cultivons une cuisine qui a du sens
          </h2>
          <p className="gsap-fade-up text-green-50 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Bistro Verde est né d'une conviction simple : on peut manger délicieusement bon tout en respectant la planète. Nos plats sont préparés chaque jour à partir de produits frais sélectionnés auprès de nos producteurs partenaires.
          </p>
          <div className="gsap-fade-up grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto">
            {[
              { n: '12', l: 'Producteurs' },
              { n: '6 ans', l: 'd\'engagement' },
              { n: '100%', l: 'Bio certifié' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-nunito font-extrabold text-3xl sm:text-4xl text-vert-pale">{s.n}</div>
                <div className="text-xs sm:text-sm text-green-100 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plats populaires */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="gsap-fade-up font-nunito font-extrabold text-vert text-3xl sm:text-4xl mb-3">Nos Incontournables</h2>
          <p className="gsap-fade-up text-gray-500">Les plats que nos clients commandent encore et encore</p>
        </div>
        <div className="gsap-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platsPopulaires.map((plat) => (
            <div key={plat.nom} className="gsap-stagger-item card-plat group">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img src={photos.plat[plat.id]} alt={plat.nom} className="img-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {plat.tags.includes('vegan') && <span className="badge-vegan shadow-md">🌱 Vegan</span>}
                  {plat.tags.includes('veggie') && <span className="badge-veggie shadow-md">🥚 Végé</span>}
                  {plat.tags.includes('gluten') && <span className="badge-gluten shadow-md">🌾 S. Gluten</span>}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-nunito font-bold text-gray-800 text-lg mb-2">{plat.nom}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{plat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-nunito font-bold text-vert text-xl">{plat.prix}</span>
                  <a href="/commande" className="text-sm bg-vert text-white px-4 py-2 rounded-full hover:bg-vert-clair transition-colors font-semibold">
                    Commander
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/carte" className="btn-outline">Voir toute la carte</a>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 sm:py-20 bg-vert relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div data-parallax="0.15" className="parallax-img absolute inset-0" style={{
            backgroundImage: `url(${photos.heroVeg3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="gsap-fade-up font-nunito font-extrabold text-white text-3xl sm:text-4xl mb-3">Ce que disent nos clients</h2>
            <p className="gsap-fade-up text-green-100">Plus de 1 200 avis 5 étoiles sur Google et TripAdvisor</p>
          </div>
          <div className="gsap-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
            {temoignages.map((t) => (
              <div key={t.nom} className="gsap-stagger-item bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/15 transition-colors">
                <p className="text-yellow-300 text-xl mb-3">{'★'.repeat(t.note)}</p>
                <p className="text-white italic leading-relaxed mb-4">&ldquo;{t.texte}&rdquo;</p>
                <p className="text-green-200 font-semibold text-sm">— {t.nom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="gsap-fade-up font-nunito font-extrabold text-vert text-3xl sm:text-4xl mb-3">Recettes & Bons Plans</h2>
        <p className="gsap-fade-up text-gray-500 mb-8">Chaque semaine, nos recettes de saison et les offres du moment directement dans votre boîte mail.</p>
        <form className="gsap-fade-up flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Merci ! Vous êtes inscrit·e à notre newsletter 🌿') }}>
          <input
            type="email"
            required
            placeholder="votre@email.com"
            className="flex-1 px-5 py-3 rounded-full border-2 border-vert/20 focus:border-vert focus:outline-none text-gray-700"
          />
          <button type="submit" className="btn-vert whitespace-nowrap">
            Je m&apos;inscris
          </button>
        </form>
      </section>
    </>
  )
}
