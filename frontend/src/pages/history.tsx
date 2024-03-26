import React from 'react';
import Link from 'next/link';
import data from '../../historyData.json';
import Image from 'next/image';
import User from '@/types/User';
import Project from '@/types/Project';
import Achievement from '@/types/Achievement';
import Header from '@/components/Header';
import Headline from '@/components/Headline';
import Footer from '@/components/Footer';


const History: React.FC = () => {
  return (
    <div>
      <Header />
      <Headline title='histórico' />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((user: User) => (
            <div
              key={user.id}
              className="bg-gray-800 p-4 rounded-lg shadow-black shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={user.image} // https://thispersondoesnotexist.com/ <- Site para gerar fotos
                  alt={user.name}
                  width={100}
                  height={100}
                  className="w-16 h-16 object-cover rounded-full mr-4"
                />
                <h2 className="text-xl font-semibold text-white">{user.name}</h2>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Projetos:
                </h3>
                {user.projects.map((project: Project, index: number) => (
                  <div key={index} className="mb-2">
                    <p className="text-gray-200">{project.project}</p>
                    <Link href={project.projectLink}>
                      <span className="text-blue-500 hover:underline">
                        Ver mais
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Conquistas:
                </h3>
                {user.achievements.map(
                  (achievement: Achievement, index: number) => (
                    <div key={index} className="mb-2">
                      <p className="text-gray-200">{achievement.achievement}</p>
                      <Link href={achievement.achievementLink}>
                        <span className="text-blue-500 hover:underline">
                          Ver mais
                        </span>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  )
}

export default History;