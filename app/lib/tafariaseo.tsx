// app/layout.tsx
import type { Metadata } from 'next'

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
    "Nyeri tourist sites", "Countryside travel Kenya",
    "art residencies in Kenya",
    "artist residency Africa",
    "international artist residencies",
    "creative residencies in East Africa",
    "best art residencies 2025",
    "apply for art residency Kenya",
    "artist retreat in nature",
    "castle artist residency",
    "rural artist residency programs",
    "cross-disciplinary artist residencies",
    "painting residency Kenya",
    "drawing residency Africa",
    "sculpture residency programs",
    "ceramic art residencies",
    "printmaking artist residency",
    "photography residency Kenya",
    "music residency in Africa",
    "dance and choreography residencies",
    "theatre residency opportunities",
    "performance art residency Kenya",
    "film and video art residencies",
    "animation residency Africa",
    "digital media artist residency",
    "VR/AR art residencies",
    "multimedia residency Kenya",
    "writer residency Kenya",
    "poetry and prose residencies",
    "literary residencies in Africa",
    "storytelling retreats East Africa",
    "art and science residency",
    "environmental artist residency",
    "research-based residencies Africa",
    "conservation and art residencies",
    "anthropology residency programs",
    "African art residencies",
    "rural innovation through art",
    "art and agriculture residency",
    "creative sustainability residency",
    "Tafaria nano herbarium art",
    "farm-based artist residencies",
    "cultural immersion residencies Kenya",
    "residency near Aberdare Kenya",
    "art residency near Mt Satima",
    "Kenyan Highlands artist retreat",
    "East Africa art residency location",
    "Tafaria Castle art residency"

  ],
  openGraph: {
    title: "Tafaria Castle | Luxury Accommodation & Arts Center Kenya",
    description: "Kenya's premier castle resort offering unique stays, creative residencies, and adventure in the Aberdare foothills.",
    url: "https://www.tafaria.com",
    siteName: "Tafaria Castle",
    images: [
      {
        url: "https://www.tafaria.com/og-image.jpg",
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
    images: ["https://www.tafaria.com/twitter-card.jpg"],
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
  },
}

// // Structured data component (add to your layout)
// export function JsonLdData() {
//   return (
//     <script type="application/ld+json">
//       {JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "Hotel",
//         "name": "Tafaria Castle & Center for the Arts",
//         "image": "https://www.tafaria.com/images/logo.jpg",
//         "@id": "https://www.tafaria.com",
//         "url": "https://www.tafaria.com",
//         "telephone": "+254-XXX-XXXXXX",
//         "priceRange": "$$$",
//         "address": {
//           "@type": "PostalAddress",
//           "streetAddress": "P.O Box 123",
//           "addressLocality": "Nyeri",
//           "addressRegion": "Central",
//           "postalCode": "10100",
//           "addressCountry": "KE"
//         },
//         "geo": {
//           "@type": "GeoCoordinates",
//           "latitude": "-0.4201",
//           "longitude": "36.9476"
//         },
//         "openingHoursSpecification": {
//           "@type": "OpeningHoursSpecification",
//           "dayOfWeek": [
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday",
//             "Sunday"
//           ],
//           "opens": "08:00",
//           "closes": "20:00"
//         },
//         "sameAs": [
//           "https://www.facebook.com/TafariaCastle",
//           "https://www.instagram.com/TafariaCastle"
//         ]
//       })}
//     </script>
//   )
// }

// // Usage in layout component
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <JsonLdData />
//         {children}
//       </body>
//     </html>
//   )
// }