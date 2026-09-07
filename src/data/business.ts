// Single source of truth for real business details.
// Update this file if the address, phone, hours, or Formspree endpoint change.

export const business = {
  name: 'Home-Office Pharmacy & Clinic',
  tagline: "Our Care & Medicines are Channels of God's Healing",
  address: 'Buduburam, Estate Junction, Ghana',
  phoneDisplay: '055 880 2400',
  phoneTel: '+233558802400',
  hours: '8:00 AM – 10:00 PM, Every Day',
  mapQuery: 'Home-Office Pharmacy, Buduburam Estate Junction, Ghana',

  // Formspree needs ONE destination email — no account/signup required.
  // Set it below, then submit any form on the site once: Formspree emails
  // that address a one-time confirmation link, and after you click it,
  // every submission arrives by email automatically. Forms won't deliver
  // anywhere until this is set.
  // (If you'd rather use a dashboard-created form, put its full
  // "https://formspree.io/f/xxxxxxxx" URL in formspreeEndpoint instead —
  // that takes priority over the email below.)
  formspreeEmail: '',
  formspreeEndpoint: '',

  description:
    "Home-Office Pharmacy and Clinic provides customers with medicines, counselling, clinical care and other services that meet their needs. Our medicines, counselling and clinical care are channels for God's healing to all who desire lasting healing and solutions to their medical problems.",

  descriptionExtra:
    'We provide tailored pharmaceutical and clinical services at home and office, or wherever clients may deem convenient. We are open to schools, churches, and organizations who want customised services at the time they need it. We understand that each person is unique, so our services are sensitive to individual needs. We work with leading organisations in the medical and pharmaceutical industry to provide quality pharmaceutical products.',

  audiences: [
    { icon: 'Home', label: 'At Home' },
    { icon: 'Briefcase', label: 'At Your Office' },
    { icon: 'GraduationCap', label: 'Schools' },
    { icon: 'Users', label: 'Churches & Organisations' },
  ],
};

export function buildMapEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`;
}

export function buildMapLinkUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapQuery)}`;
}

function formspreeUrl() {
  if (business.formspreeEndpoint) return business.formspreeEndpoint;
  if (business.formspreeEmail) return `https://formspree.io/${business.formspreeEmail}`;
  return null;
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
