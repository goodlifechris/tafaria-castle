import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/header";
import Stories from "./components/stories";
import WhatsAppButton from "./components/whatsappbutton";
import Footer from "./components/footer";
// import { GoogleTagManager } from "@next/third-parties/google";
import { DropdownProvider } from "./context/DropdownContext";
import { NavigationProvider } from "./context/NavigationContext";
import { CartProvider } from "./context/CartContext";
import NextTopLoader from "nextjs-toploader";
// For the <head> section
 const GoogleTagManagerHead = () => (
  <Script id="gtm-head" strategy="afterInteractive">
    {`
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NW6CBG57');
    `}
  </Script>
)

// For the <body> section
 const GoogleTagManagerBody = () => (
  <noscript>
    <iframe 
      src={`https://www.googletagmanager.com/ns.html?id=GTM-NW6CBG57`}
      height="0" 
      width="0" 
      style={{display:'none',visibility:'hidden'}}
      aria-hidden="true"
      tabIndex={-1}
    />
  </noscript>
)
export const metadata: Metadata = {
  title: {
    default: "Tafaria Castle & Center for the Arts | Luxury Castle Resort Kenya",
    template: "%s | Tafaria Castle"
  },
  description: "Tafaria Castle & Center for the Arts is located in rural Kenya on a hill, next to the scenic Aberdare ranges overlooking the Laikipia plains and Mt Kenya.",
  keywords: [
    // Brand Keywords
    "Tafaria Castle", "Tafaria Kenya", "Tafaria Lodge", 
    "Tafaria Castle & Center for Arts", "Tafaria booking",
    "Visit Tafaria", "Tafaria contact", "Tafaria experiences",

    // Accommodation (20+ keywords)
    "Castle-style accommodation Kenya", "Family-friendly lodges Kenya",
    "Full-board accommodation Kenya", "Deluxe rooms Aberdare",
    "Unique places Nyeri", "Romantic countryside retreats",
    "Hotels in Nyeri", "Hotels in Nyahururu", 
    "Countryside hotels Kenya", "Upcountry lodges",

    // Leisure Activities (15+ keywords)
    "Archery Kenya", "Horse riding Kenya", "Mini golf Nyeri",
    "Swimming pool Tafaria", "Tennis court Kenya",
    "Leisure activities Aberdare", "Kids playgrounds Kenya",
    "Outdoor gym Kenya", "Horse chariots", "Horse carriage",
    "Pool table", "Gym Tafaria",

    // Packages & Deals (10+ keywords)
    "Once Upon a Dream package", "Escape Ordinary day pass",
    "All-inclusive getaways Kenya", "Weekend packages Kenya",
    "Holiday packages Aberdare", "Budget retreats Kenya",
    "Valentine getaway Kenya", "Christmas packages Tafaria",

    // Arts & Residency (20+ keywords)
    "Artist residencies Kenya", "Painting workshops Kenya",
    "Art lessons Tafaria", "Tafaria Foundation",
    "Film residencies Kenya", "Pottery residencies",
    "Creative workshops Kenya", "Installation art Kenya",
    "Eco-art residencies", "Writing workshops Kenya",
    "Animation residencies", "Sound recording studios Kenya",

    // Creative Technology (10+ keywords)  
    "Robotics studio Kenya", "Animation lab Kenya",
    "STEAM Kits Kenya", "Technology and arts integration",
    "Coding workshops Kenya", "Tafaria innovation hub",

    // Education & Training (10+ keywords)
    "Tafaria Taxonomy", "goDream leadership program",
    "Life-skills training Kenya", "Experiential learning",
    "Student empowerment Kenya", "School trips Kenya",
    "Art tours Tafaria", "Tafaria Herbarium",

    // Conference & Corporate (10+ keywords)
    "Corporate retreat Kenya", "Conference center Aberdare",
    "Team-building retreats", "Meeting venues Nyeri",
    "Executive strategy sessions", "Leadership workshops Kenya",

    // Nature & Conservation (10+ keywords)
    "Nature trails Kenya", "Satima Peak hike",
    "Aberdare picnic spots", "Birdwatching Laikipia",
    "Conservation programs", "Eco-tourism Aberdare",
    "Indigenous plants herbarium",

    // Museum & Culture (10+ keywords)
    "Tafaria Museum", "Evolution Science Museum",
    "Cultural heritage Kenya", "Storytelling exhibitions",
    "Art gallery Kenya", "Museum tours Tafaria",
    "Interactive cultural experiences",

    // Adventure & Exploration (10+ keywords)
    "Hiking Satima Peak", "Aberdare forest adventures",
    "Nature photography Kenya", "Countryside hiking",
    "Photography trails", "Adventure tourism Nyeri",

    // Events & Holidays (15+ keywords)
    "Castle wedding Kenya", "Birthday getaways",
    "Christmas packages", "Valentine's retreat Kenya",
    "Mother's Day brunch", "Easter holiday Aberdare",
    "Special events Tafaria", "Group celebrations",
    "Wedding Packages Kenya",

    // Dining & Cuisine (10+ keywords)
    "Restaurants in Nyeri", "Castle dining Kenya",
    "Upcountry restaurants", "Farm-to-table Kenya",
    "Romantic dining Aberdare",

    // Filmmaking & Photography (10+ keywords)
    "Photography retreats", "Filmmaking Kenya",
    "Scenic locations Kenya", "Photographer's paradise",
    "Nature photography", "Documentary shooting Kenya",

    // Regional Travel (10+ keywords)
    "Things to do Nyeri", "Places visit Laikipia",
    "Travel Aberdare", "Weekend getaways Nairobi",
    "Nyeri tourist sites", "Countryside travel Kenya"
  ],
  openGraph: {
    title: "Tafaria Castle | Luxury Accommodation & Arts Center Kenya",
    description: "Kenya's premier castle resort offering unique stays, creative residencies, and adventure in the Aberdare foothills.",
    url: "https://www.tafaria.com",
    siteName: "Tafaria Castle",
    images: [
      {
        url: "https://tafariabucket.fra1.cdn.digitaloceanspaces.…oceanspaces.com/images/121kr5y1WqbmUrprl_iMIA.jpg",
        width: 1200,
        height: 630,
        alt: "Tafaria Castle aerial view",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tafaria Castle | Unique Kenya Castle Resort",
    description: "Luxury castle stays, artist workshops & nature adventures in Aberdare",
    creator: "@TafariaCastle",
    images: ["https://tafariabucket.fra1.cdn.digitaloceanspaces.…oceanspaces.com/images/_TpHwX5AKuuE94KuxjJJbA.jpg"],
  },
  alternates: {
    canonical: "https://www.tafaria.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#5E3217',
  category: 'travel & hospitality',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">


<head>
<Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-MWY4ZJLMPG`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MWY4ZJLMPG');
  `}
        </Script>
        <GoogleTagManagerHead />
      </head>

      <body className="min-h-screen flex flex-col bg-white">
      <GoogleTagManagerBody />
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
