'use client'

import * as React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { useTheme } from 'next-themes'
import { socialLinks as socialLinksData } from '@/lib/data'

export function Footer() {
  const isSmallScreen = useMediaQuery({ maxWidth: 480 })
  const { theme } = useTheme()
  const socialLinks = socialLinksData.map(link => ({
    ...link,
    imgSrc: theme === 'light' ? link.imgSrc.replace('-dark.png', '.png') : link.imgSrc
  }))

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
