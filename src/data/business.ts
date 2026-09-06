// Single source of truth for real business details.
// Update this file if the address, phone, or hours ever change.

export const business = {
  name: 'Home-Office Pharmacy & Clinic',
  tagline: "Our Care & Medicines are Channels of God's Healing",
  address: 'Buduburam, Estate Junction, Ghana',
  phoneDisplay: '055 880 2400',
  phoneTel: '+233558802400',
  whatsappNumber: '233558802400',
  hours: '8:00 AM – 10:00 PM, Every Day',
  mapQuery: 'Home-Office Pharmacy, Buduburam Estate Junction, Ghana',
};

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMapEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`;
}

export function buildMapLinkUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapQuery)}`;
}
