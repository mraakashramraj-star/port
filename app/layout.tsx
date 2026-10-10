import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mraakashramraj-star.vercel.app"),
  title: "M.R. Aakash | Full-Stack Developer Portfolio",
  description:
    "Explore M.R. Aakash’s developer portfolio featuring full-stack web applications, AI and NLP projects, healthcare software, technical skills, internship experience, and professional background.",
  authors: [{ name: "M.R. Aakash", url: PERSONAL_INFO.github }],
  keywords: [
    "M.R. Aakash",
    "Aakash Full-Stack Developer",
    "Aakash PSNA",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "FastAPI",
    "Hugging Face",
    "Python",
    "Tamil Nadu Developer",
    "Portfolio",
  ],
  creator: "M.R. Aakash",
  publisher: "M.R. Aakash",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "M.R. Aakash | Full-Stack Developer Portfolio",
    description:
      "Explore M.R. Aakash’s developer portfolio featuring full-stack web applications, AI and NLP projects, healthcare software, technical skills, internship experience, and professional background.",
    siteName: "M.R. Aakash Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 1000,
        alt: "M.R. Aakash — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.R. Aakash | Full-Stack Developer Portfolio",
    description:
      "Explore M.R. Aakash’s developer portfolio featuring full-stack web applications, AI and NLP projects, healthcare software, technical skills, and internship experience.",
    images: ["/avatar.jpg"],
  },
  icons: {
    icon: "/avatar.jpg",
    apple: "/avatar.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSONAL_INFO.fullName,
  jobTitle: "Full-Stack Developer",
  description:
    "Information Technology undergraduate and Full-Stack Developer specializing in modern web interfaces, Python & FastAPI backends, and practical AI applications.",
  email: PERSONAL_INFO.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dindigul",
    addressRegion: "Tamil Nadu",
    addressCountry: "India",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "PSNA College of Engineering and Technology",
  },
  sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#07080b] text-[#f8fafc] font-sans antialiased selection:bg-blue-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
