import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-grow items-center justify-center bg-gray-800 text-white h-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Footer Title</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vehicula vitae urna vel tincidunt.
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="flex flex-col md:flex-row">
              <li className="md:mr-4 mb-2 md:mb-0">
                <a href="https://www.betrybe.com/"
                  target="_blank"
                  className="text-sm hover:text-gray-400">
                  Trybe
                </a>
              </li>
              <li className="md:mr-4 mb-2 md:mb-0">
                <a href="https://www.betrybe.com/cursos/programacao-fundamentos-front-end"
                  target="_blank"
                  className="text-sm hover:text-gray-400">
                  Frontend
                </a>
              </li>
              <li className="md:mr-4 mb-2 md:mb-0">
                <a href="https://www.betrybe.com/pessoas-contratadas"
                  target="_blank"
                  className="text-sm hover:text-gray-400">
                  TrybeAbout
                </a>
              </li>
              <li className="md:mr-4 mb-2 md:mb-0">
                <a href="https://ajuda.betrybe.com/hc/pt-br"
                  target="_blank"
                  className="text-sm hover:text-gray-400">
                  HelpMe
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;