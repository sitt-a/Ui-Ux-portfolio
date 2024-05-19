import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Kebena = () => {
    return (
        <div>
            <Header />
            <section className=' max-w-[900px] mx-auto px-8 mt-16'>
            <Image
                        alt=''
                        width={700}
                        height={700}
                        className=' object-cover justify-center  my-10 mx-auto'
                        src={'/images/m5.png'}
               
               />
                     <h3 className='t text-2xl font-extrabold my-5'>Overview</h3>
                <p className='mb-20'>This platform is designed to simplify movies streaming service in Ethiopia.
                It has a user freindly design that enables users to seach and find movies also providing 
                customized movie recommendation.</p>
                <h3 className='t text-2xl font-extrabold'>Feature Highlights</h3>
                <div className='mt-4'>
                    <li>Searching functionality</li>
                    <li>Tranding movies</li>
                    <li>supports mutiple devices</li>
                    <li>customized recommendation</li>
                    <li>free and paid services</li>
                </div>
               
                <div className='my-10 '>
                    <div className='flex flex-col rounded    '>
                        <Image
                            alt=''
                            width={400}
                            height={400}
                            className='o object-contain aspect-[3/2] flex-1 mt-2 w-full '
                            src={'/images/m2.png'} />
                        <div className='flex-1 flex flex-col items-center bg-red md:justify-center md:items-start mt-12'>
                            <h3 className='text-2xl font-bold mb-4'>Movies page</h3>
                            <p>It has movies with different geners that that user can search and filter from based on their preference.</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-col px-4 py-2 mt-10 mb-10'>
                        <Image
                            alt=''
                            width={400}
                            height={400}
                            className='o object-contain aspect-[3/2] flex-1 mt-2 w-full '
                            src={'/images/m3.png'} />
                        <div className='flex-1 flex flex-col items-center md:justify-center md:items-start mt-12'>
                            <h3 className='text-2xl font-bold mb-4'>Movie detail</h3>
                            <p>It containts the detailed description of the movie like thename of the movie,the  geners ,the name of actors ,it's length and the date of movei release.</p>

                        </div>
                    </div>
                    <div><Image
                            alt=''
                            width={400}
                            height={400}
                            className='o object-contain aspect-[3/2] flex-1 mt-2 w-full '
                            src={'/images/m4.png'} /></div>
                </div>


            </section >
        </div >
    )
}

export default Kebena