"use client";
import BlogCard from "../components/blogcard";
import { useSearchParams } from 'next/navigation';
import React, { Suspense,useRef,useEffect } from "react"; // Add Suspense import
import Link from 'next/link'; // Import Link from next/link
import { FaAngleLeft } from 'react-icons/fa'; // Import the Font Awesome left arrow icon
import { Barlow_Condensed } from 'next/font/google';

export interface Session {
  title: string;
  description: string;
}
//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const MenuContent = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('name');
  const card = searchParams.get('card'); // Get the card parameter
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({}); // Ref to store card references

  const menuData = [
    {
      "type": "Hospitality",
      "subtypes": [
        {
          "imageUrls": [
            "https://tafaria.com/assets/img/lords%20room%202.jpg",
            "https://tafaria.com/assets/img/lords%20room%202.jpg" // Duplicate
          ],
          "title": "Accommodation",
          "description": "With 80 well-appointed rooms, Tafaria country lodge offers a range of accommodations designed to suit diverse preferences. Guests can select from standard, superior and deluxe rooms, located either within the Castle’s or the country lodge. Room configurations vary to meet different needs with some spacious enough to accommodate three beds, others featuring cozy fireplaces, and interconnecting rooms ideal for families.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/Home%20Carousel8.jpg",
            "https://www.tafaria.com/assets/img/Home%20Carousel2.jpg" // Duplicate
          ],
          "title": "Dining",
          "description": "The restaurant, with seating for over 200 guests, combines indoor dining and a scenic lookout, offering breathtaking views of the surrounding landscape. For a more intimate atmosphere, the cozy coffee lounge inside the Castle, complete with a fireplace, provides the perfect spot for relaxation and unwinding.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/Home%20Carousel2.jpg",
            "https://www.tafaria.com/assets/img/Home%20Carousel2.jpg" // Duplicate
          ],
          "title": "Recreational",
          "description": "Tafaria provides an array of facilities including archery, horse riding and carriage driving. Others include swimming, open-air gym, viking’s pillow, mini-golf, lawn tennis, medieval bowling, basketball, pool table, a dance studio and big-screen cinema. Further, tours of the museum, herbarium, farm & art galleries provide an exceptional experience.",
          "sessions": [] // Empty sessions array
        },
      ]
    },
    {
      "type": "Tsafaria Experience",
      "subtypes": [
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/Archery%20at%20Tafaria%20Castle%20.jpg",
            "https://www.tafaria.com/assets/img/Archery%20at%20Tafaria%20Castle%20.jpg" // Duplicate
          ],
          "title": "Archery",
          "description": "Experience the thrill of archery in a medieval setting, honing your skills with a bow and arrow. Under the guidance of experienced instructors, you'll learn the fundamentals of archery, including stance, aim, and release techniques. This activity is perfect for both beginners and seasoned archers looking to refine their skills.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/Tafaria%20chariot%20riding.jpg",
            "https://www.tafaria.com/assets/img/Tafaria%20chariot%20riding.jpg" // Duplicate
          ],
          "title": "Horseback riding",
          "description": "Enjoy a scenic ride on horseback through beautiful landscapes, perfect for both beginners and experienced riders. Our well-trained horses and knowledgeable guides ensure a safe and enjoyable experience as you explore the stunning surroundings of Tafaria.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/Tafaria%20Cinderella%201.jpg",
            "https://www.tafaria.com/assets/img/Tafaria%20Cinderella%201.jpg" // Duplicate
          ],
          "title": "Horse Carriage driving",
          "description": "Take a leisurely ride in a horse-drawn carriage, experiencing the charm of traditional transport. This relaxing journey allows you to soak in the picturesque views while learning about the history and significance of horse-drawn carriages in the region.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://tafaria.com/assets/img/lords%20room%202.jpg",
            "https://tafaria.com/assets/img/lords%20room%202.jpg" // Duplicate
          ],
          "title": "Medieval bowling",
          "description": "Engage in a fun game of medieval bowling, a unique twist on the classic sport. This activity combines skill and strategy as you aim to knock down pins in a charming outdoor setting, making it a great option for families and groups.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://tafaria.com/assets/img/lords%20room%202.jpg",
            "https://tafaria.com/assets/img/lords%20room%202.jpg" // Duplicate
          ],
          "title": "High altitude swimming",
          "description": "Dive into refreshing waters at high altitudes, surrounded by breathtaking views. This invigorating experience not only offers a chance to cool off but also provides a unique perspective of the stunning landscape that surrounds you.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://tafaria.com/assets/img/lords%20room%202.jpg",
            "https://tafaria.com/assets/img/lords%20room%202.jpg" // Duplicate
          ],
          "title": "Open-air gym",
          "description": "Stay fit and active in our open-air gym, equipped with various exercise stations. Enjoy the fresh air and beautiful scenery while engaging in a workout that suits your fitness level, whether you prefer strength training or cardio exercises.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/mu3.jpg",
            "https://www.tafaria.com/assets/img/mu3.jpg" // Duplicate
          ],
          "title": "A dance studio",
          "description": "Join dance classes in our well-equipped studio, suitable for all skill levels. Whether you're a beginner or an experienced dancer, our classes offer a fun and engaging way to express yourself through movement and rhythm.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/Hiking%204.jpg",
            "https://www.tafaria.com/assets/img/Hiking%204.jpg" // Duplicate
          ],
          "title": "The outdoor Viking’s pillow",
          "description": "Bounce and play on the Viking’s pillow, a fun inflatable attraction for all ages. This unique activity encourages laughter and enjoyment as you jump and play, making it a perfect choice for families looking to have a great time together.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://tafaria.com/assets/img/lords%20room%202.jpg",
            "https://tafaria.com/assets/img/lords%20room%202.jpg" // Duplicate
          ],
          "title": "Mini-golf",
          "description": "Challenge your friends to a round of mini-golf on our creatively designed course. With fun obstacles and engaging themes, this activity is perfect for friendly competition and is suitable for all ages.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://tafaria.com/assets/img/lords%20room%202.jpg",
            "https://tafaria.com/assets/img/lords%20room%202.jpg" // Duplicate
          ],
          "title": "Lawn tennis",
          "description": "Play a game of tennis on our well-maintained lawn courts, perfect for friendly matches. Whether you're a seasoned player or just starting out, our courts provide an excellent environment for enjoying this classic sport.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://tafaria.com/assets/img/lords%20room%202.jpg",
            "https://tafaria.com/assets/img/lords%20room%202.jpg" // Duplicate
          ],
          "title": "Basketball",
          "description": "Shoot some hoops on our basketball court, suitable for casual play or competitive games. Gather your friends for a fun match or practice your skills in a friendly environment.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://tafaria.com/assets/img/lords%20room%202.jpg",
            "https://tafaria.com/assets/img/lords%20room%202.jpg" // Duplicate
          ],
          "title": "Pool table",
          "description": "Enjoy a game of billiards on our pool table, a great way to relax and have fun. Whether you're a beginner or an expert, this activity offers a perfect blend of skill and leisure.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://tafaria.com/assets/img/lords%20room%202.jpg",
            "https://tafaria.com/assets/img/lords%20room%202.jpg" // Duplicate
          ],
          "title": "Big-screen cinema",
          "description": "Watch your favorite movies in our big-screen cinema, offering a comfortable and immersive experience. Enjoy a selection of films in a cozy setting, perfect for a relaxing evening.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://tafaria.com/assets/img/lords%20room%202.jpg",
            "https://tafaria.com/assets/img/lords%20room%202.jpg" // Duplicate
          ],
          "title": "Art tours",
          "description": "Explore the world of art through guided tours, showcasing local and international artists. These tours provide insight into the creative process and the stories behind the artworks.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/IMG_0786.jpg",
            "https://www.tafaria.com/assets/img/IMG_0786.jpg" // Duplicate
          ],
          "title": "Museum tours",
          "description": "Discover history and culture through engaging museum tours, led by knowledgeable guides. These tours offer a deeper understanding of the exhibits and the significance of the artifacts on display.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/IMG_0787.jpg",
            "https://www.tafaria.com/assets/img/IMG_0787.jpg" // Duplicate
          ],
          "title": "Herbarium tours",
          "description": "Learn about plant species and conservation efforts during our informative herbarium tours. These tours provide a unique opportunity to explore the diversity of flora and the importance of preserving our natural environment.",
          "sessions": [] // Empty sessions array
        },
        // Continue for other subtypes...
      ]
    },
    {
      "type": "Conferencing",
      "subtypes": [
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/Home%20Carousel17.jpg",
            "https://www.tafaria.com/assets/img/Home%20Carousel17.jpg" // Duplicate
          ],
          "title": "Meetings",
          "description": "Tafaria conference center is equipped to host upwards of 200 participants, the center is ideal for corporate retreats, seminars, and training sessions. It has multiple breakout spaces, both indoors and outdoors, allowing for flexibility in group activities and discussions.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/arts_landing(1).jpg",
            "https://www.tafaria.com/assets/img/arts_landing(1).jpg" // Duplicate
          ],
          "title": "Large Meetings",
          "description": "For large-scale meetings, performances, seminars or product launches, Tafaria 400-seater auditorium is an ideal space.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/Home%20Carousel10.jpg",
            "https://www.tafaria.com/assets/img/Home%20Carousel10.jpg" // Duplicate
          ],
          "title": "Team Building & Leadership Training",
          "description": "Tafaria's vast outdoors provide ideal spaces for groups in need of spaces for outdoor activities. Team building facilitators are available on request. Tafaria offers a transformative team building and leadership training program rooted in the Tafaria Taxonomy, an innovative leadership & teambuilding framework inspired by nature. The experience includes a tour of the Nano Herbarium, where participants connect with the natural world and gain foundational knowledge of the Tafaria Taxonomy.",
          "sessions": [] // Empty sessions array
        },
      ]
    },
    {
      "type": "Arts",
      "subtypes": [
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/arts_landing3(1).jpg",
            "https://www.tafaria.com/assets/img/arts_landing3(1).jpg" // Duplicate
          ],
          "title": "Arts",
          "description": "Tafaria Center for the Arts has facilities for visual and performing arts. These include studios for fine art, sculpture, fashion design, graphics & print, pottery, software development, beauty, culinary, music recording and a dance studio. This vast center also has an auditorium, training rooms, workshops and galleries and accommodation for artists.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/arts_landing2(1).jpg",
            "https://www.tafaria.com/assets/img/arts_landing2(1).jpg" // Duplicate
          ],
          "title": "Art Residencies & Mentorship",
          "description": "The center offers art residencies to artists in need of a secluded getaway to create away from distractions and collaborate with local rural communities. Further, the center offers sessions in painting, pottery, music, fashion design and sculpture by professional resident artists. Visitors immerse themselves in the arts through guided tours of various art installations and galleries.",
          "sessions": [] // Empty sessions array
        },
      ]
    },
    {
      "type": "Education",
      "subtypes": [
        {
          "imageUrls": [
            "/images/categories/godream.png",
            "/images/categories/godream.png" // Duplicate
          ],
          "title": "goDream Life Skills & Leadership Program",
          "description": "goDream is a Tafaria custom life skills building and leadership program for students that blends creative/arts workshops and fun hands-on activities, ensuring that each student discovers new talents, develops practical...",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "/images/categories/3.png",
            "/images/categories/3.png" // Duplicate
          ],
          "title": "Museum",
          "description": "Tafaria Evolution Science Museum offers a captivating journey through human history, geology, and Kenyan heritage. Visitors here explore applied visual arts illustrating the dynamic forces of geology and volcanoes, and the remarkable story of human evolution, from early ancestors to modern Homo sapiens, evolution of communication technology, and a numismatic display tracing Kenya’s currency development. With expert guides, audio guides and engaging displays, Tafaria Museum provides an immersive learning experience that combines science, history and art.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "/images/categories/1.png",
            "/images/categories/1.png" // Duplicate
          ],
          "title": "Art Tours",
          "description": "The Tafaria Art Tour is an immersive educative journey through creativity, featuring both outdoor installations and indoor galleries that showcase diverse works by local and international artists. This inspiring walk-through introduces visitors to a variety of art forms, from sculptures and murals to contemporary mixed media and installations with each piece designed to spark imagination and enrich cultural appreciation.",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "/images/categories/2.png",
            "/images/categories/2.png" // Duplicate
          ],
          "title": "Tafaria Nano Herbarium",
          "description": "The Tafaria Nano Herbarium offers a unique, educational experience, guiding visitors toward environmental consciousness and a deeper understanding of botany promoting conservation through the Arts...",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "/images/categories/1.png",
            "/images/categories/1.png" // Duplicate
          ],
          "title": "Tafaria Nano Farm",
          "description": "Tafaria Nano Farm offers a rich agricultural experience where visitors explore sustainable farming in an inspiring, hands-on environment. The farm features a diverse orchard, a vegetable garden, greenhouses, and a variety of livestock...",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "/images/categories/3.png",
            "/images/categories/1.png" // Duplicate
          ],
          "title": "Community Engagement",
          "description": "Tafaria supports community based initiatives chiefly: Creating community linkages with visiting local and international artists for training & skills building, mentorships and capacity building. Apprenticeship program for rural based youth in diverse skills such as housekeeping, landscaping, horsemanship, tailoring, pottery, craftsmanship, carpentry, welding, masonry, curators etc. Graduations are held periodically, awarding the participants with parchments of merit that they use to seek engagements. Ongoing support in the establishment of the Happy Place, a school located next to Tafaria for the underprivileged in society. Sustainability: Tafaria is committed to sustainable practices, utilizing eco-friendly materials and methods in its operations and pursues responsible tourism and environmental stewardship.",
          "sessions": [] // Empty sessions array
        }
      ]
    },
    {
      "type": "Conferencing",
      "subtypes": [
        {
          "imageUrls": [
            "/images/categories/godream.png",
            "/images/categories/godream.png" // Duplicate
          ],
          "title": "goDream Life Skills & Leadership Program",
          "description": "goDream is a Tafaria custom life skills building and leadership program for students that blends creative/arts workshops and fun hands-on activities, ensuring that each student discovers new talents, develops practical...",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "/images/categories/1.png",
            "/images/categories/1.png" // Duplicate
          ],
          "title": "Community Engagement",
          "description": "Tafaria supports community based initiatives chiefly: Creating community linkages with visiting local and international artists for training & skills building, mentorships and capacity building...",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "/images/categories/2.png",
            "/images/categories/2.png" // Duplicate
          ],
          "title": "Tafaria Nano Herbarium",
          "description": "The Tafaria Nano Herbarium offers a unique, educational experience, guiding visitors toward environmental consciousness and a deeper understanding of botany promoting conservation through the Arts...",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "/images/categories/3.png",
            "/images/categories/3.png" // Duplicate
          ],
          "title": "Tafaria Nano Farm",
          "description": "Tafaria Nano Farm offers a rich agricultural experience where visitors explore sustainable farming in an inspiring, hands-on environment. The farm features a diverse orchard, a vegetable garden, greenhouses, and a variety of livestock...",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "/images/categories/2.png",
            "/images/categories/2.png" // Duplicate
          ],
          "title": "Museum",
          "description": "Tafaria Evolution Science Museum offers a captivating journey through human history, geology, and Kenyan heritage. Visitors here explore applied visual arts illustrating the dynamic forces of geology and volcanoes...",
          "sessions": [] // Empty sessions array
        }
      ]
    },
    {
      "type": "Custom Programs",
      "subtypes": [
        {
          "imageUrls": [
            "/images/categories/3.png",
            "/images/categories/3.png" // Duplicate
          ],
          "title": "Tafaria Nano Farm",
          "description": "Tafaria Nano Farm offers a rich agricultural experience where visitors explore sustainable farming in an inspiring, hands-on environment. The farm features a diverse orchard, a vegetable garden, greenhouses, and a variety of livestock...",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "/images/categories/2.png",
            "/images/categories/2.png" // Duplicate
          ],
          "title": "Museum",
          "description": "Tafaria Evolution Science Museum offers a captivating journey through human history, geology, and Kenyan heritage. Visitors here explore applied visual arts illustrating the dynamic forces of geology and volcanoes...",
          "sessions": [] // Empty sessions array
        },
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/Home%20Carousel6.jpg",
            "https://www.tafaria.com/assets/img/Home%20Carousel6.jpg" // Duplicate
          ],
          "title": "TeamOut ​",
          "description": "TeamOut is a teambuilding retreat experience for corporate teams, designed to offer a holistic experience that combines learning, inspiration, and play to energize and arm teams with sustainable nature inspired teamwork skills.​",
          "sessions": [
            {
              "title": "Team Building Session: The Tafaria Taxonomy Approach",
              "description": "This immersive session uses the nature-inspired Tafaria Taxonomy to enhance teamwork. It helps teams identify their strengths and gaps and how to harness their diverse skills to sustainably enhance team spirit and effectiveness."
            },
            {
              "title": "Creative Problem Solving Workshop",
              "description": "A workshop designed to foster innovative thinking and collaborative problem-solving skills among team members."
            },
            {
              "title": "Leadership Development Program",
              "description": "An intensive program aimed at developing leadership skills through experiential learning and mentorship."
            }
          ]
        },
        // Continue for other subtypes...
      ]
    },
    {
      "type": "Blogs",
      "subtypes": [
        {
          "imageUrls": [
            "https://www.tafaria.com/assets/img/Piano_tafaria-min-ofzzltgcxsqzc8kqnlnm4s1o852rgtnkntg1ghfg4w.jpg",
            "https://www.tafaria.com/assets/img/Piano_tafaria-min-ofzzltgcxsqzc8kqnlnm4s1o852rgtnkntg1ghfg4w.jpg" // Duplicate
          ],
          "title": "goDream Arts ​ ​ ​",
          "description": "goDream Arts is a Tafaria custom arts program for students that combines exposure into the world of applied arts, creative/arts workshops with local community for impact and cultural exchange and a Tafaria mission inspiring session on visioning and goal setting.​",
          "sessions": [
            {
              "title": "Inspiring Once Upon a Dream Session",
              "description": "An inspiring tour of the Tafaria Castle & Center for the Arts followed by the 'Once Upon a Dream' session to inspire students on goal setting and following them and managing peer pressure."
            },
            {
              "title": "Applied Arts in Action",
              "description": "A session on how the arts have been used at Tafaria museum, farm, and herbarium to simplify science and for social messaging."
            },
            {
              "title": "Community Impact and Cultural Exchange",
              "description": "An interactive & ideation session with local students covering music, pottery, dance, and fine art with leisure and bonding breaks."
            },
            {
              "title": "Exhibition/Talent Show",
              "description": "A showcase event where students can display their talents and creativity through various forms of art."
            }
          ]
        },
        // Continue for other subtypes...
      ]
    },
  ];
 
  const handleBackClick = () => {
    window.location.href = '/'; // Force reload the home page
  };

  const categoryData = menuData.find(
    category => category.type.toLowerCase() === title?.toLowerCase()
  );
  useEffect(() => {
    // Scroll to the specific card if the card parameter is present
    if (card) {
      const targetCard = cardRefs.current[card];
      if (targetCard) {
        // Calculate the position to scroll to, adjusting for fixed header height
        const headerOffset = 360; // Adjust this value based on your fixed header height
        const elementPosition = targetCard.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [card]);
  
  return (
    <div className="w-full">
<h1 className={`${barlow_condensed.className} text-2xl fixed bg-white z-10 w-full font-bold text-center pt-4 tracking-tight text-[#902729] capitalize border-b-2 border-[#902729] pb-4 mx-auto flex items-center`}>
  <Link href="/" onClick={handleBackClick} className="text-[#94723C] hover:underline mx-5">
  <FaAngleLeft className="mr-2" />
  </Link>
  {title}
</h1>
<div className="mt-20">
      {categoryData ? (
        categoryData.subtypes.map((item, index) => (
          <div key={index} ref={(el) => { if (el) cardRefs.current[item.title] = el; }} className="mb-4">
          <BlogCard
            key={index}
            imageUrls={item.imageUrls}
            title={item.title}
            description={item.description}
            sessions={item.sessions}
          />
          </div>
        ))
      ) : (
        <div className="text-center py-8 text-gray-600">
          No content found for this category
        </div>
      )}
    </div>
    </div>
  );
};

// Main Menu component with Suspense
export default function Menu() {
  return (
    <Suspense fallback={
      <div className="w-full flex justify-center p-8">
        <div className="animate-pulse">Loading...</div>
      </div>
    }>
      <MenuContent />
    </Suspense>
  );
}