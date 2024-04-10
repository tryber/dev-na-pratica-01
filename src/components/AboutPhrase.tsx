import React from 'react'

const AboutPhrase: React.FC<{ name: string, about: string, phrase: string }> = ({ name, about, phrase }) => {
  return (
    <div className="text-white md:w-3/5 flex-col flex justify-start md:ml-8 text-center ml-8">
      <h1 className="text-5xl "> {name}</h1>
      <h3 className="text-base md:text-2xl lg:text-3xl mt-2">
        {phrase}
      </h3>
      <h4 className="flex mt-4 justify-center items-center text-xs md:text-base ">
        <i>{about}</i>
      </h4>
    </div>
  )
}

export default AboutPhrase
