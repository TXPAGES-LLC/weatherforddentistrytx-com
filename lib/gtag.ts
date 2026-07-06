export const GA_ID = 'G-8G4Z3J9JYK'

// Declare gtag on window so TypeScript is happy
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

type GtagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
  [key: string]: unknown
}

/** Fire a GA4 event. Safe to call even before gtag is ready — no-ops if not loaded. */
export function trackEvent({ action, category, label, value, ...extra }: GtagEvent) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', action, {
    ...(category ? { event_category: category } : {}),
    ...(label ? { event_label: label } : {}),
    ...(value !== undefined ? { value } : {}),
    ...extra,
  })
}

/** Shorthand helpers for the real conversions on this site */
export const events = {
  phoneCall: (location: string) =>
    trackEvent({ action: 'phone_call', category: 'contact', label: location }),

  getDirections: (location: string) =>
    trackEvent({ action: 'get_directions', category: 'contact', label: location }),

  emailClick: (location: string) =>
    trackEvent({ action: 'email_click', category: 'contact', label: location }),

  patientFormDownload: () =>
    trackEvent({ action: 'patient_form_download', category: 'engagement', label: 'patient_forms_page' }),

  scheduleClick: (location: string) =>
    trackEvent({ action: 'schedule_click', category: 'contact', label: location }),
}
