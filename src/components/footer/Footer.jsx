import { CIcon } from '@coreui/icons-react';
import {cibFacebookF} from '@coreui/icons'
import {cibLinkedinIn} from '@coreui/icons'
import {cibInstagram} from '@coreui/icons'
import {cibTwitter} from '@coreui/icons'
import whitelogo from '../../assets/logo_white.png'


export const Footer = () => {
  return (
    <div className='w-full bg-black md:h-64 overflow-hidden'>
    <div className='container mx-auto  md:px-4 flex flex-col md:flex-row justify-between items-center'>
      <div className='flex flex-col items-center md:items-start '>
        <img src={whitelogo} alt='Digi Logo' className='h-48' />
        <p className='text-white text-sm hidden md:block'>&copy; 2024 Dawn Digitrix. All rights reserved.</p>
      </div>
      <div className='flex flex-col items-center md:items-start md:mt-0 gap-2'>
        <h4 className='text-white text-4xl mb-2'>Contact Us</h4>
        <p className='text-white text-sm'>Email: contact@dawndigitrix.com</p>
        <p className='text-white text-sm'>Phone: +123 456 7890</p>
        <p className='text-white text-sm'>Address: 123 Digital St, Marketing City, 45678</p>
      </div>
      <div className='flex mt-4 md:mt-0 gap-3'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
        <CIcon icon={cibFacebookF} className='h-8 bg-white hover:scale-105 transition-all ease-in-out duration-700 rounded-full hover:bg-blue-600'/>
        </a>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
        <CIcon icon={cibTwitter} className='h-8  bg-white hover:scale-105 transition-all ease-in-out duration-700 rounded-full hover:bg-blue-400'/>
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
        <CIcon icon={cibInstagram} className='h-8  bg-white hover:scale-105 transition-all ease-in-out duration-700 rounded-full hover:bg-gradient-to-r from-orange-500  to-pink-500'/>
        </a>
        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
        <CIcon icon={cibLinkedinIn} className='h-8  bg-white hover:scale-105 transition-all ease-in-out duration-700 rounded-full hover:bg-blue-500'/>
        </a>
      </div>
        <p className='text-white text-sm md:hidden mt-4'>&copy; 2024 Dawn Digitrix. All rights reserved.</p>
    </div>
    </div>
  )
}
