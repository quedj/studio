
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'QUE Digital | Technical Architecture & Visual Design',
  description: 'Expert Marketplace App Development and Visual Architecture. Engineering digital solutions with precision.',
  icons: {
    icon: [
      { url: '/images/my-logo.png', sizes: 'any' },
      { url: '/images/my-logo.png', type: 'image/png' },
    ],
    shortcut: '/images/my-logo.png',
    apple: '/images/my-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
