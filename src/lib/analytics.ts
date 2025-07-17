// Google Analytics 4 setup with custom tracking
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initializeGA = (measurementId: string) => {
  // Create gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  // Configure GA4
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    // GDPR compliance settings
    anonymize_ip: true,
    respect_consent_mode: true,
    cookie_flags: 'secure;samesite=none',
  });
};

// Track page views
export const trackPageView = (page_title: string, page_location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title,
      page_location,
      page_referrer: document.referrer,
    });
  }
};

// Track section views (when user scrolls to different sections)
export const trackSectionView = (section_name: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'section_view', {
      custom_parameter_1: 'portfolio_section',
      section_name,
      engagement_time_msec: Date.now(),
    });
  }
};

// Track file downloads with enhanced data
export const trackFileDownload = (fileName: string, fileUrl: string, fileType: string = 'pdf') => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Generate a session-based anonymous ID (privacy-compliant)
    const anonymousId = generateAnonymousId();
    
    window.gtag('event', 'file_download', {
      file_name: fileName,
      file_extension: fileType,
      file_url: fileUrl,
      download_timestamp: new Date().toISOString(),
      anonymous_user_id: anonymousId,
      user_agent: navigator.userAgent,
      referrer: document.referrer || 'direct',
    });

    // Also track as a conversion for GA4
    window.gtag('event', 'conversion', {
      currency: 'USD',
      value: 1.0, // Assign value to downloads for conversion tracking
      event_category: 'file_download',
      event_label: fileName,
    });
  }
};

// Track resume downloads specifically
export const trackResumeDownload = () => {
  trackFileDownload('Kavin_Prakash_Resume.pdf', 'resume_download', 'pdf');
  
  // Additional resume-specific tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'resume_download', {
      event_category: 'career_interest',
      event_label: 'resume_pdf',
      value: 1,
    });
  }
};

// Track research paper downloads
export const trackResearchDownload = (paperTitle: string, paperUrl: string) => {
  trackFileDownload(`${paperTitle}.pdf`, paperUrl, 'pdf');
  
  // Additional research-specific tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'research_download', {
      event_category: 'academic_interest',
      paper_title: paperTitle,
      event_label: 'research_pdf',
      value: 1,
    });
  }
};

// Track contact form submissions
export const trackContactFormSubmission = (method: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_form_submit', {
      event_category: 'user_engagement',
      contact_method: method,
      event_label: 'contact_form',
    });
  }
};

// Generate privacy-compliant anonymous ID
const generateAnonymousId = (): string => {
  // Check if we already have an anonymous ID in sessionStorage (not localStorage for privacy)
  let anonymousId = sessionStorage.getItem('anonymous_user_id');
  
  if (!anonymousId) {
    // Generate a random ID that resets every session (privacy-compliant)
    anonymousId = 'anon_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    sessionStorage.setItem('anonymous_user_id', anonymousId);
  }
  
  return anonymousId;
};

// Track user engagement with different portfolio sections
export const trackPortfolioEngagement = (action: string, section: string, details?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'portfolio_engagement', {
      event_category: 'user_interaction',
      action_type: action,
      section_name: section,
      additional_details: details ? JSON.stringify(details) : null,
    });
  }
};

// Set up consent mode for GDPR compliance
export const updateConsentMode = (hasConsent: boolean) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: hasConsent ? 'granted' : 'denied',
      ad_storage: 'denied', // Always deny ad storage for privacy
      functionality_storage: hasConsent ? 'granted' : 'denied',
      personalization_storage: 'denied', // Deny personalization for privacy
      security_storage: 'granted', // Always allow security storage
    });
  }
};

// Initialize consent mode (call before GA initialization)
export const initializeConsentMode = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
    
    // Set default consent to denied (GDPR requirement)
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted',
    });
  }
};