import logo from '../../assets/digi.png'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import {slideBottom} from '../../utility/animation'


const Header = () => {
  const navigate = useNavigate();
  const HandleNavigate = (e) => {
    if(e.target.innerText === 'Home') navigate('/')
    if(e.target.innerText === 'About Us') navigate('/about')
    if(e.target.innerText === 'Services') navigate('/services')
    if(e.target.innerText === 'Contact') navigate('/contact')
  }

  return (
    <motion.nav
            variants={slideBottom(0.2)}
            initial="initial"
            animate="animate"
    className="bg-white/30 bg-opacity-80 flex justify-between items-center backdrop-blur top-0 left-0 right-0 sticky z-10 h-32">
          <div className="flex items-center ml-[-30px]">
          <img src={logo} alt='logo' className='w-96 h-48 cursor-pointer' />
          </div>
              <div className=" text-xl w-[37%] mt-[-30px] hidden md:block">
                 <ul className="flex flex-wrap flex-grow gap-4 items-center hover:text-primary">
                  <li className="cursor-pointer hover:text-slate-500" onClick={HandleNavigate}>Home</li>
                  <li className="cursor-pointer hover:text-slate-500" onClick={HandleNavigate}>About Us</li>
                  <li className="cursor-pointer hover:text-slate-500" onClick={HandleNavigate}>Services</li>
                  <li className="cursor-pointer hover:text-slate-500 primary-btn " onClick={HandleNavigate}>Contact</li>
                 </ul>
              
          </div>
    </motion.nav>
  )
}

export default Header
