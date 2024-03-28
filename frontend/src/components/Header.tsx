import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-headerBackground fixed w-full z-10 top-0">
      <div className="flex justify-between items-center w-full h-full p-7">
        <Image src="/logo-trybe.png" alt="logo" width="95" height="50" />
        <div>
          <ul className="hidden md:flex">
            <li className="text-lg">
              <Link href="/">
                <span className="text-gray-300 hover:text-white">INÍCIO</span>
              </Link>
            </li>
            <li className="ml-7 text-lg">
              <Link href="/history">
                <span className="text-gray-300 hover:text-white">
                  HISTÓRICO
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
