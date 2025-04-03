import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Header from "./components/header";
import Stories from "./components/stories";
import WhatsAppButton from "./components/whatsappbutton";
import Footer from "./components/footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { DropdownProvider } from "./context/DropdownContext";
import { NavigationProvider } from "./context/NavigationContext";
import { CartProvider } from "./context/CartContext";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Tafaria Castle",
  description:
    "Tafaria Castle & Center for the Arts is located in rural Kenya on a hill, next to the scenic Aberdare ranges overlooking the Laikipia plains and Mt Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
    
        <meta name="description" content="Tafaria Castle - Once upon a Dream" />
      </Head>

      <GoogleTagManager gtmId="G-GZKC1WP7FJ" />

      <body className="min-h-screen flex flex-col bg-white">
        <NextTopLoader />

        <NavigationProvider>
          <DropdownProvider>
            <div className="bg-white flex flex-col">
              <div className="sticky top-0 z-10 w-full">
                {/* Header */}
                <Header />
                {/* Stories */}
                <Stories />
              </div>
              <CartProvider>{children}</CartProvider>
              <Footer />
              <WhatsAppButton />
            </div>
          </DropdownProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}
