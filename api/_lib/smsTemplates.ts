// Deliberately self-contained — no import from src/, since that cross
// boundary was likely why the Vercel function crashed at load time
// (FUNCTION_INVOCATION_FAILED, before any of our own error handling
// could run). Keep these three constants in sync with src/data/business.ts
// by hand if the phone, hours, or address ever change.
const PHONE_DISPLAY = '055 880 2400';
const HOURS = '8:00 AM – 10:00 PM, Monday–Saturday · 12:00 PM – 10:00 PM, Sunday';
const ADDRESS = 'Buduburam, Estate Junction, Ghana';

// Kept in sync with docs/sms-messaging-plan.md — that file is the
// human-readable version of exactly these strings.

export function bookingConfirmationSms(name: string, reason: string, date: string, time: string) {
  return `Hi ${name}, your request for ${reason} at Home-Office Pharmacy & Clinic is in for ${date} at ${time}. We'll confirm by phone. Questions? Call ${PHONE_DISPLAY}.`;
}

export function appointmentReminderSms(date: string, time: string) {
  return `Reminder: your visit to Home-Office Pharmacy & Clinic is tomorrow (${date}) at ${time}. Walk-ins are welcome if your plans change. Call ${PHONE_DISPLAY}.`;
}

const weeklyRotation = [
  `Home-Office Pharmacy & Clinic is open ${HOURS}. Walk-ins welcome for prescriptions, consultations & lab tests — ${PHONE_DISPLAY}. Reply STOP to opt out.`,
  `Need a consultation, not just a prescription? Our clinic team is available ${HOURS} at Home-Office Pharmacy & Clinic, ${ADDRESS}. Reply STOP to opt out.`,
  `On-site lab tests (blood glucose, malaria, pregnancy & more) are available same-visit at Home-Office Pharmacy & Clinic — no need for a second trip. Call ${PHONE_DISPLAY}. Reply STOP to opt out.`,
  `Home-Office Pharmacy & Clinic is open every day, including Sundays (12pm–10pm). Walk in or call ${PHONE_DISPLAY}. Reply STOP to opt out.`,
];

// Rotates through the 4 weekly messages by ISO week number, so the
// same customer doesn't get an identical text every week.
export function weeklyAwarenessSms(isoWeek: number) {
  return weeklyRotation[isoWeek % weeklyRotation.length];
}

export function monthlyRefillSms() {
  return `Refill reminder: running low on a regular medication? Visit Home-Office Pharmacy & Clinic — no appointment needed, open ${HOURS}. Reply STOP to opt out.`;
}
