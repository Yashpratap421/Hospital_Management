import React from 'react'
import { assets } from '../assets/assets-frontend/assets'

function Footer() {
  return (
    <div className='md:mx-10' >
       <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
       <div className="">
            <img src={assets.logo} alt="" className='mb-5 w-40'/>
            <p className='w-full md-w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas tempora est provident ex voluptates autem laudantium maxime a! Provident ipsum hic consequatur maiores neque consequuntur fuga quos delectus tenetur nobis?</p>
        </div>
        <div className="">
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="">
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>0
                    +1-212-456-7890
                </li>
                <li>yash@gmail.com</li>
            </ul>
        </div>
       </div>
       <div className="">
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Right Reserved.</p>
       </div>
    </div>
  )
}

export default Footer