import localFont from 'next/font/local'
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const gayathri = localFont({
  src: '../../src/fonts/Gayathri-Regular.woff2',
  variable: "--font-gayathri",
  display: 'swap', 
});
const cormorant = localFont({
  src: '../../src/fonts/Cormorant-Light.woff2',
  variable: "--font-cormorant",
  display: 'swap',
  
});

export const metadata = {
  title: "Gurupavanapuram",
  description: "Where silence speaks through stars, and wisdom flows from tradition.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${gayathri.variable} ${cormorant.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
