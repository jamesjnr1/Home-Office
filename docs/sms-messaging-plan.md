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

## Status: infrastructure is built, waiting on your Arkesel credentials

Everything below now exists in the repo:

- `api/booking-confirmation.ts` — saves the appointment to Supabase and
  sends the booking-confirmation SMS if the visitor opted in.
- `api/contact-consent.ts` — saves a Contact-form visitor to the SMS list
  if they opted in.
- `api/cron-regular-sms.ts` — runs daily via Vercel Cron, only actually
  sends on Mondays (weekly rotation) and the 1st of the month (refill
  reminder), and won't double-send if triggered twice the same day.
- `api/cron-appointment-reminders.ts` — runs daily, texts anyone with a
  confirmed appointment tomorrow who opted in.
- A dedicated Supabase project (`Home-Office-Pharmacy`) with `customers`,
  `appointments`, and `sms_log` tables, locked down with Row Level
  Security so only the server-side service-role key can read/write them
  — the frontend has no direct access.
- Both forms (Contact, BookAppointment) now have an SMS opt-in checkbox.

**None of this will actually send a message yet.** Every send goes
through `sendSms()` in `api/_lib/arkesel.ts`, which explicitly checks for
`ARKESEL_API_KEY` and `ARKESEL_SENDER_ID` and returns
`{ ok: false, reason: 'not_configured' }` — never a fake success — if
either is missing. Right now, both are missing.

### What you need to do (I can't do these — they need your accounts)

Your sender ID is approved (`Home-Office`), so the only remaining step is
adding environment variables in the Vercel project settings
(Project → Settings → Environment Variables), for Production:

| Variable | Value |
|---|---|
| `ARKESEL_API_KEY` | Your Arkesel API key — Arkesel dashboard → API/Settings. I don't have this and can't set it for you; paste it directly into Vercel, no need to share it elsewhere. |
| `ARKESEL_SENDER_ID` | `Home-Office` |
| `SUPABASE_URL` | `https://nzswpmevuzxnjpzoxvhw.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | From the Supabase dashboard → `Home-Office-Pharmacy` project → Settings → API → `service_role` secret key (**not** the anon/publishable key) |
| `CRON_SECRET` | `f5586928651e80d11b581074bb4b7291bfb2b9c30dba1e562303a3b80446b916` |

That `CRON_SECRET` value is freshly generated and only shown here — save
it now. It stops anyone who finds the cron URLs from triggering a mass
SMS send; Vercel sends it automatically when it calls your cron jobs,
once it's set as an env var.

**Then redeploy** — env var changes need a new deploy to take effect.
Once that's done, everything works immediately: no further code changes
needed, and no test message will go out until a real form is submitted
or the next cron fire (Monday, the 1st, or the day before a consented
appointment).
