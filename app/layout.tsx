import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Header from "./components/header";
import Stories from "./components/stories";
import WhatsAppButton from "./components/whatsappbutton";
import Footer from "./components/footer";
import { GoogleTagManager } from '@next/third-parties/google'



export const metadata: Metadata = {
  title: "Tafaria Castle",
  description: "Tafaria Castle & Center for the Arts is located in rural Kenya on a hill, next to the scenic Aberdare ranges overlooking the Laikipia plains and Mt Kenya. ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-GZKC1WP7FJ" />
      <body>
        <div className="bg-white flex flex-col">
          <Head>
            <title>Tafaria Castle</title>
            <meta
              name="description"
              content="Tafaria Castle - Once upon a Dream"
            />
          </Head>

          <div className="sticky top-0 z-10 w-full">
            {/* Header */}
            <Header />

            {/* Stories */}
            <Stories />

          </div>

          {children}

          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
