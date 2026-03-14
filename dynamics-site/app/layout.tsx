import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

// Professional SEO & Meta Data Configuration
export const metadata: Metadata = {
  title: 'DynamicsPro | Microsoft Dynamics 365 Partner',
  description: 'DynamicsPro designs, deploys and scales Dynamics 365 CRM and ERP solutions for enterprise teams in the US, UK and Australia.',
  keywords: 'Microsoft Dynamics 365 partner, CRM implementation, ERP migration, Dynamics 365 consulting US UK Australia',
  
  // Canonical URL (Tells Google this is the original source)
  alternates: {
    canonical: 'https://dynamics-site.vercel.app', 
  },

  // Open Graph (For LinkedIn, Facebook, WhatsApp previews)
  openGraph: {
    title: 'DynamicsPro | Microsoft Dynamics 365 Partner',
    description: 'DynamicsPro designs, deploys and scales Dynamics 365 CRM and ERP solutions for enterprise teams in the US, UK and Australia.',
    url: 'https://dynamics-site.vercel.app',
    siteName: 'DynamicsPro',
    images: [
      {
        url: '/og-image.jpg', // Social media banner image
        width: 1200,
        height: 630,
        alt: 'DynamicsPro - Microsoft Dynamics 365 Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card (For Twitter/X previews)
  twitter: {
    card: 'summary_large_image',
    title: 'DynamicsPro | Microsoft Dynamics 365 Partner',
    description: 'DynamicsPro designs, deploys and scales Dynamics 365 CRM and ERP solutions for enterprise teams in the US, UK and Australia.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Main content render hoga */}
        {children}
        
        {/* Footer har page ke end mein automatic aayega */}
        <Footer />
      </body>
    </html>
  );
}