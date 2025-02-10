import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
     <Image className='w-40 ' src='/logo-nobg.png' width={300} height={300} alt={'Quick convert'}  /> 
    </div>
  )
}

export default Logo
