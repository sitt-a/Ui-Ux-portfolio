import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MobileAppsData } from '../lib/constants'; // Update the path accordingly

export default function MobileApp() {
  return (
    <div className='flex flex-col max-w-[900px] mx-auto mt-40 py-8 px-10'>
      <div className=" text-3xl font-semibold mb-10">Mobile Apps</div>

      <div className='flex space-x-40'>
        {MobileAppsData.map((app, index) => (
          <Link key={index} href={app.href} className='flex flex-col items-center justify-center  '>
       
              <Image src={app.imageUrl} alt={app.title} width={150} height={150} />
              <p className='text-lg font-semibold'>{app.title}</p>
          
          </Link>
        ))}
      </div>
    </div>
  );
}
