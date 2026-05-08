import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import ClientFX from "@/app/components/ClientFX";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://www.ovlox.dev";
const SITE_NAME = "Ovlox";
const DEFAULT_TITLE = "Ovlox — Your project's single source of truth";
const DEFAULT_DESCRIPTION =
  "Ovlox connects every tool your team uses — GitHub, Jira, Slack, Linear, Notion — and turns scattered project signals into a single, AI-powered source of truth.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Ovlox",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "project management",
    "engineering visibility",
    "GitHub Jira Slack integration",
    "AI project digest",
    "team alignment",
    "single source of truth",
    "Ovlox",
  ],
  authors: [{ name: "Ovlox" }],
  creator: "Ovlox",
  publisher: "Ovlox",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/brand/favicon.ico" },
      { url: "/brand/ovlox-icon.png", type: "image/png" },
    ],
    apple: "/brand/ovlox-icon.png",
    shortcut: "/brand/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ovlox — Your project's single source of truth",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <ClientFX />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: SITE_NAME,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: SITE_URL,
              description: DEFAULT_DESCRIPTION,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
