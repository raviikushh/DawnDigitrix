import { CIcon } from '@coreui/icons-react';
import {cibFacebookF} from '@coreui/icons'
import {cibLinkedinIn} from '@coreui/icons'
import {cibInstagram} from '@coreui/icons'
import {cibTwitter} from '@coreui/icons'
import whitelogo from '../../assets/logo_white.png'
import gmail from '../../assets/gmail.png'



export const Footer = () => {

  return (
    <div className='w-full bg-black  overflow-hidden'>
    <div className=' md:px-4 flex flex-col md:flex-row justify-between items-center'>
      <img src={whitelogo} alt="" className='h-32'/>
      <div className='flex mt-4 md:mt-0 gap-3 px-10'>
        <a href='https://www.facebook.com/profile.php?id=61566586425524' target='_blank' rel='noopener noreferrer'>
        <CIcon icon={cibFacebookF} className='h-8 bg-white hover:scale-105 transition-all ease-in-out duration-700 rounded-full hover:bg-blue-600'/>
        </a>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
        <CIcon icon={cibTwitter} className='h-8  bg-white hover:scale-105 transition-all ease-in-out duration-700 rounded-full hover:bg-blue-400'/>
        </a>
        <a href='https://www.instagram.com/dawndigitrix.inc?igsh=N2xocm96dHAxNWJ1' target='_blank' rel='noopener noreferrer'>
        <CIcon icon={cibInstagram} className='h-8  bg-white hover:scale-105 transition-all ease-in-out duration-700 rounded-full hover:bg-gradient-to-r from-orange-500  to-pink-500'/>
        </a>
        <a href='https://www.linkedin.com/company/dawndigitrixinc' target='_blank' rel='noopener noreferrer'>
        <CIcon icon={cibLinkedinIn} className='h-8  bg-white hover:scale-105 transition-all ease-in-out duration-700 rounded-full hover:bg-blue-500'/>
        </a>
      </div>
    </div>

    
    <hr className='border-b border-gray-700 mx-12 my-4 mb-10'/>

    {/* Second footer */}
    <div className="leftcontent flex flex-col md:flex-row justify-between">
      <div className="con ml-14">
        <h1 className='text-5xl text-white cursor-pointer hover:text-gray-100 font-semibold'>Get in Touch</h1>
        <p className='text-white ml-1 mb-6 md:mb-5 italic text-[17px]'>Let&apos;s Bring Your Vision to your brand!</p>
        <div className="dawn flex ml-1 md:ml-0">
          <img src={gmail} alt="" className='md:h-8 h-8 rounded-full'/>
          <a 
            href="mailto:contact@dawndigitrix.com" 
            className="text-white mt-0.5 md:mt-0.5 text-lg pl-2 md:pl-2"
          >
            contact@dawndigitrix.com
          </a>

        </div>
      </div>
      <div className="content md:w-[500px] mx-12  mt-8 md:mx-0 md:mt-0 mb-20">
      <p className='text-white text-justify'> <span className='text-xl font-semibold '>DawnDigitrix.</span> is here to ignite your business’s digital change Just as the first light of dawn signals new beginnings, we elevate brands by enhancing their online presence, driving engagement, and helping them achieve success in the digital world. Together, we can turn your business vision into reality and reach new heights.</p>
      </div>
      <div className="privacy md:pr-20 pr-14 px-14 md:px-0 ">
        <ul>
          <li className='text-white cursor-pointer hover:text-gray-100'>Privacy Policy</li>
          <li className='text-white cursor-pointer hover:text-gray-100'>Terms & Conditions</li>
        </ul>
      </div>
      </div>
      <hr className='border-b border-gray-700 mx-12'/>
      <div className='w-full bg-black pb-4 px-12'>
        <p className='text-white text-sm md:text-base text-start mt-2'>&copy; 2024  DawnDigitrix. All rights reserved.</p>
      </div>
    </div>
  )
}
