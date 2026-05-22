import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { SITE, PAGES, generatePageMeta, allSchemas } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ── SEO Metadata ──────────────────────────────────────────────

const homePage = PAGES.home;
const pageMeta = generatePageMeta(homePage);

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: pageMeta.title,
    template: `%s | ${SITE.name}`,
  },
  description: pageMeta.description,
  keywords: pageMeta.keywords,
  authors: pageMeta.authors,
  creator: pageMeta.creator,
  publisher: pageMeta.publisher,
  robots: pageMeta.robots,
  alternates: pageMeta.alternates,
  openGraph: pageMeta.openGraph,
  twitter: pageMeta.twitter,

  // Verification placeholders — replace values with real codes
  verification: {
    google: SITE.googleSiteVerification,
  },

  // Icons & branding
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // App-level meta
  applicationName: SITE.name,
  appleWebApp: {
    title: SITE.shortName,
    statusBarStyle: "black-translucent",
    capable: true,
  },
  formatDetection: {
    telephone: false,
  },
  category: "technology",
};

// ── Root Layout ───────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schemas = allSchemas();

  return (
    <html
      lang={SITE.language}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data for rich search results */}
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* Google Analytics placeholder — replace G-XXXXXXXXXX with real ID */}
        {SITE.gaMeasurementId !== "G-XXXXXXXXXX" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaMeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${SITE.gaMeasurementId}');
                `,
              }}
            />
          </>
        )}

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="relative min-h-full bg-background text-foreground grain">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
