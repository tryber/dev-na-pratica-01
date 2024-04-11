import React from 'react'
import Image from "next/image";

const ImageSvg: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="flex relative justify-center rounded-[40px] hover:bg-black/80 group hover:scale-105 ease-in duration-500 flex-col">
      <Image
        src={image}
        alt="foto"
        className="rounded-[40px] w-48 md:w-[240px] lg:w-70 group-hover:opacity-10 ml-8"
        width={80}
        height={80}
      />
    </div>
  )
}

export default ImageSvg
