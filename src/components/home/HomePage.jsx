import HeroImg from "../../assets/1.jpg"
import HeroImg2 from "../../assets/strategy.avif"
import Typewriter from 'typewriter-effect'
  import {motion} from 'framer-motion'
import {slideUp} from '../../utility/animation'
import Cards from "../cards/Cards"
import { Footer } from "../footer/Footer"

const HomePage = () => {
  return (
    <div className="container">

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        <div className="flex flex-col justify-center items-center">
          <motion.h1 
          variants={slideUp(0.2)}
           initial="initial"
            animate="animate"
             className=" text-slate-800 text-4xl md:text-8xl font-bold">
            <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Unleash the Dawn of Digital Success!")
                .callFunction(() => {
                  // console.log('String typed out!');
                })
                .pauseFor(2500)
                .deleteAll(30)
                .callFunction(() => {
                  // console.log('All strings were deleted');
                })
                .start();
            }}
            options={{
              delay: 30,
              loop: true,
            }}
          />
          </motion.h1>
          <motion.h1
          variants={slideUp(0.4)}
          initial="initial"
           animate="animate"
           className="text-slate-500 font-bold  text-xl md:text-2xl">
            Awaken the Power of Digital Marketing
            </motion.h1>
          <motion.button
          variants={slideUp(0.6)}
          initial="initial"
           animate="animate"
          className="primary-btn">Get Started</motion.button>
        </div>

          <div className="heroimg pt-4">
            <motion.img
            initial={{opacity: 0, x:100}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 0.5, delay: 0.6}}
            src={HeroImg} alt="hero" />
          </div>

      </div>

      {/* Second Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] bg-purple-100/40 ">
      <div className="heroimg pt-4">
            <motion.img
            initial={{opacity: 0, x:100}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 0.5, delay: 0.4}}
            src={HeroImg2} alt="hero" />
          </div>
        <div className="flex flex-col justify-center items-center">
          <motion.h1 
            initial={{opacity: 0, x:-30}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 0.5, delay: 0.4}}
             className=" text-blue-800/90 text-4xl md:text-8xl font-bold">
              Empowering Brands at the Break of Digital Dawn.
          </motion.h1>
          <motion.h1
            initial={{opacity: 0, x:-30}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 0.5, delay: 0.4}}
            className="text-slate-500 font-bold  text-xl md:text-2xl">Your Brand, Your Dawn, Your Triumph.</motion.h1>
          
        </div>

      </div>
      <Cards />
      <Footer />
    </div>
  )
}

export default HomePage