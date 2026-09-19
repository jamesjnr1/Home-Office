import { business } from '../../src/data/business';

// Kept in sync with docs/sms-messaging-plan.md — that file is the
// human-readable version of exactly these strings.

export function bookingConfirmationSms(name: string, reason: string, date: string, time: string) {
  return `Hi ${name}, your request for ${reason} at Home-Office Pharmacy & Clinic is in for ${date} at ${time}. We'll confirm by phone. Questions? Call ${business.phoneDisplay}.`;
}

export function appointmentReminderSms(date: string, time: string) {
  return `Reminder: your visit to Home-Office Pharmacy & Clinic is tomorrow (${date}) at ${time}. Walk-ins are welcome if your plans change. Call ${business.phoneDisplay}.`;
}

const weeklyRotation = [
  `Home-Office Pharmacy & Clinic is open ${business.hours}. Walk-ins welcome for prescriptions, consultations & lab tests — ${business.phoneDisplay}. Reply STOP to opt out.`,
  `Need a consultation, not just a prescription? Our clinic team is available ${business.hours} at Home-Office Pharmacy & Clinic, ${business.address}. Reply STOP to opt out.`,
  `On-site lab tests (blood glucose, malaria, pregnancy & more) are available same-visit at Home-Office Pharmacy & Clinic — no need for a second trip. Call ${business.phoneDisplay}. Reply STOP to opt out.`,
  `Home-Office Pharmacy & Clinic is open every day, including Sundays (12pm–10pm). Walk in or call ${business.phoneDisplay}. Reply STOP to opt out.`,
];

// Rotates through the 4 weekly messages by ISO week number, so the
// same customer doesn't get an identical text every week.
export function weeklyAwarenessSms(isoWeek: number) {
  return weeklyRotation[isoWeek % weeklyRotation.length];
}

export function monthlyRefillSms() {
  return `Refill reminder: running low on a regular medication? Visit Home-Office Pharmacy & Clinic — no appointment needed, open ${business.hours}. Reply STOP to opt out.`;
}
