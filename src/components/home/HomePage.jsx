
import Typewriter from 'typewriter-effect'
import {motion} from 'framer-motion'
import {slideUp} from '../../utility/animation'
import Cards from "../cards/Cards"
import { useEffect, useState } from 'react';
import Video from '../../assets/back-video-2x-cropped.mp4'
import Team from '../../assets/team.jpg'

const HomePage = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
      window.addEventListener('scroll', checkScrollTop);
      return () => {
        window.removeEventListener('scroll', checkScrollTop);
      };
    }, [showScroll]);



  return (
    <>
      {showScroll && (
        <button
          onClick={scrollTop}
          className="fixed bottom-4 z-10 right-4 bg-blue-500 text-white p-3 rounded-full h-12 w-10 shadow-lg hover:bg-blue-700 transition duration-300"
        >
          ↑
        </button>
      )}
      <div className="relative h-[800px] w-full overflow-hidden">
        <video
          src={Video}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          type="video/mp4"
          playsInline
        ></video>
      </div>
      <div className="bg-teal-100 overflow-hidden md:px-40 top-0 -mt-[710px]">
        <div className="flex flex-col md:flex-row justify-between min-h-[600px]">
          <div className="flex flex-col justify-center items-center md:items-start">
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className=" text-slate-800 text-6xl md:text-8xl font-bold h-[50px] md:h-[200px] ml-8 md:ml-0 md:w-[600px] mt-12 md:mt-0"
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Unleash the Dawn of Digital Success!")
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
            <div className="para mt-44 md:mt-44 mx-8 md:mx-0">
              <motion.h1
                variants={slideUp(0.4)}
                initial="initial"
                animate="animate"
                className="text-white font-bold text-xl md:text-2xl mt-4"
              >
                Elevating brands into the digital dawn.
              </motion.h1>
              <motion.button
                variants={slideUp(0.6)}
                initial="initial"
                animate="animate"
                className="primary-btn mt-4"
              >
                Get Started
              </motion.button>
            </div>
          </div>

          {/* <div className="heroimg pt-4">
            <motion.img
            initial={{opacity: 0, x:100}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 0.5, delay: 0.6}}
            src={HeroImg} alt="hero" 
            className="rounded-lg md:mx-2 p-4 "/>
          </div> */}
        </div>
      </div>

     <div className="black bg-black/90 md:h-[500px]  overflow-hidden flex flex-col md:flex-row justify-between md:px-28 md:py-40 md:gap-8 py-10">
         <div className="photo md:w-full h-full md:m-auto">
           <img src={Team} alt="team" className="rounded-xl p-2 md:p-0" />
         </div>
         <div className="flex  flex-col text-justify text-xl md:pl-14 p-4 md:p-0">
             <h1 className="text-white text-5xl">Why Choose Us?</h1>
             <p className="text-white mt-4">At <span className="text-xl font-semibold">DawnDigitrix</span>, the leading Digital Marketing Agency in Delhi, we focus on delivering personalized strategies that align with your unique business objectives. Our approach ensures that every solution is designed with your success in mind. </p>
            <p className="text-white mt-4"> Choose <span className="text-xl font-semibold">DawnDigitrix</span> for tailor-made digital marketing solutions and a dedicated partnership that is fully committed to helping your business thrive in the ever-evolving digital landscape.</p>
         </div>
     </div>

      <div className="md:px-40 overflow-hidden">
        
        {/* Second Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px]">
          <div className="ct pt-4 flex flex-col justify-evenly pl-8 md:px-0 md:gap-0 mr-8 text-left">
              <div className="one ">
                <h1 className='text-3xl font-semibold'>Results That Matter</h1>
                <p className='text-[20px] text-slate-900'>We focus on delivering outcomes that match your vision. Our goal is to provide timely, impactful solutions that drive real, measurable growth for your brand. From increased visibility to higher engagement and conversions, we align every move with your success.</p>
              </div>
              <div className="two"><h1 className='text-3xl font-semibold'>Your Growth Partners</h1>
                <p className='text-[20px] text-slate-900'>At DawnDigitrix, we are more than just marketers—we’re your growth partners. With innovative strategies and dedicated support, we’re committed to guiding your brand toward sustained success, offering creative solutions that light the way to your goals.</p>
              </div>
          </div>
          <div className="flex flex-col justify-center p-4 md:p-0">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=" text-blue-800/90 text-4xl md:text-7xl font-bold mx-2 text-left"
            >
              Empowering Brands at the <span className='italic'>Break of Digital</span> <span className=''>Dawn.</span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-black font-bold  text-xl md:text-3xl mx-3 mt-6"
            >
              Your Brand, Your Dawn, Your Triumph
            </motion.h1>
          </div>
        </div>
        <Cards />
      </div>
    </>
  )
}

export default HomePage