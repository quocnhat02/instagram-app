import Image from 'next/image';
import React from 'react';
import instagram from '../assets/instagram.png';
import arrowdown from '../assets/arrowdown.png';
import search from '../assets/search-icon.png';

const Header = () => {
  return (
    <div className="border-b shadow-sm">
      <div className="flex justify-between items-center h-16 px-2">
        {/* Left */}
        <div className="flex items-center">
          <div className="w-28">
            <Image src={instagram} />
          </div>
          <div className="h-3 w-3">
            <Image src={arrowdown} />
          </div>
        </div>
        {/* Middle */}
        <div className="hidden w-72 sm:flex relative items-center">
          <div className="absolute flex w-4 h-4 ml-2">
            <Image src={search} alt="icon-search" />
          </div>
          <input
            className="h-9 w-full rounded-md bg-[#efefef] pl-8 outline-0"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* Right */}
      </div>
    </div>
  );
};

export default Header;