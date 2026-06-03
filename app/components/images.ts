// Photos cohérentes Unsplash (food, restaurant végétarien)
// Format: ?w=800&q=80&auto=format pour optimisation

const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`

export const photos = {
  // Hero
  heroMain: u('photo-1490645935967-10de6ba17061', 1400), // buddha bowl colorée
  heroVeg1: u('photo-1610348725531-843dff563e2c', 600),  // avocat
  heroVeg2: u('photo-1582284540020-8acbe03f4924', 600),  // tomates cerises
  heroVeg3: u('photo-1518977676601-b53f82aba655', 600),  // brocoli
  heroVeg4: u('photo-1551754655-cd27e38d2076', 600),     // épis maïs

  // Features (engagement)
  featureBio: u('photo-1576045057995-568f588f82fb', 600),
  featureLocal: u('photo-1488459716781-31db52582fe9', 600),
  featureSaison: u('photo-1542838132-92c53300491e', 600),

  // Section "Notre histoire" / About — légumes frais
  about: u('photo-1466637574441-749b8f19452f', 1400),

  // Plats (par id ou clé)
  plat: {
    1: u('photo-1546069901-ba9599a7e63c'),   // Buddha Bowl
    2: u('photo-1505253716362-afaea1d3d1af'), // Salade lentilles
    3: u('photo-1476124369491-e7addf5db371'), // Risotto champignons
    4: u('photo-1631452180519-c014fe946bc7'), // Curry lentilles corail
    5: u('photo-1565299507177-b0ac66763828'), // Tarte courgettes chèvre
    6: u('photo-1604908176997-125f25cc6f3d'), // Poke bowl
    7: u('photo-1593001874117-c99c800e3eb7'), // Falafels houmous
    8: u('photo-1547592180-85f173990554'),    // Soupe du jour
    9: u('photo-1547308283-b941e6dfd609'),    // Velouté potimarron
    10: u('photo-1606313564200-e75d5e30476c'), // Brownie vegan
    11: u('photo-1568571780765-9276ac8b75a2'), // Tarte tatin
    12: u('photo-1490474418585-ba9bad8fd0ea'), // Smoothie bowl
  } as Record<number, string>,

  // Blog
  blog: {
    1: u('photo-1515543904379-3d757afe72e4', 1200), // Légumineuses
    2: u('photo-1631452180519-c014fe946bc7', 1200), // Recette curry
    3: u('photo-1488459716781-31db52582fe9', 1200), // Producteurs locaux
  } as Record<number, string>,
}
