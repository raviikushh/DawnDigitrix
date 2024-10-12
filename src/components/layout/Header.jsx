import logo from '../../assets/digi.png'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import {slideBottom} from '../../utility/animation'
import { useState, useEffect } from 'react'
import { CIcon } from '@coreui/icons-react';
import { cilMenu } from '@coreui/icons';


const Header = () => {
  const navigate = useNavigate();
  const HandleNavigate = (e) => {
    if(e.target.innerText === 'Home') navigate('/')
    if(e.target.innerText === 'About Us') navigate('/about')
    if(e.target.innerText === 'Services') navigate('/services')
    if(e.target.innerText === 'Contact') navigate('/contact')
  }

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [scroll])


  return (
    <motion.nav
            variants={slideBottom(0.2)}
            initial="initial"
            animate="animate"
    className={`bg-opacity-80 flex fixed transition-shadow duration-300 ease-in-out ${scroll ? 'shadow-md' : ''} justify-between items-center backdrop-blur top-0 right-0 left-0 z-10 h-32 bg-gray-100 `}>
          <div className="flex items-center mx-8">
          <img src={logo} alt='logo' className='h-32 cursor-pointer' />
          </div>
              <div className=" text-xl mx-14 hidden md:block p-2 ">
                 <ul className="flex flex-wrap flex-grow gap-8 items-center">
                  <li className="cursor-pointer hover:text-slate-500" onClick={HandleNavigate}>Home</li>
                  <li className="cursor-pointer hover:text-slate-500" onClick={HandleNavigate}>About Us</li>
                  <li className="cursor-pointer hover:text-slate-500" onClick={HandleNavigate}>Services</li>
                  <li className="cursor-pointer hover:text-slate-500 primary-btn " onClick={HandleNavigate}>Contact</li>
                 </ul>
              </div>
             <CIcon icon={cilMenu} size='xl' className='md:hidden m-14 w-14 text-gray-600 cursor-pointer'/>    
    </motion.nav>
  )
}

export default Header
