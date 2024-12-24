import Link from 'next/link';
import Image from 'next/image';
// import { Barlow_Condensed, Montaga } from 'next/font/google';


interface VideoCardProps {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  link: string;
}

const VideoCard = ({ title, thumbnailUrl, duration, link }: VideoCardProps) => {
  return (
    <Link href={link} className="flex flex-col h-full mb-2">
      <div className="w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Thumbnail with duration */}
        <div className="relative w-full h-96">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover rounded-t-lg rounded"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
            {duration}
          </div>
        </div>
        
        {/* Content */}
        {/* <div className="p-4">
          <h3 className={`text-xl text-[#902729] mb-2 hover:text-[#b33235] transition-colors duration-200 ${barlow_condensed.className}`}>
            {title}
          </h3>
          
          <div className="flex items-center mb-2">
            <img src="/images/carlendar.svg" alt="Calendar" className="w-4 h-4" />
            <span className={`ml-2 text-gray-600 text-sm ${montaga.className}`}>
              {new Date(date).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>
          
          <p className={`text-gray-600 text-sm line-clamp-2 ${montaga.className}`}>
            {description}
          </p>
        </div> */}
      </div>
    </Link>
  );
};
export default VideoCard;