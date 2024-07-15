import Image from "next/image";

interface CardProps {
    imageSrc: any;
    title: string;
    description: string;
  }
  
  const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
    return (
      <div className="flex flex-col justify-center items-center bg-gray-700 rounded-lg shadow-md p-4 ">
        <Image src={imageSrc} alt={title} className="object-cover rounded-t-lg" />
        <div className="p-4">
          <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;