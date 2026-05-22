// ──────────────────────────────────────────────────────────────
// SEO Configuration — Jarvis Devs AI by DEV
// Centralized metadata, JSON-LD schemas, and SEO constants
// ──────────────────────────────────────────────────────────────

export const SITE = {
  name: "JARVIS — AI Assistant by DEV",
  shortName: "JARVIS",
  tagline: "Futuristic AI Interface by DEV",
  creator: "DEV",
  url: "https://jarvis-devs-ai.vercel.app",
  locale: "en_US",
  language: "en",
  description:
    "JARVIS Devs AI — A futuristic AI assistant interface inspired by Iron Man. Built by DEV, this voice-controlled AI system delivers a premium, cinematic experience with real-time diagnostics and intelligent responses.",
  keywords: [
    "Jarvis Devs AI",
    "AI Assistant by DEV",
    "Futuristic AI Interface",
    "Personal AI System",
    "Iron Man Inspired AI",
    "Voice Controlled AI Assistant",
    "JARVIS AI",
    "DEV AI Assistant",
    "Smart AI Interface",
    "Cinematic AI Experience",
    "AI Dashboard",
    "JARVIS Dev",
  ],
  image: "/og-image.png",
  imageAlt: "JARVIS Devs AI — Futuristic AI Assistant Interface by DEV",
  imageWidth: 1200,
  imageHeight: 630,
  twitterHandle: "@dev_jarvis",
  googleSiteVerification: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  gaMeasurementId: "G-XXXXXXXXXX",
} as const;

// ── Page-specific metadata ────────────────────────────────────

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const PAGES: Record<string, PageMeta> = {
  home: {
    title: "JARVIS Devs AI — Futuristic AI Assistant by DEV",
    description:
      "Experience JARVIS Devs AI, a futuristic AI assistant interface built by DEV. Inspired by Iron Man, this voice-controlled AI system delivers real-time diagnostics, cinematic visuals, and intelligent responses.",
    path: "/",
    keywords: [
      "Jarvis Devs AI",
      "AI Assistant by DEV",
      "Futuristic AI Interface",
      "Iron Man Inspired AI",
      "Voice Controlled AI Assistant",
    ],
  },
};

// ── Metadata generator (Next.js Metadata API) ────────────────

export function generatePageMeta(page: PageMeta) {
  const fullUrl = `${SITE.url}${page.path}`;
  const ogImage = `${SITE.url}${SITE.image}`;

  return {
    title: page.title,
    description: page.description,
    keywords: [...SITE.keywords, ...(page.keywords ?? [])].join(", "),
    authors: [{ name: SITE.creator }],
    creator: SITE.creator,
    publisher: SITE.creator,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type: "website" as const,
      locale: SITE.locale,
      url: fullUrl,
      title: page.title,
      description: page.description,
      siteName: SITE.name,
      images: [
        {
          url: ogImage,
          width: SITE.imageWidth,
          height: SITE.imageHeight,
          alt: SITE.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: page.title,
      description: page.description,
      images: [ogImage],
      creator: SITE.twitterHandle,
    },
  };
}

// ── JSON-LD Structured Data Schemas ───────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jarvis Devs AI",
    alternateName: "JARVIS AI by DEV",
    url: SITE.url,
    logo: `${SITE.url}/og-image.png`,
    description: SITE.description,
    founder: {
      "@type": "Person",
      name: "DEV",
    },
    sameAs: [],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "DEV",
    jobTitle: "AI Systems Architect",
    description:
      "Creator of JARVIS Devs AI — a futuristic AI assistant interface inspired by Iron Man.",
    url: SITE.url,
    knowsAbout: [
      "Artificial Intelligence",
      "Futuristic Interfaces",
      "Voice Controlled AI",
      "Web Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Jarvis Devs AI",
    },
  };
}

export function softwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "JARVIS Devs AI",
    alternateName: "JARVIS AI Assistant by DEV",
    description: SITE.description,
    url: SITE.url,
    applicationCategory: "AI Assistant",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "DEV",
    },
    screenshot: `${SITE.url}/og-image.png`,
    featureList: [
      "Futuristic AI Interface",
      "Voice Controlled AI Assistant",
      "Real-time System Diagnostics",
      "Cinematic Visual Experience",
      "Iron Man Inspired Design",
      "Personal AI System",
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JARVIS Devs AI",
    alternateName: "Jarvis AI by DEV",
    url: SITE.url,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: "Jarvis Devs AI",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Combined JSON-LD array for injection into <head> */
export function allSchemas() {
  return [
    organizationSchema(),
    personSchema(),
    softwareAppSchema(),
    webSiteSchema(),
  ];
}
