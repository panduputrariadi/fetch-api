import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const SingleImages = ({ href, imgSrc }: { href: string; imgSrc: string }) => (
  <Link href={href} className="flex w-full items-center justify-center">
    <Image src={imgSrc} alt="Brand Image" className="h-10 w-full" width={100} height={100}/>
  </Link>
)


export default SingleImages