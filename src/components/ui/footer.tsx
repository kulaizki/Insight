'use client'

import * as React from 'react'
import Image from 'next/image'

export function Footer() {
  return (
    <div className='flex items-center justify-center gap-4 '>
      <a href='https://www.linkedin.com/in/kulaizki/' target='_blank' rel='noopener noreferrer'>
        <Image src='/linkedin.png' alt='linkedin' width={50} height={50} />
      </a>
      <a href='https://github.com/kulaizki' target='_blank' rel='noopener noreferrer'>
        <Image src='/github.png' alt='github' width={50} height={50} />
      </a>
      <a href='https://facebook.com/kulaizki' target='_blank' rel='noopener noreferrer'>
        <Image src='/facebook.png' alt='facebook' width={50} height={50} />
      </a>
      <a href='https://discord.com/users/295805809479254016' target='_blank' rel='noopener noreferrer'>
        <Image src='/discord.png' alt='discord' width={50} height={50} />
      </a>
    </div>
  )
}