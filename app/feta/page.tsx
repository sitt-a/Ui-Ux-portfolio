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
                <p className='mb-20'>This platform is designed to simplify event discovery and booking within the Kebele community, offering users the ability to easily find and reserve available events. Users can browse through a variety of events, check their availability, and book ventures in Kebele with convenience. Administrators have comprehensive control over the platform, with capabilities to manage users, create and modify events, and customize the home page layout. These features are meticulously designed to enhance the event booking experience for users while providing administrators with the tools they need to efficiently manage the platform.</p>
                <h3 className='t text-2xl font-extrabold'>Feature Highlights</h3>
                <div className='mt-4'>
                    <li>Event Discovery</li>
                    <li> Availability Checking</li>
                    <li>Venture Booking</li>
                    <li>Administrative Control</li>
                    <li>Event Creation</li>
                    <li>Layout Customization</li>
                </div>
               
                <div className='my-10 '>
                    <div className='flex flex-col rounded    '>
                        <Image
                            alt=''
                            width={400}
                            height={400}
                            className='o object-contain aspect-[3/2] flex-1 mt-2 w-full '
                            src={'/images/m2.png'} />
                        <div className='flex-1 flex flex-col items-center bg-red md:justify-center md:items-start'>
                            <h3 className='text-2xl font-bold'>Home</h3>
                            <p>Explore a diverse range of events, check availability, and easily reserve your spots for exciting ventures in Kebele. Whether you're seeking cultural experiences, workshops, or community gatherings, our platform provides a hassle-free way to find and attend events that interest you. </p>
                        </div>
                    </div>
                    
                    <div className='flex flex-col px-4 py-2 mt-10 mb-10'>
                        <Image
                            alt=''
                            width={400}
                            height={400}
                            className='o object-contain aspect-[3/2] flex-1 mt-2 w-full '
                            src={'/images/m3.png'} />
                        <div className='flex-1 flex flex-col items-center md:justify-center md:items-start'>
                            <h3 className='text-2xl font-bold'>Admin Dashboard</h3>
                            <p>Here, admins have full control. Add new admins, create events, and customize the layout of the home page effortlessly. Stay tuned for more features coming soon, empowering you to tailor the platform to the community's needs with ease.</p>

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