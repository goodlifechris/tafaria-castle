"use client";
import BlogCard from "../components/blogcard";
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from "react"; // Add Suspense import
import Link from 'next/link'; // Import Link from next/link
import { FaAngleLeft } from 'react-icons/fa'; // Import the Font Awesome left arrow icon

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
          "description": "The restaurant, with seating for over 200 guests, combines indoor dining and a scenic lookout, offering breathtaking views of the surrounding landscape. For a more intimate atmosphere, the cozy coffee lounge inside the Castle, complete with a fireplace, provides the perfect spot for relaxation and unwinding."
        },
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel2.jpg",
          "title": "Recreational",
          "description": "Tafaria provides an array of facilities including archery, horse riding and carriage driving. Others include swimming, open-air gym, viking’s pillow, mini-golf, lawn tennis, medieval bowling, basketball, pool table, a dance studio and big-screen cinema. Further, tours of the museum, herbarium, farm & art galleries provide an exceptional experience."
        },
      ]
    },
    {
      "type": "Conferencing",
      "subtypes": [
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel17.jpg",
          "title": "Meetings",
          "description": "Tafaria conference center is equipped to host upwards of 200 participants, the center is ideal for corporate retreats, seminars, and training sessions. It has multiple breakout spaces, both indoors and outdoors, allowing for flexibility in group activities and discussions."
        },
        {
          "imageUrl": "https://www.tafaria.com/assets/img/arts_landing(1).jpg",
          "title": "Large Meetings",
          "description": "For large-scale meetings, performances, seminars or product launches, Tafaria 400-seater auditorium is an ideal space."
        },
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel10.jpg",
          "title": "Team Building & Leadership Training",
          "description": "Tafaria's vast outdoors provide ideal spaces for groups in need of spaces for outdoor activities. Team building facilitators are available on request. Tafaria offers a transformative team building and leadership training program rooted in the Tafaria Taxonomy, an innovative leadership & teambuilding framework inspired by nature. The experience includes a tour of the Nano Herbarium, where participants connect with the natural world and gain foundational knowledge of the Tafaria Taxonomy."
        },
      ]
    },
    {
      "type": "Arts",
      "subtypes": [
        {
          "imageUrl": "https://www.tafaria.com/assets/img/arts_landing3(1).jpg",
          "title": "Arts",
          "description": "Tafaria Center for the Arts has facilities for visual and performing arts. These include studios for fine art, sculpture, fashion design, graphics & print, pottery, software development, beauty, culinary, music recording and a dance studio. This vast center also has an auditorium, training rooms, workshops and galleries and accommodation for artists."
        },
        {
          "imageUrl": "https://www.tafaria.com/assets/img/arts_landing2(1).jpg",
          "title": "Art Residencies & Mentorship",
          "description": "The center offers art residencies to artists in need of a secluded getaway to create away from distractions and collaborate with local rural communities. Further, the center offers sessions in painting, pottery, music, fashion design and sculpture by professional resident artists. Visitors immerse themselves in the arts through guided tours of various art installations and galleries."
        },
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
          "description": "Tafaria Evolution Science Museum offers a captivating journey through human history, geology, and Kenyan heritage. Visitors here explore applied visual arts illustrating the dynamic forces of geology and volcanoes, and the remarkable story of human evolution, from early ancestors to modern Homo sapiens, evolution of communication technology, and a numismatic display tracing Kenya’s currency development. With expert guides, audio guides and engaging displays, Tafaria Museum provides an immersive learning experience that combines science, history and art."
        },
        {
          "imageUrl": "/images/categories/1.png",
          "title": "Art Tours",
          "description": "The Tafaria Art Tour is an immersive educative journey through creativity, featuring both outdoor installations and indoor galleries that showcase diverse works by local and international artists. This inspiring walk-through introduces visitors to a variety of art forms, from sculptures and murals to contemporary mixed media and installations with each piece designed to spark imagination and enrich cultural appreciation."
        },
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
          "description": "Tafaria supports community based initiatives chiefly: Creating community linkages with visiting local and international artists for training & skills building, mentorships and capacity building. Apprenticeship program for rural based youth in diverse skills such as housekeeping, landscaping, horsemanship, tailoring, pottery, craftsmanship, carpentry, welding, masonry, curators etc. Graduations are held periodically, awarding the participants with parchments of merit that they use to seek engagements. Ongoing support in the establishment of the Happy Place, a school located next to Tafaria for the underprivileged in society. Sustainability: Tafaria is committed to sustainable practices, utilizing eco-friendly materials and methods in its operations and pursues responsible tourism and environmental stewardship."
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
    {
      "type": "Custom Programs",
      "subtypes": [
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel6.jpg",
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
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel3.jpg",
          "title": "goLead - Leading Naturally​",
          "description": "goLead program is designed to inspire and equip leaders with practical lessons into leadership using the Tafaria Taxonomy framework. It is an immersive program that uses nature inspired leadership lessons (Tafaria Taxonomy) to enhance leadership skills.",
          "sessions": [
            {
              "title": "Inspiration & Motivation",
              "description": "Tour of Tafaria Castle: An immersive and inspiring story behind Tafaria Castle and how vision and perseverance shaped its creation followed by a motivation and inspiration session called “Once Upon a Dream.”"
            },
            {
              "title": "Lessons by Nature",
              "description": "An immersion into the Tafaria herbarium for context into The Tafaria Taxonomy of Leadership, i.e., nature-inspired leadership lessons followed by leadership sessions on how to apply the taxonomy to leadership scenarios and guided discussions to align Tafaria Taxonomy principles with personal traits and unique leadership roles."
            },
            {
              "title": "Social Impact",
              "description": "Leave a mark in our community at the Happy Place – an upcoming school for the underprivileged."
            }
          ]
        },
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel7.jpg",
          "title": "Soulscape ​",
          "description": "Soulscape Retreat is designed for those in the faith who are looking to nourish and rejuvenate spiritually in a serene setting at Tafaria Castle & Center for the Arts.​",
          "sessions": [
            {
              "title": "Be Inspired – Once Upon a Dream",
              "description": "Through an immersive and inspiring story behind Tafaria Castle and how vision and perseverance shaped its creation followed by a motivational and soul-lifting session called “Once Upon a Dream.”"
            },
            {
              "title": "Therapy for the Soul: By Art & Nature’s Own",
              "description": "Engage your creative side with soul-soothing art therapy. Explore painting, pottery, sculpting, artistic creations, and the wonders of nature in our Herbarium for mental wellbeing, emotional healing, self-expression, and spiritual connection."
            },
            {
              "title": "Lead Naturally - Enhance Your Spiritual Growth",
              "description": "Enhance your ability to lead naturally with our 'Leading Naturally' program, which is nature-inspired based on the Tafaria Taxonomy. It will lighten your burdens!"
            },
            {
              "title": "Feed Your Soul Leisurely",
              "description": "Feed your soul with fun, low-pressure activities like horse riding, archery, minigolf, etc., as you learn life lessons carefully curated for you."
            },
            {
              "title": "Social Impact",
              "description": "Finally, leave a mark in our community at the Happy Place – an upcoming school for the underprivileged."
            }
          ]
        },
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Piano_tafaria-min-ofzzltgcxsqzc8kqnlnm4s1o852rgtnkntg1ghfg4w.jpg",
          "title": "goDream Lifeskills ​ ​",
          "description": "goDream is a Tafaria custom life skill building program for students that blends creative/arts workshops, hands-on activities, and fun, ensuring that each student discovers new talents, develops skills, and raise their levels of agency on community service. ​",
          "sessions": [
            {
              "title": "Life-skills",
              "description": "The students learn some life-skills through leisure and art-based activities on how to approach and navigate different life scenarios."
            },
            {
              "title": "Inspiring Once Upon a Dream Session",
              "description": "Drawing from Tafaria’s inspiring motto, 'Once Upon a Dream,' this session inspires students on goal setting, following them, and managing peer pressure."
            },
            {
              "title": "Educational Tours",
              "description": "Enriching guided tours of the evolution science museum, the herbarium for conservation, enriching art tours, and farm tours for exposure to sustainable farming methods."
            },
            {
              "title": "Community Service",
              "description": "The students get involved in a community service project to instill a sense of responsibility and community engagement."
            },
            {
              "title": "Bonding and Rejuvenating Leisure Activities",
              "description": "The program is rounded out with a variety of relaxing and team-bonding activities built around the Tafaria leisure activities and talent shows."
            }
          ]

        },
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Tafaria%2056.jpg",
          "title": "goDream Leadership ​ ​",
          "description": "goDream Leadership is student leaders custom program based on the Tafaria Taxonomy of leadership. It is designed to equip student leaders with essential leadership skills, such as effective communication, decision-making, problem-solving, teamwork & collaboration, conflict resolution" ,
          "sessions": [
    {
      "title": "Inspiring Once Upon a Dream Session",
      "description": "An inspiring tour of the Tafaria Castle & Center for the Arts followed by the 'Once Upon a Dream' session to inspire students on goal setting and following them and managing peer pressure."
    },
    {
      "title": "Tafaria Taxonomy of Leadership",
      "description": "An immersion into the Tafaria herbarium for context into The Tafaria Taxonomy of Leadership followed by a session on nature-inspired leadership lessons."
    },
    {
      "title": "Leadership in Action",
      "description": "A session on how to apply the lessons learned in a school environment including balancing leadership with studies."
    },
    {
      "title": "Community Service",
      "description": "The students get involved in a community service project to instill a sense of responsibility and community engagement."
    }
  ]
        
        },
         {
          "imageUrl": "https://www.tafaria.com/assets/img/Piano_tafaria-min-ofzzltgcxsqzc8kqnlnm4s1o852rgtnkntg1ghfg4w.jpg",
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
      ]
    },
        {
      "type": "Blogs",
      "subtypes": [
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel6.jpg",
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
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel3.jpg",
          "title": "goLead - Leading Naturally​",
          "description": "goLead program is designed to inspire and equip leaders with practical lessons into leadership using the Tafaria Taxonomy framework. It is an immersive program that uses nature inspired leadership lessons (Tafaria Taxonomy) to enhance leadership skills.",
          "sessions": [
            {
              "title": "Inspiration & Motivation",
              "description": "Tour of Tafaria Castle: An immersive and inspiring story behind Tafaria Castle and how vision and perseverance shaped its creation followed by a motivation and inspiration session called “Once Upon a Dream.”"
            },
            {
              "title": "Lessons by Nature",
              "description": "An immersion into the Tafaria herbarium for context into The Tafaria Taxonomy of Leadership, i.e., nature-inspired leadership lessons followed by leadership sessions on how to apply the taxonomy to leadership scenarios and guided discussions to align Tafaria Taxonomy principles with personal traits and unique leadership roles."
            },
            {
              "title": "Social Impact",
              "description": "Leave a mark in our community at the Happy Place – an upcoming school for the underprivileged."
            }
          ]
        },
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Home%20Carousel7.jpg",
          "title": "Soulscape ​",
          "description": "Soulscape Retreat is designed for those in the faith who are looking to nourish and rejuvenate spiritually in a serene setting at Tafaria Castle & Center for the Arts.​",
          "sessions": [
            {
              "title": "Be Inspired – Once Upon a Dream",
              "description": "Through an immersive and inspiring story behind Tafaria Castle and how vision and perseverance shaped its creation followed by a motivational and soul-lifting session called “Once Upon a Dream.”"
            },
            {
              "title": "Therapy for the Soul: By Art & Nature’s Own",
              "description": "Engage your creative side with soul-soothing art therapy. Explore painting, pottery, sculpting, artistic creations, and the wonders of nature in our Herbarium for mental wellbeing, emotional healing, self-expression, and spiritual connection."
            },
            {
              "title": "Lead Naturally - Enhance Your Spiritual Growth",
              "description": "Enhance your ability to lead naturally with our 'Leading Naturally' program, which is nature-inspired based on the Tafaria Taxonomy. It will lighten your burdens!"
            },
            {
              "title": "Feed Your Soul Leisurely",
              "description": "Feed your soul with fun, low-pressure activities like horse riding, archery, minigolf, etc., as you learn life lessons carefully curated for you."
            },
            {
              "title": "Social Impact",
              "description": "Finally, leave a mark in our community at the Happy Place – an upcoming school for the underprivileged."
            }
          ]
        },
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Piano_tafaria-min-ofzzltgcxsqzc8kqnlnm4s1o852rgtnkntg1ghfg4w.jpg",
          "title": "goDream Lifeskills ​ ​",
          "description": "goDream is a Tafaria custom life skill building program for students that blends creative/arts workshops, hands-on activities, and fun, ensuring that each student discovers new talents, develops skills, and raise their levels of agency on community service. ​",
          "sessions": [
            {
              "title": "Life-skills",
              "description": "The students learn some life-skills through leisure and art-based activities on how to approach and navigate different life scenarios."
            },
            {
              "title": "Inspiring Once Upon a Dream Session",
              "description": "Drawing from Tafaria’s inspiring motto, 'Once Upon a Dream,' this session inspires students on goal setting, following them, and managing peer pressure."
            },
            {
              "title": "Educational Tours",
              "description": "Enriching guided tours of the evolution science museum, the herbarium for conservation, enriching art tours, and farm tours for exposure to sustainable farming methods."
            },
            {
              "title": "Community Service",
              "description": "The students get involved in a community service project to instill a sense of responsibility and community engagement."
            },
            {
              "title": "Bonding and Rejuvenating Leisure Activities",
              "description": "The program is rounded out with a variety of relaxing and team-bonding activities built around the Tafaria leisure activities and talent shows."
            }
          ]

        },
        {
          "imageUrl": "https://www.tafaria.com/assets/img/Tafaria%2056.jpg",
          "title": "goDream Leadership ​ ​",
          "description": "goDream Leadership is student leaders custom program based on the Tafaria Taxonomy of leadership. It is designed to equip student leaders with essential leadership skills, such as effective communication, decision-making, problem-solving, teamwork & collaboration, conflict resolution" ,
          "sessions": [
    {
      "title": "Inspiring Once Upon a Dream Session",
      "description": "An inspiring tour of the Tafaria Castle & Center for the Arts followed by the 'Once Upon a Dream' session to inspire students on goal setting and following them and managing peer pressure."
    },
    {
      "title": "Tafaria Taxonomy of Leadership",
      "description": "An immersion into the Tafaria herbarium for context into The Tafaria Taxonomy of Leadership followed by a session on nature-inspired leadership lessons."
    },
    {
      "title": "Leadership in Action",
      "description": "A session on how to apply the lessons learned in a school environment including balancing leadership with studies."
    },
    {
      "title": "Community Service",
      "description": "The students get involved in a community service project to instill a sense of responsibility and community engagement."
    }
  ]
        
        },
         {
          "imageUrl": "https://www.tafaria.com/assets/img/Piano_tafaria-min-ofzzltgcxsqzc8kqnlnm4s1o852rgtnkntg1ghfg4w.jpg",
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
      ]
    },
    
  ];

  const categoryData = menuData.find(
    category => category.type.toLowerCase() === title?.toLowerCase()
  );

  return (
    <div className="w-full">   

<h1 className="text-3xl font-bold text-center my-8 tracking-tight text-[#94723C] capitalize border-b-2 border-[#902729] pb-4 max-w-2xl mx-auto flex items-center" >
  <Link href="/" className="text-[#94723C] hover:underline mx-5">
  <FaAngleLeft className="mr-2" />
  </Link>
  {title}
</h1>
      {categoryData ? (
        categoryData.subtypes.map((item, index) => (
          <BlogCard
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            sessions={item.sessions || []}
          />
        ))
      ) : (
        <div className="text-center py-8 text-gray-600">
          No content found for this category
        </div>
      )}
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