import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, CardItemProps } from '@/types/User';
import Project from '@/types/Project';
import Achievement from '@/types/Achievement';
import { CardProps } from '@/types/CardProps';
import App from './Star';

const Card: React.FC<CardProps> = ({ users, currentPage }) => {
  const filteredUsers =
    currentPage === 'current'
      ? users.filter((user) => user.highlight)
      : users.filter((user) => !user.highlight);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user: User) => (
          <CardItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};


const CardItem: React.FC<CardItemProps> = ({ user }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className={`flex justify-center w-auto items-center h-96 bg-[#14532d] rounded-lg overflow-hidden relative transition-transform duration-300 transform ${isVisible ? 'scale-125' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: isVisible ? 2 : 1 }}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${user.image})` }}></div>
      {isVisible && (
        <div className="absolute inset-0 bg-[#14532d] opacity-90 flex justify-center items-center"
        style={{ zIndex: 3 }}>
          <div className="bg-[#14532d] p-4 rounded-lg w-full h-96 shadow-black shadow-lg text-white">
            <div className="flex items-center mb-4">
              <Image src={user.image} alt={user.name} width={80} height={80} className="w-16 h-16 object-cover rounded-full mr-4" />
              <h2 className="text-xl font-semibold">{user.name}</h2>
            </div>
            <App />
            <div className='ml-6 overflow-auto max-h-full'>
              <h3 className="text-lg font-semibold mb-2">Projetos:</h3>
              {user.projects.map((project: Project, index: number) => (
                <div key={index} className="mb-2">
                  <p>{project.project}</p>
                  <Link href={project.projectLink}><p className="text-blue-500 hover:underline">Ver mais</p></Link>
                </div>
              ))}
            </div>
            <div className='ml-6 overflow-auto max-h-full'>
              <h3 className="text-lg font-semibold mb-2">Conquistas:</h3>
              {user.achievements.map((achievement: Achievement, index: number) => (
                <div key={index} className="mb-2">
                  <p>{achievement.achievement}</p>
                  <Link href={achievement.achievementLink}><p className="text-blue-500 hover:underline">Ver mais</p></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
