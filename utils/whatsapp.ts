/**
 * WhatsApp Dispatch Utility for GistCity Media
 * Official WhatsApp Line: +234 814 157 7473
 */

export const GISTCITY_WHATSAPP_NUMBER = '2348141577473';
export const GISTCITY_FORMATTED_PHONE = '+234 814 157 7473';

export interface ContactFormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  primaryRegion: string;
  eventDate?: string;
  details: string;
  fileName?: string;
}

export interface EventRsvpFormData {
  eventTitle: string;
  eventVenue: string;
  eventDate: string;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  passType: string;
  specialNotes?: string;
}

/**
 * Format timestamp in human-readable diaspora format
 */
export function getFormattedSubmissionTimestamp(): string {
  try {
    const now = new Date();
    return now.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  } catch {
    return new Date().toISOString();
  }
}

/**
 * Generate a properly arranged WhatsApp message for the Media & Press Intake Form
 */
export function formatContactFormWhatsAppMessage(data: ContactFormData): string {
  const timestamp = getFormattedSubmissionTimestamp();
  
  const lines: string[] = [
    '📋 *NEW SUBMISSION: MEDIA & PRESS INTAKE / GET FEATURED*',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '📌 *FORM IDENTIFIER:* Media & Press Intake Form',
    `🌐 *SOURCE:* GistCity Website (Online Intake Portal)`,
    `⏰ *TIME RECEIVED:* ${timestamp}`,
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '👤 *CONTACT PERSON:* ' + (data.fullName || 'Not provided'),
    '🏢 *BRAND / ENTITY:* ' + (data.organization || 'Not provided'),
    '📧 *EMAIL ADDRESS:* ' + (data.email || 'Not provided'),
    '📱 *PHONE / WHATSAPP:* ' + (data.phone || 'Not provided'),
    '🎬 *SERVICE NEEDED:* ' + (data.serviceNeeded || 'General Media Inquiry'),
    '🌍 *PRIMARY REGION:* ' + (data.primaryRegion || 'Global Diaspora'),
  ];

  if (data.eventDate && data.eventDate.trim()) {
    lines.push(`📅 *EVENT DATE / TIMELINE:* ${data.eventDate.trim()}`);
  }

  if (data.fileName && data.fileName.trim()) {
    lines.push(`📎 *ATTACHED BRIEF / MEDIA KIT:* ${data.fileName.trim()}`);
  }

  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('📝 *STORY, EVENT OR CAMPAIGN DETAILS:*');
  lines.push(data.details && data.details.trim() ? data.details.trim() : 'No additional details provided.');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('⚡ *Sent via GistCity Media Platform*');
  lines.push('👉 *Official Desk:* ' + GISTCITY_FORMATTED_PHONE);

  return lines.join('\n');
}

/**
 * Generate a properly arranged WhatsApp message for the Event RSVP & Media Pass Form
 */
export function formatEventRsvpWhatsAppMessage(data: EventRsvpFormData): string {
  const timestamp = getFormattedSubmissionTimestamp();

  const lines: string[] = [
    '🎟️ *NEW SUBMISSION: EVENT RSVP & MEDIA ACCREDITATION*',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '📌 *FORM IDENTIFIER:* Event Accreditation & RSVP Form',
    `🌐 *SOURCE:* GistCity Website (Upcoming Events Section)`,
    `⏰ *TIME RECEIVED:* ${timestamp}`,
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    `🎪 *TARGET EVENT:* ${data.eventTitle}`,
    `📍 *VENUE:* ${data.eventVenue}`,
    `📅 *DATE:* ${data.eventDate}`,
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '👤 *APPLICANT NAME:* ' + (data.fullName || 'Not provided'),
    '🏢 *MEDIA / OUTLET / COMPANY:* ' + (data.organization || 'Not provided'),
    '📧 *EMAIL ADDRESS:* ' + (data.email || 'Not provided'),
    '📱 *PHONE / WHATSAPP:* ' + (data.phone || 'Not provided'),
    '🎫 *PASS TYPE REQUESTED:* ' + (data.passType || 'Press / Media Accreditation'),
  ];

  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('📝 *SPECIAL NOTES / RED CARPET REQUESTS:*');
  lines.push(
    data.specialNotes && data.specialNotes.trim()
      ? data.specialNotes.trim()
      : 'No special camera or red-carpet notes provided.'
  );
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('⚡ *Sent via GistCity Media Platform*');
  lines.push('👉 *Official Desk:* ' + GISTCITY_FORMATTED_PHONE);

  return lines.join('\n');
}

/**
 * Build the wa.me link with encoded text
 */
export function createWhatsAppUrl(message: string, phoneNumber: string = GISTCITY_WHATSAPP_NUMBER): string {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Send message to WhatsApp by opening the wa.me link
 * Returns boolean indicating whether window.open succeeded
 */
export function sendToWhatsApp(message: string, phoneNumber: string = GISTCITY_WHATSAPP_NUMBER): { url: string; opened: boolean } {
  const url = createWhatsAppUrl(message, phoneNumber);
  try {
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (win) {
      return { url, opened: true };
    }
    return { url, opened: false };
  } catch {
    return { url, opened: false };
  }
}
