import React from 'react'
import Image from "next/image";
import LinkedinSvg from "./LinkedinSvg";

// componente que chama outro componente para renderizar o logo do linkedin
const ImageSvg: React.FC<{ image: string, linkedin: string }> = ({ image, linkedin }) => {
  return (
    <div className="flex relative rounded-[40px] m-auto hover:bg-black/80 group hover:scale-105 ease-in duration-500 flex-col w-48 md:w-[240px] lg:w-70 h-full">
      <Image
        data-testid="testId-image"
        src={image}
        alt="foto"
        className="rounded-[40px] w-48 md:w-[240px] lg:w-70 group-hover:opacity-10"
        width={80}
        height={80}
      />
      <LinkedinSvg linkedin={linkedin} />
    </div>
  )
}

export default ImageSvg
