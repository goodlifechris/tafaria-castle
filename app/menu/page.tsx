"use client"
import BlogCard from "../components/blogcard";
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from "react"; // Add Suspense import

const MenuContent = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('name');

  const menuData = [
  {
    "type": "Hospitality",
    "subtypes": [
      {
        "imageUrl": "https://tafaria.com/assets/img/lords%20room%202.jpg",
        "title": "Accommodation",
        "description": "With 80 well-appointed rooms, Tafaria country lodge offers a range of accommodations designed to suit diverse preferences. Guests can select from standard, superior and deluxe rooms, located either within the Castle’s or the country lodge. Room configurations vary to meet different needs with some spacious enough to accommodate three beds, others featuring cozy fireplaces, and interconnecting rooms ideal for families."
      },
      {
        "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel8.jpg",
        "title": "Dining",
        "description": "The restaurant, with seating for over 200 guests, combines indoor dining and a scenic lookout, offering breathtaking views of the surroundin landscape. For a more intimate atmosphere, the cozy coffee lounge inside the Castle, complete with a fireplace, provides the perfect spot for relaxation and unwinding."
      },
      {
        "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel2.jpg",
        "title": "Recreational",
        "description": " Tafaria provides an array of facilities including archery, horse riding and carriage driving. Others include swimming, open-air gym, viking’s pillow, mini-golf, lawn tennis, medieval bowling, basketball, pool table, a dance studi and big-screen cinema. Further, tours of the museum, herbarium, farm & art galleries provides an exceptional experience.  "
      },
     
    ]
  }, 
  {
    "type": "Conferencing",
    "subtypes": [
      {
        "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel17.jpg",
        "title": "Meetings",
        "description": "Tafaria conference center is equipped to host upwards of 200 participants, the center is ideal for corporate retreats, seminars, and training sessions. It has multiple breakout spaces, both indoors and outdoors, allowing for flexibility in group activities and discussions."      },
      {
        "imageUrl": "https://www.tafaria.com/assets/img/arts_landing(1).jpg",
        "title": "Large Meetings",
        "description": "For large-scale meetings, performances, seminars or product launches, Tafaria 400-seater auditorium is an ideal space"   },
      {
        "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel10.jpg",
        "title": "Team Building & Leadership Training",
        "description": "Tafaria vast outdoors provide ideal spaces for groups in need of spaces for outdoor activities. Team buliding facilitators are available on request. Tafaria offers a transformative team building and leadership training program rooted in the Tafaria Taxonomy, an innovative leadership & teambuilding framework inspired by nature. The experience includes a tour of the Nano Herbarium, where participants connect with the natural world and gain foundational knowledge of the Tafaria Taxonomy."
        },
   
    ]
  },
  {
    "type": "Arts",
    "subtypes": [
      {
        "imageUrl": "https://www.tafaria.com/assets/img/arts_landing3(1).jpg",
        "title": "Arts",
        "description": "Tafaria Center for the Arts has facilities for visual and performing arts. These include studios for fine art, sculpture, fashion design, graphics & print, pottery, software development, beauty, culinary, music recording and a dance studio. This vast center also has an auditorium, training rooms, workshops and galleries and accommodation for artists."   },
      {
        "imageUrl": "https://www.tafaria.com/assets/img/arts_landing2(1).jpg",
        "title": "Art Residencies & Mentorship",
        "description": "The center offers art residencies to artists in need of a secluded getaway to create away from distractions and collaborate with local rural communities. Further, the center offers sessions in painting, pottery, music, fashion design and sculpture by professional resident artists. Visitors immerse themselves in the arts through guided tours of various art installations and galleries."      },
      
    ]
  },
  {
    "type": "Education",
    "subtypes": [
      {
        "imageUrl": "/images/categories/godream.png",
        "title": "goDream Life Skills & Leadership Program",
        "description": "goDream is a Tafaria custom life skills building and leadership program for students that blends creative/arts workshops and fun hands-on activities, ensuring that each student discovers new talents, develops practical..."
      },
      {
        "imageUrl": "/images/categories/3.png",
        "title": "Museum",
        "description": "Tafaria Evolution Science Museum offers a captivating journey through human history, geology, and Kenyan heritage. Visitors here explore applied visual arts illustrating the dynamic forces of geology and volcanoes, and the remarkable story of human evolution, from early ancestors to modern Homo sapiens, evolution of communication technology, and a numismatic display tracing Kenya’s currency development. With expert guides, audio guides and engaging displays, Tafaria Museum provides an immersive learning experience that combines science, history and art." },
      {
        "imageUrl": "/images/categories/1.png",
        "title": "Art Tours",
        "description": "The Tafaria Art Tour is an immersive educative journey through creativity, featuring both outdoor installations and indoor galleries that showcase diverse works by local and international artists. This inspiring walk-through introduces visitors to a variety of art forms, from sculptures and murals to contemporary mixed media and installations with each piece designed to spark imagination and enrich cultural appreciation."      },
      {
        "imageUrl": "https://www.tafaria.com/assets/img/IMG_0786.jpg",
        "title": "Tafaria Nano Herbarium",
        "description": "The Tafaria Nano Herbarium offers a unique, educational experience, guiding visitors toward environmental consciousness and a deeper understanding of botany promoting conservation through the Arts..."
      },
      {
        "imageUrl": "https://www.tafaria.com/assets/img/cu1.jpg",
        "title": "Tafaria Nano Farm",
        "description": "Tafaria Nano Farm offers a rich agricultural experience where visitors explore sustainable farming in an inspiring, hands-on environment. The farm features a diverse orchard, a vegetable garden, greenhouses, and a variety of livestock..."
      },
      {
        "imageUrl": "https://www.tafaria.com/assets/img/Hiking%204.jpg",
        "title": "Community Engagement",
        "description": "Tafaria supports community based initiatives chiefly: Creating community linkages with visiting local and international artists for training & skills building, mentorships and capacity building. Apprenticeship program for rural based youth in diverse skills such as housekeeping, landscaping, horsemanship, tailoring, pottery, craftmanship, carpentry, welding, masonary, curators etc. Graduations are held periodically , awarding the participants with parchments of merit that they use to seek engagements. Ongoing support in the establishment of the Happy Place, a school located next to Tafaria for the underprivileged in society. Sustainability: Tafaria is committed to sustainable practices, utilizing ecofriendly materials and methods in its operations and pursues responsible tourism and environmental stewardship."
      }
    ]
  },
  {
    "type": "Conferencing",
    "subtypes": [
      {
        "imageUrl": "/images/categories/godream.png",
        "title": "goDream Life Skills & Leadership Program",
        "description": "goDream is a Tafaria custom life skills building and leadership program for students that blends creative/arts workshops and fun hands-on activities, ensuring that each student discovers new talents, develops practical..."
      },
      {
        "imageUrl": "/images/categories/1.png",
        "title": "Community Engagement",
        "description": "Tafaria supports community based initiatives chiefly: Creating community linkages with visiting local and international artists for training & skills building, mentorships and capacity building..."
      },
      {
        "imageUrl": "/images/categories/2.png",
        "title": "Tafaria Nano Herbarium",
        "description": "The Tafaria Nano Herbarium offers a unique, educational experience, guiding visitors toward environmental consciousness and a deeper understanding of botany promoting conservation through the Arts..."
      },
      {
        "imageUrl": "/images/categories/3.png",
        "title": "Tafaria Nano Farm",
        "description": "Tafaria Nano Farm offers a rich agricultural experience where visitors explore sustainable farming in an inspiring, hands-on environment. The farm features a diverse orchard, a vegetable garden, greenhouses, and a variety of livestock..."
      },
      {
        "imageUrl": "/images/categories/2.png",
        "title": "Museum",
        "description": "Tafaria Evolution Science Museum offers a captivating journey through human history, geology, and Kenyan heritage. Visitors here explore applied visual arts illustrating the dynamic forces of geology and volcanoes..."
      }
    ]
  },

];
const categoryData = menuData.find(
  category => category.type.toLowerCase() === title?.toLowerCase()
);

  return <div className="w-full">   
    <h1 className="text-3xl font-bold text-center my-8 tracking-tight text-[#94723C] capitalize border-b-2 border-[#902729] pb-4 max-w-2xl mx-auto">
      {title}
    </h1>
    {categoryData ? (
        categoryData.subtypes.map((item, index) => (
          <BlogCard
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
          />
        ))
      ) : (
        <div className="text-center py-8 text-gray-600">
          No content found for this category
        </div>
      )}
  </div>
  }

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