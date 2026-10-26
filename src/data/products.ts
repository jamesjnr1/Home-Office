// Real stock categories — as labelled on our own shelves in store.
// (Same categories as the "What We Stock" section on the Pharmacy page.)
export interface StockCategory {
  id: string;
  label: string;
  icon: string;
}

export const stockCategories: StockCategory[] = [
  { id: 'analgesics', label: 'Analgesics', icon: 'Pill' },
  { id: 'multivitamins', label: 'Multivitamins', icon: 'Sparkles' },
  { id: 'antibiotics', label: 'Antibiotics', icon: 'ShieldCheck' },
  { id: 'antimalarials', label: 'Anti-Malarials', icon: 'Thermometer' },
  { id: 'coughcold', label: 'Cough & Cold', icon: 'Wind' },
  { id: 'antiallergic', label: 'Anti-Allergic', icon: 'Droplet' },
  { id: 'herbal', label: 'Herbal Products', icon: 'Leaf' },
];

// Individual products — only items actually on our shelves (seen in our
// own in-store photos), for browsing only (see the Shop page's notice —
// this is not an online store, there is no cart or checkout). Names and
// descriptions are as printed on each pack. Photos in
// public/images/products/ are the manufacturer's pack shot where one
// matching the pack we stock was available online, otherwise cropped from
// our own shelf photos. No prices are shown until real ones are
// confirmed — the card says to ask in store. To add a product, add one
// object here with `category` matching an `id` above exactly:
//
//   { category: 'analgesics', name: 'Paracetamol 500mg', detail: 'Tablets', image: '/images/products/paracetamol.jpg', price: 'GHS 5.00' },
//
// `price` is a plain string so it can read however you want ("GHS 5.00",
// "From GHS 5.00", etc.) — there's no calculation done on it.
export interface Product {
  category: string;
  name: string;
  detail?: string;
  image?: string;
  price?: string;
}

const img = (slug: string) => `/images/products/${slug}.jpg`;

export const products: Product[] = [
  // Analgesics
  { category: 'analgesics', name: 'Deep Heat Spray', detail: 'Fast relief from rheumatic pain, muscular aches & strains', image: img('deep-heat') },
  { category: 'analgesics', name: 'Rufenac Gel', detail: 'Topical gel', image: img('rufenac') },

  // Multivitamins
  { category: 'multivitamins', name: 'Ginsomin', detail: 'Korean Panax ginseng extract with multivitamins & minerals · softgel capsules', image: img('ginsomin') },
  { category: 'multivitamins', name: 'Zincovit Syrup', detail: 'Multivitamin & zinc syrup', image: img('zincovit') },
  { category: 'multivitamins', name: 'Osteocare Liquid', detail: 'Calcium, magnesium, vitamin D3 & zinc', image: img('osteocare') },
  { category: 'multivitamins', name: 'Folic Acid 5mg', detail: 'Tablets', image: img('folic-acid') },

  // Antibiotics (prescription medicines — dispensed by our pharmacist)
  { category: 'antibiotics', name: 'Augmentin 625mg', detail: 'Amoxicillin & clavulanate tablets · prescription only', image: img('augmentin') },
  { category: 'antibiotics', name: 'Amoksiklav 625mg', detail: 'Amoxicillin & clavulanic acid tablets · prescription only', image: img('amoksiklav') },
  { category: 'antibiotics', name: 'Co-Amoxiclav 625mg', detail: 'Amoxicillin & clavulanic acid tablets · prescription only', image: img('co-amoxiclav') },
  { category: 'antibiotics', name: 'Zanitin DUO 625', detail: 'Tablets · prescription only', image: img('zanitin-duo') },
  { category: 'antibiotics', name: 'Skycef 250 / 500', detail: 'Cefuroxime axetil tablets · prescription only', image: img('skycef') },
  { category: 'antibiotics', name: 'Azilex', detail: 'Azithromycin · prescription only', image: img('azilex') },
  { category: 'antibiotics', name: 'Clindamycin 150mg', detail: 'Capsules · prescription only', image: img('clindamycin') },

  // Cough & Cold
  { category: 'coughcold', name: 'Benylin Original', detail: 'Effective cough relief syrup', image: img('benylin') },
  { category: 'coughcold', name: 'Viscof', detail: 'Expectorant syrup (Viscof, Viscof-D, Viscof-S)', image: img('viscof') },
  { category: 'coughcold', name: 'Zubes', detail: 'Cough mixture & expectorant', image: img('zubes') },
  { category: 'coughcold', name: 'Flucor Day', detail: 'Flu · cold · cough', image: img('flucor-day') },

  // Anti-Allergic
  { category: 'antiallergic', name: 'Zirtek Allergy Relief', detail: 'Tablets', image: img('zirtek') },
  { category: 'antiallergic', name: "Piriton Children's Allergy Syrup", detail: 'Syrup for children', image: img('piriton') },
  { category: 'antiallergic', name: 'Zyfen 180', detail: 'Fexofenadine tablets', image: img('zyfen-180') },

  // Herbal Products
  { category: 'herbal', name: 'Rooter Mixture', detail: 'Herbal mixture · 750ml', image: img('rooter-mixture') },
  { category: 'herbal', name: 'Amuzu Garlic Bitters', detail: 'Herbal bitters', image: img('amuzu-garlic-bitters') },
  { category: 'herbal', name: 'Taabea Herbal Mixture', detail: 'Herbal mixture', image: img('taabea') },
  { category: 'herbal', name: 'Gifas Mixture', detail: 'Herbal mixture', image: img('gifas') },
];
