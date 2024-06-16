import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Keepers Pal',
  description: 'Keepers Pal App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/note.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
