'use client'

import * as React from 'react'
import Image from 'next/image'  
import { useMediaQuery } from 'react-responsive'
import { socialLinks } from '@/lib/data'

export function Footer() {
  const isSmallScreen = useMediaQuery({ maxWidth: 480 })

  return (
    <div className='flex items-center justify-center gap-4 '>
      {socialLinks.map((link) => (
        <a key={link.href} href={link.href} target='_blank' rel='noopener noreferrer'>
          <Image src={link.imgSrc} alt={link.alt} width={isSmallScreen ? 30 : 45} height={isSmallScreen ? 30 : 45} />
        </a>
      ))}
    </div>
  )
}