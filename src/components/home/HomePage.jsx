// import HeroImg from "../../assets/1.jpg"
import HeroImg2 from "../../assets/strategy.avif"
// import IdeaImg from "../../assets/ideas.jpg"
// import ExpertTeam from "../../assets/expert-team.avif"
// import Customer from "../../assets/customer.avif"
// import TrackRecord from "../../assets/track-record.avif"
import Typewriter from 'typewriter-effect'
import {motion} from 'framer-motion'
import {slideUp} from '../../utility/animation'
import Cards from "../cards/Cards"
import { useEffect, useState } from 'react';
import Video from '../../assets/back-video.mp4'

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
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full h-12 w-10 shadow-lg hover:bg-blue-700 transition duration-300"
        >
          ↑
        </button>
      )}
      <div className="md:h-[700px] h-[700px] w-full">
        <video
          src={Video}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          type="video/mp4"
          playsInline
        ></video>
      </div>
      <div className="bg-gray-100 overflow-hidden md:px-40 top-0 md:-mt-[600px] -mt-[600px]">
        <div className="flex flex-col md:flex-row justify-between min-h-[600px]">
          <div className="flex flex-col justify-center items-center md:items-start">
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className=" text-slate-800 text-4xl md:text-8xl font-bold h-[50px] md:h-[200px] ml-8 md:ml-0 md:w-[600px] mt-12 md:mt-0"
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
            <div className="para mt-12 md:mt-44">
              <motion.h1
                variants={slideUp(0.4)}
                initial="initial"
                animate="animate"
                className="text-slate-500 font-bold text-xl md:text-2xl mt-4"
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
        {/* Second Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] ">
          <div className="heroimg pt-4">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={HeroImg2}
              alt="hero"
              className="rounded-lg p-4 md:p-0"
            />
          </div>
          <div className="flex flex-col justify-center p-4 md:p-0">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=" text-blue-800/90 text-4xl md:text-8xl font-bold mx-6"
            >
              Empowering Brands at the Break of Digital Dawn.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-500 font-bold  text-xl md:text-2xl mx-7"
            >
              Your Brand, Your Dawn, Your Triumph.
            </motion.h1>
          </div>
        </div>
        <Cards />
        {/* Why Choose Us Section */}
        {/* <div className="why-choose-us bg-white py-16"> */}
        {/* <div className="container mx-auto px-4">
          <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8"
          >
        Our Unique Advantages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 md:w-1/2 h-72"
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Experienced Professionals</h3>
                <p className="text-gray-600">
                  Our team consists of industry experts with years of experience in digital marketing, web development, and design.
                </p>
              </motion.div>
              <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src={ExpertTeam}
                alt="Experienced Professionals"
                className="rounded-lg shadow-lg md:w-1/2 mt-4 md:mt-0 md:ml-4 object-cover h-full"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 md:w-1/2 h-72"
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Innovative Solutions</h3>
                <p className="text-gray-600">
                  We provide cutting-edge solutions tailored to your business needs, ensuring you stay ahead of the competition.
                </p>
              </motion.div>
              <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                src={IdeaImg}
                alt="Innovative Solutions"
                className="rounded-lg shadow-lg md:w-1/2 mt-4 md:mt-0 md:ml-4 object-cover h-full"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 md:w-1/2"
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Client-Centric Approach</h3>
                <p className="text-gray-600">
                  We prioritize our clients needs and work closely with them to achieve their business goals and objectives.
                </p>
              </motion.div>
              <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                src={Customer}
                alt="Client-Centric Approach"
                className="rounded-lg shadow-lg md:w-1/2 mt-4 md:mt-0 md:ml-4 object-cover md:h-[270px] h-full"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 md:w-1/2"
              >
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Proven Track Record</h3>
                <p className="text-gray-600">
                  We have a history of delivering successful projects and achieving outstanding results for our clients.
                </p>
              </motion.div>
              <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                src={TrackRecord}
                alt="Proven Track Record"
                className="rounded-lg shadow-lg md:w-1/2 mt-4 md:mt-0 md:ml-4 object-cover h-full"
              />
            </div>
          </div>
        </div> */}
        {/* </div> */}
      </div>
    </>
  )
}

export default HomePage