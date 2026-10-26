// What Google (and link previews) show for each page. Used twice: in the
// browser on every route change (src/hooks/usePageMeta.ts), and after
// `vite build` by scripts/prerender.mjs, which writes a copy of
// index.html per page with these tags — and the page's main text and
// links (PAGE_CONTENT) — already in the HTML, so a crawler sees real
// content without running React. Plain JS so the Node build script can
// import it too. Keep the wording in step with the pages themselves.

export const SITE_URL = 'https://pharmacy.home-officegroup.com';

export const PAGE_META = {
  '/': {
    title: 'Home-Office Pharmacy & Clinic — Buduburam Estate Junction',
    description:
      'Home-Office Pharmacy & Clinic at Buduburam Estate Junction, Ghana — medicines, counselling, clinical consultations and lab tests. Open every day. Call 055 880 2400.',
  },
  '/services': {
    title: 'Services — Medicines, Counselling & Clinical Care | Home-Office Pharmacy & Clinic',
    description:
      'Prescriptions and over-the-counter medicines, counselling, clinical consultations, health education, and on-site lab tests (malaria, typhoid, blood glucose, haemoglobin, pregnancy) in Buduburam.',
  },
  '/pharmacy': {
    title: 'Our Pharmacy — Genuine Medicines in Buduburam | Home-Office Pharmacy & Clinic',
    description:
      'A full-service pharmacy at Buduburam Estate Junction: prescriptions filled, genuine medicines from trusted suppliers, and pharmacists ready to answer your questions.',
  },
  '/shop': {
    title: 'Shop — What We Stock | Home-Office Pharmacy & Clinic',
    description:
      "Browse what Home-Office Pharmacy & Clinic stocks, by category. Call or visit us at Buduburam Estate Junction to buy.",
  },
  '/contact': {
    title: 'Contact & Directions | Home-Office Pharmacy & Clinic, Buduburam',
    description:
      'Call 055 880 2400 or visit Home-Office Pharmacy & Clinic at Buduburam Estate Junction. Open Monday–Saturday 8 AM–10 PM and Sunday 12 PM–10 PM.',
  },
  '/book': {
    title: 'Book an Appointment | Home-Office Pharmacy & Clinic',
    description:
      'Request a consultation, counselling session or lab test at Home-Office Pharmacy & Clinic, Buduburam, in minutes. Walk-ins are always welcome too.',
  },
};

const NAV = [
  ['/', 'Home'], ['/services', 'Services'], ['/pharmacy', 'Pharmacy'],
  ['/shop', 'Shop'], ['/book', 'Book an appointment'], ['/contact', 'Contact'],
];

const FOOTER =
  'Home-Office Pharmacy &amp; Clinic · Buduburam, Estate Junction, Ghana · 055 880 2400 · ' +
  'Open 8:00 AM – 10:00 PM Monday–Saturday, 12:00 PM – 10:00 PM Sunday';

const SERVICES_LIST = `
    <ul>
      <li>Medicines &amp; prescriptions — prescription and over-the-counter medicines, sourced from leading pharmaceutical organisations and dispensed with clear guidance.</li>
      <li>Counselling — confidential, personal medication and health &amp; lifestyle counselling.</li>
      <li>Clinical &amp; medical consultation — walk-in and scheduled visits, diagnosis and treatment, referrals when needed.</li>
      <li>Health education — for individuals, schools, churches and organisations.</li>
      <li>Labs &amp; diagnostic services — haemoglobin, blood glucose, malaria, pregnancy and typhoid tests, wound dressing and obstetric scans.</li>
    </ul>`;

export const PAGE_CONTENT = {
  '/': `
    <h1>Our Care &amp; Medicines are Channels of God's Healing</h1>
    <p>Home-Office Pharmacy and Clinic provides customers with medicines, counselling, clinical care and other services that meet their needs, at Buduburam Estate Junction.</p>
    <h2>Medicines, Counselling &amp; Clinical Care</h2>
    ${SERVICES_LIST}
    <p>We provide tailored pharmaceutical and clinical services at home and office, or wherever clients may deem convenient — and customised services for schools, churches and organisations.</p>
    <p><a href="/book">Book an appointment</a> or <a href="/contact">get directions</a>.</p>`,
  '/services': `
    <h1>Medicines, Counselling &amp; Clinical Care</h1>
    ${SERVICES_LIST}
    <h2>On-Site Testing, Same Visit</h2>
    <p>On-the-spot testing and clinical procedures for early, accurate diagnosis.</p>
    <p><a href="/book">Book an appointment</a> — walk-ins are always welcome.</p>`,
  '/pharmacy': `
    <h1>A Full-Service Pharmacy You Can Trust</h1>
    <p>Our pharmacy team is here to answer your questions, fill your prescriptions, and make sure you get the right medication at the right time. Trusted suppliers, genuine medicines.</p>
    <h2>More Than Just Prescriptions</h2>
    <p>A full range of pharmacy services designed to make managing your health simpler and more convenient. <a href="/shop">See what we stock</a>.</p>`,
  '/shop': `
    <h1>Browse What We Stock</h1>
    <p>A guide to what you'll find on our shelves, organised by category — for browsing only. Call or visit us to buy.</p>`,
  '/contact': `
    <h1>We're Here to Help</h1>
    <p>Have a question, need directions, or want to learn more? Call us on <a href="tel:+233558802400">055 880 2400</a> or send a message.</p>
    <p>Home-Office Pharmacy &amp; Clinic, Buduburam, Estate Junction, Ghana. Open 8:00 AM – 10:00 PM Monday–Saturday and 12:00 PM – 10:00 PM Sunday.</p>`,
  '/book': `
    <h1>Schedule Your Visit in Minutes</h1>
    <p>Request a consultation, counselling session or lab test and we'll confirm your visit. Walk-ins are always welcome too.</p>`,
};

export function staticPageHtml(path) {
  const body = PAGE_CONTENT[path];
  if (!body) return '';
  const nav = NAV.map(([href, label]) => `<a href="${href}">${label}</a>`).join(' · ');
  return `<div data-prerendered><header><a href="/">Home-Office Pharmacy &amp; Clinic</a><nav>${nav}</nav></header><main>${body}</main><footer><p>${FOOTER}</p><p>Part of <a href="https://www.home-officegroup.com/">Home-Office Group of Companies</a>.</p></footer></div>`;
}
