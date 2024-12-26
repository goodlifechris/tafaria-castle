import Link from 'next/link';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa'; // Import play icon

interface VideoCardProps {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  link: string;
}

const VideoCard = ({ title, thumbnailUrl, duration }: VideoCardProps) => {
  return (
    <Link href={`/categories?title=${encodeURIComponent("Videos")}`}className="flex flex-col h-full mb-2">
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
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <FaPlay className="text-[#902729] text-sm" /> {/* Play icon */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;