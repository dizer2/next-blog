import './globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <div className="wrapper">
            <Navbar />
            {children}
            <Footer />

          </div>
        </div>
      </body>
    </html>
  );
}
