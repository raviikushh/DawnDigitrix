import HeroImg from "../../assets/1.jpg"
import HeroImg2 from "../../assets/strategy.avif"
import Typewriter from 'typewriter-effect'
import {motion} from 'framer-motion'
import {slideUp} from '../../utility/animation'
import Cards from "../cards/Cards"

const HomePage = () => {
  return (
    <div className="mt-32 bg-gray-100 overflow-hidden md:px-40">
      <div className="flex flex-col md:flex-row justify-between min-h-[600px]">
        <div className="flex flex-col justify-center items-center md:items-start">
          <motion.h1 
          variants={slideUp(0.2)}
           initial="initial"
            animate="animate"
             className=" text-slate-800 text-4xl md:text-8xl font-bold h-[50px] md:h-[200px] ml-12 md:ml-0 md:w-[600px] mt-12 md:mt-0">
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
          <div className="para mt-12 md:mt-44">        
          <motion.h1
          variants={slideUp(0.4)}
          initial="initial"
           animate="animate"
           className="text-slate-500 font-bold text-xl md:text-2xl mt-4">
            Elevating brands into the digital dawn.
            </motion.h1>
          <motion.button
          variants={slideUp(0.6)}
          initial="initial"
           animate="animate"
          className="primary-btn mt-4">Get Started</motion.button>
          </div>
        </div>

          <div className="heroimg pt-4">
            <motion.img
            initial={{opacity: 0, x:100}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 0.5, delay: 0.6}}
            src={HeroImg} alt="hero" 
            className="rounded-lg mx-2"/>
          </div>

      </div>

      {/* Second Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] ">
      <div className="heroimg pt-4">
            <motion.img
            initial={{opacity: 0, x:100}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 0.5, delay: 0.4}}
            src={HeroImg2} alt="hero"
            className="rounded-lg" />
          </div>
        <div className="flex flex-col justify-center">
          <motion.h1 
            initial={{opacity: 0, x:-30}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 0.5, delay: 0.4}}
             className=" text-blue-800/90 text-4xl md:text-8xl font-bold mx-6">
              Empowering Brands at the Break of Digital Dawn.
          </motion.h1>
          <motion.h1
            initial={{opacity: 0, x:-30}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration: 0.5, delay: 0.4}}
            className="text-slate-500 font-bold  text-xl md:text-2xl mx-7">Your Brand, Your Dawn, Your Triumph.</motion.h1>
        </div>
      </div>
      <Cards />
    </div>
  )
}

export default HomePage