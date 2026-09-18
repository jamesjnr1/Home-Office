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

// Individual products, priced for browsing only (see the Shop page's notice
// — this is not an online store, there is no cart or checkout).
//
// This array intentionally starts EMPTY. We don't have real product names,
// prices, or photos to show yet, and this site never shows invented ones —
// every fact on it is real. Add real items here as they're confirmed, one
// object per product, each `category` matching an `id` above exactly:
//
//   { category: 'analgesics', name: 'Paracetamol 500mg', price: 'GHS 5.00', unit: 'per pack of 10' },
//
// `price` is a plain string so it can read however you want ("GHS 5.00",
// "From GHS 5.00", etc.) — there's no calculation done on it.
export interface Product {
  category: string;
  name: string;
  price: string;
  unit?: string;
}

export const products: Product[] = [];
