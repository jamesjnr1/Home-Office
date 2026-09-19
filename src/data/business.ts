// Single source of truth for real business details.
// Update this file if the address, phone, hours, or Formspree endpoint change.

export const business = {
  name: 'Home-Office Pharmacy & Clinic',
  tagline: "Our Care & Medicines are Channels of God's Healing",
  address: 'Buduburam, Estate Junction, Ghana',
  phoneDisplay: '055 880 2400',
  phoneTel: '+233558802400',
  hours: '8:00 AM – 10:00 PM, Monday–Saturday · 12:00 PM – 10:00 PM, Sunday',
  mapQuery: 'Home-Office Pharmacy, Buduburam Estate Junction, Ghana',

  // Formspree's old "no signup, just use your email as the URL" mode is
  // deprecated and no longer reliable (Formspree phased it out — see
  // https://help.formspree.io/articles/troubleshooting/phasing-out-legacy-forms-email-urls).
  // A real dashboard-created form is required now:
  //   1. Sign up free at https://formspree.io/register
  //   2. Create a new form in the dashboard, set its destination to the
  //      inbox below (or whichever address should receive submissions)
  //   3. Copy its endpoint — looks like "https://formspree.io/f/xxxxxxxx"
  //      — into formspreeEndpoint below
  // Forms won't deliver anywhere until formspreeEndpoint is set to a
  // real form ID.
  formspreeEmail: 'valorant.ethereal69@gmail.com',
  formspreeEndpoint: '',

  description:
    "Home-Office Pharmacy and Clinic provides customers with medicines, counselling, clinical care and other services that meet their needs. Our medicines, counselling and clinical care are channels for God's healing to all who desire lasting healing and solutions to their medical problems.",

  descriptionExtra:
    'We provide tailored pharmaceutical and clinical services at home and office, or wherever clients may deem convenient. We are open to schools, churches, and organizations who want customised services at the time they need it. We understand that each person is unique, so our services are sensitive to individual needs. We work with leading organisations in the medical and pharmaceutical industry to provide quality pharmaceutical products.',
};

export function buildMapEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`;
}

export function buildMapLinkUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapQuery)}`;
}

// Opens WhatsApp with a pre-filled message — this is the same number as
// phoneTel. If that number isn't on WhatsApp, update it here.
export function buildWhatsAppUrl(message: string) {
  const digits = business.phoneTel.replace(/[^\d]/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

function formspreeUrl() {
  // The legacy `formspree.io/{email}` pattern is deprecated by Formspree
  // and unreliable — see the comment on formspreeEndpoint above. Only a
  // real dashboard-created form endpoint is used.
  return business.formspreeEndpoint || null;
}

export async function submitToFormspree(data: Record<string, unknown>) {
  const url = formspreeUrl();
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
}
