'use client'

import * as React from 'react'
import Image from 'next/image'  
import { socialLinks } from '@/lib/data'

export function Footer() {
  return (
    <div className='flex items-center justify-center gap-4 '>
      {socialLinks.map((link) => (
        <a key={link.href} href={link.href} target='_blank' rel='noopener noreferrer'>
          <Image src={link.imgSrc} alt={link.alt} width={45} height={45} />
        </a>
      ))}
    </div>
  )
}