import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Teraki = () => {
    return (
        <div>
            <Header />
            <section className=' max-w-[900px] mx-auto px-8 mt-16'>
            <Image
                        alt=''
                        width={700}
                        height={700}
                        className=' object-cover justify-center  my-10 mx-auto'
                        src={'/images/f1.png'}
                    />
                     <h3 className='t text-2xl font-extrabold my-5'>Overview</h3>
                <p className='mb-20'> The purpose of the app is to provide users with the ability to buy or deliver flowers for themselves and loved one's. Additionally, users will be able to filter the available flowers based on their individual interests. It is important to note that all of these functionalities have been thoroughly designed and planned prior to commencing the development process.</p>
                <h3 className='t text-2xl font-extrabold'>Feature Highlights</h3>
                <div className='mt-4'>
                    <li>Extensive flower category</li>
                    <li> User Profiles</li>
                    <li>Search and Discovery</li>
                    <li>delivery</li>
                    
                </div>
                <div className='mt-4'>
                    <h2 className='my-2 text-2xl font-semibold'>  Design Process</h2>
                    <h5>
                        Before diving deeper into the project, I’d like to highlight the design process we followed:
                    </h5>
                  
                </div>
                <div className='my-10'>
                <div className='flex  md:flex-row flex-col-reverse  mt-10 px-4 py-2 '>
                        <div className='flex-1 flex  flex-col  items-center md:justify-center md:items-end '>
                            <h3 className='text-2xl font-bold'>Sign up page</h3>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Social Media Sign-In</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>Branding and Logo</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>Create Account Link</h4>

                        </div>
                        <Image
                            alt=''
                            width={700}
                            height={700}
                            className='object-contain aspect-[3/2] flex-1 mt-2 w-full '
                            src={'/images/f6.png'} />
                    </div>
                    <div className='flex flex-col rounded  md:flex-row   '>
                        <Image
                            alt=''
                            width={700}
                            height={700}
                            className='o object-contain aspect-[3/2] flex-1 mt-2 w-full '
                            src={'/images/f3.png'} />
                        <div className='flex-1 flex flex-col items-center bg-red md:justify-center md:items-start'>
                            <h3 className='text-2xl font-bold'>Home</h3>
                           
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Recommendations</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>New Releases</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Personalized Content</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>  Search Bar</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Promotional Offers</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> User Profile Quick Access</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Genre or Category Thumbnails</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Clear Navigation</h4>
                        </div>
                    </div>
                    <div className='flex  md:flex-row flex-col-reverse  mt-10 px-4 py-2 '>
                        <div className='flex-1 flex  flex-col  items-center md:justify-center md:items-end '>
                            <div className='flex flex-col justify-start'>
                            <h3 className='text-2xl font-bold'>Cart page</h3>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> cart items</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>Total amount </h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>Check out option</h4>
                            </div>
                        </div>
                        <Image
                            alt=''
                            width={700}
                            height={700}
                            className='object-contain aspect-[3/2] flex-1 mt-2 w-full '
                            src={'/images/f4.png'} />
                    </div>
                    <div className='flex flex-col md:flex-row   px-4 py-2 mt-10 '>
                        <Image
                            alt=''
                            width={700}
                            height={700}
                            className='o object-contain aspect-[3/2] flex-1 mt-2 w-full '
                            src={'/images/f5.png'} />
                        <div className='flex-1 flex flex-col items-center md:justify-center md:items-start'>
                            <h3 className='text-2xl font-bold'>Check out page</h3>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>Location</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>Total items</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>Place order</h4>

                        </div>
                    </div>
                </div>


            </section >
        </div >
    )
}

export default Teraki