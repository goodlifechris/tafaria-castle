import Image from 'next/image';
import { Barlow_Condensed,Montaga } from 'next/font/google'
import Link from 'next/link';

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '400',  // Add this line
  subsets: ['latin'],
  display: 'swap',
})
//👇 Configure our font object
const montaga = Montaga({
    weight: '400',  // Add this line
    subsets: ['latin'],
    display: 'swap',
  })
const BlogCard = ({ 
  imageUrl,
  title, 
  description 
}: {
  imageUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={`flex flex-col md:flex-row m-5 bg-white rounded-lg overflow-hidden mt-5 ${barlow_condensed.className}`}>
      {/* Image Section */}
      <div className="relative w-full md:w-1/3 h-64">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg md:rounded-l-lg md:rounded-r-lg"
        />
      </div>
      {/* Content Section */}


      <div className="p-4 md:w-2/3">
        <h2 className="text-xl font-semibold text-[#902729]">{title}</h2>
        <p className={`mt-2 text-gray-600 ${montaga.className}`}>{description}</p>
        <div className="mt-4 flex space-x-4">
          <Link
            href="https://apps.hti-systems.com/hostech/tafaria/desktop.html?locale=en_US" 
            className="text-[#94723C] text-sm hover:text-[#b33235] transition-colors duration-200 flex items-center"
          >
            <span>Schedule a visit</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
     
          <Link 
          href={`/submenu?title=${title}&description=${encodeURIComponent(description)}`}
            className="text-[#902729] text-sm hover:text-[#b33235] transition-colors duration-200 flex items-center"
          >
            <span>Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
