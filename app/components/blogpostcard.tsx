import Link from 'next/link';
import Image from 'next/image';
import { Barlow_Condensed, Montaga } from 'next/font/google'

interface BlogPostCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string;
}
//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '600',  // Add this line
  subsets: ['latin'],
  display: 'swap',
})
const montaga = Montaga({
  weight: '400',  // Fixed weight to valid value
  subsets: ['latin'],
  display: 'swap',
})
const BlogPostCard = ({ title, date, description, imageUrl, link }: BlogPostCardProps) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Image at the top */}
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        
        {/* Content below image */}
        <div className="flex flex-col p-6">
          <h3 className={`text-xl text-[#902729] mb-4 hover:text-[#b33235] transition-colors duration-200 tracking-tight ${barlow_condensed.className}`}>
            {title}
          </h3>
          
          <div className="flex items-center mb-4">
            <img src="/images/carlendar.svg" alt="SVG image"/>
            <span className={`ml-2 text-gray-600 ${montaga.className}`}>
              {new Date(date).toLocaleDateString('en-US', { 
                day:'2-digit',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>
          
          <p className={`text-gray-600 mb-6 line-clamp-3 ${montaga.className}`}>
            {description}
          </p>
          
          <Link 
            href={`/submenu?title=${title}&description=${encodeURIComponent(description)}`}
            className={`text-[#94723C] text-sm hover:text-[#b33235] underline transition-colors duration-200 flex items-center mt-auto ${barlow_condensed.className}`}
          >
            <span>Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
    </div>
  );
};

export default BlogPostCard;
