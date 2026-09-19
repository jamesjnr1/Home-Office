# SMS Messaging Plan — Home-Office Pharmacy & Clinic

Provider: **Arkesel** (`https://sms.arkesel.com/api/v2/sms/send`)

This is the content/cadence half of the SMS feature — what gets sent and when.
The sending infrastructure (who triggers it, where the customer list lives)
is a separate decision, tracked at the bottom of this file.

## Message templates

Fields in `{braces}` are filled in from real data (`business.ts`, or the
specific booking) at send time — nothing here is sent as-is with the
placeholders showing.

### Transactional — triggered by a real event

**1. Booking confirmation** — sent immediately when someone submits the
BookAppointment form.

> Hi {name}, your request for {reason} at Home-Office Pharmacy & Clinic
> is in for {date} at {time}. We'll confirm by phone. Questions? Call
> 055 880 2400.

**2. Appointment reminder** — sent the day before a confirmed appointment.

> Reminder: your visit to Home-Office Pharmacy & Clinic is tomorrow
> ({date}) at {time}. Walk-ins are welcome if your plans change. Call
> 055 880 2400.

**3. Careers/contact acknowledgement** *(optional, only if SMS is also
wanted for these forms)* — sent when someone submits Contact or
Careers.

> Thanks for reaching out to Home-Office Pharmacy & Clinic — we've
> received your message and will get back to you soon. Urgent? Call
> 055 880 2400.

### Regular — sent to the general customer list on a fixed cadence

These are the "make sure they're regular" messages. Rotate the weekly
ones so the same customer doesn't get an identical text every week.

**Weekly (pick one on rotation, 4-week cycle):**

> Week 1: Home-Office Pharmacy & Clinic is open {hours}. Walk-ins
> welcome for prescriptions, consultations & lab tests — 055 880 2400.

> Week 2: Need a consultation, not just a prescription? Our clinic team
> is available {hours} at Home-Office Pharmacy & Clinic, Buduburam
> Estate Junction.

> Week 3: On-site lab tests (blood glucose, malaria, pregnancy & more)
> are available same-visit at Home-Office Pharmacy & Clinic — no need
> for a second trip. Call 055 880 2400.

> Week 4: Home-Office Pharmacy & Clinic is open every day, including
> Sundays (12pm–10pm). Walk in or call 055 880 2400.

**Monthly:**

> Refill reminder: running low on a regular medication? Visit
> Home-Office Pharmacy & Clinic — no appointment needed, open {hours}.

### As-needed — only sent when something real is happening (not on a schedule)

**Holiday / hours change:**

> Home-Office Pharmacy & Clinic will be [closed / open {special hours}]
> on {date} for {reason}. We reopen {date/time}.

## Cadence summary

| Message | Trigger | Frequency |
|---|---|---|
| Booking confirmation | Form submitted | Immediate, per booking |
| Appointment reminder | Day before appointment | Once per booking |
| Weekly awareness (rotating) | Calendar | Every Monday |
| Refill reminder | Calendar | 1st of each month |
| Holiday/hours notice | Real schedule change | As needed only |

## Compliance — required before sending anything regular

- **Consent**: add an opt-in checkbox to the Contact and BookAppointment
  forms ("I agree to receive SMS updates from Home-Office Pharmacy &
  Clinic") — Ghana's Data Protection Act and Arkesel's own terms require
  this for anything beyond a direct transactional reply.
- **Opt-out**: every *regular/marketing* message (weekly, monthly) should
  end with a way to stop, e.g. "Reply STOP to opt out." Transactional
  messages (booking confirmation, appointment reminder) don't need this.
- **Sender ID**: Arkesel requires your sender ID (the name shown as the
  sender, e.g. "HomeOffice") to be registered and approved before you can
  send — this is done in the Arkesel dashboard, not something I can do
  for you.

## What's still needed to actually send these (not yet built)

1. An Arkesel account with a funded balance and an **approved sender ID**.
2. The Arkesel **API key**, stored as a server-side secret (never in
   frontend code) — e.g. a Vercel environment variable.
3. Somewhere to store the **customer phone list** with consent — this
   site currently has no database. Booking/Contact submissions only go to
   an email inbox via Formspree; nothing is saved in a queryable list yet.
4. A small backend piece (e.g. a Vercel serverless function + Vercel Cron
   Job) to actually call the Arkesel API — a static site has nothing
   running to trigger sends on its own.

None of that can be faked — it needs real credentials and a real decision
on where customer numbers live. See the chat for the specific questions
this raises.
