import logo from '../../assets/digi.png'
import fb from '../../assets/fb.avif'
import x from '../../assets/x.avif'
import insta from '../../assets/insta.avif'
import linkedin from '../../assets/linkedin.avif'

export const Footer = () => {
  return (
    <div className='w-full bg-black md:h-64'>
    <div className='container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center'>
      <div className='flex flex-col items-center md:items-start'>
        <img src={logo} alt='Digi Logo' className='h-28 mb-4' />
        <p className='text-white text-sm'>&copy; 2024 Dawn Digitrix. All rights reserved.</p>
      </div>
      <div className='flex flex-col items-center md:items-start mt-4 md:mt-0'>
        <h4 className='text-white text-4xl mb-2'>Contact Us</h4>
        <p className='text-white text-sm'>Email: contact@dawndigitrix.com</p>
        <p className='text-white text-sm'>Phone: +123 456 7890</p>
        <p className='text-white text-sm'>Address: 123 Digital St, Marketing City, 45678</p>
      </div>
      <div className='flex mt-4 md:mt-0'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
        <img src={fb} alt='Facebook' className='h-8 mx-2' />
        </a>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
        <img src={x} alt='Twitter' className='h-8 mx-2' />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
        <img src={insta} alt='Instagram' className='h-8 mx-2' />
        </a>
        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
        <img src={linkedin} alt='LinkedIn' className='h-8 mx-2' />
        </a>
      </div>
    </div>
    </div>
  )
}
