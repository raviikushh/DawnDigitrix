import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { slideUp } from '../../utility/animation';
import Cards from '../cards/Cards';
import { useEffect, useState, useRef } from 'react';
import Video from '../../assets/back-video-2x-cropped.mp4';
import HeroImg from '../../assets/hero_img.jpg';

const HomePage = () => {
  const [showScroll, setShowScroll] = useState(false);
  
  // Ref for the next section
  const nextSectionRef = useRef(null);

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

  // Scroll to the next section
  const handleGetStartedClick = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const videoRef = useRef(null);
  
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Attempt to play the video programmatically
      video.play().catch((error) => {
        console.error("Autoplay failed:", error);
        // Optional: handle autoplay failure, like showing a fallback image
      });
    }
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

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
          ref={videoRef}
          src={Video}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          type="video/mp4"
          playsInline
        ></video>
      </div>
      <div className="bg-teal-100 overflow-hidden md:px-40 top-0 -mt-[700px] md:-mt-[650px]">
        <div className="flex flex-col md:flex-row justify-between min-h-[600px]">
          <div className="flex flex-col justify-center items-center md:items-start">
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-slate-800 text-6xl md:text-8xl font-bold h-[50px] md:h-[200px] ml-8 md:ml-0 md:w-[600px] mt-12 md:mt-0"
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Unleash the Dawn of Digital Success!")
                    .pauseFor(2500)
                    .deleteAll(30)
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
                className="text-white font-bold text-xl md:text-2xl mt-6"
              >
                Elevating brands into the digital dawn.
              </motion.h1>
              <motion.button
                variants={slideUp(0.6)}
                initial="initial"
                animate="animate"
                onClick={handleGetStartedClick}
                className="primary-btn mt-4"
              >
                Get Started
              </motion.button>
              <motion.div
                variants={slideUp(0.6)}
                initial="initial"
                animate="animate"
                className="photo w-[390px] md:hidden mt-4"
              >
                <img src={HeroImg} alt="team" className="rounded-xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div ref={nextSectionRef} className="black bg-black/90 md:h-[500px] overflow-hidden flex flex-col md:flex-row justify-between md:px-28 md:py-36 md:gap-4 py-10">
        <div className="photo md:w-full h-full md:m-auto hidden md:block">
          <img src={HeroImg} alt="team" className="rounded-xl mt-2 w-96 h-64" />
        </div>
        <div className="flex flex-col text-justify text-xl md:pl-14 p-4 md:p-0">
          <h1 className="text-white text-5xl">Why Choose Us?</h1>
          <p className="text-white mt-4">
            At <span className="text-xl font-semibold">DawnDigitrix</span>, the leading Digital Marketing Agency in Delhi, we focus on delivering personalized strategies that align with your unique business objectives. Our approach ensures that every solution is designed with your success in mind.
          </p>
          <p className="text-white mt-4">
            Choose <span className="text-xl font-semibold">DawnDigitrix</span> for tailor-made digital marketing solutions and a dedicated partnership that is fully committed to helping your business thrive in the ever-evolving digital landscape.
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="md:px-40 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px] mt-4 md:mt-0">
          <div className="ct pt-4 flex flex-col justify-evenly pl-8 md:px-0 md:gap-0 mr-8 text-left gap-8 md:gap-0">
            <div className="one">
              <h1 className="text-3xl font-semibold">Results That Matter</h1>
              <p className="text-[20px] text-slate-900">
                We focus on delivering outcomes that match your vision. Our goal is to provide timely, impactful solutions that drive real, measurable growth for your brand. From increased visibility to higher engagement and conversions, we align every move with your success.
              </p>
            </div>
            <div className="two">
              <h1 className="text-3xl font-semibold">Your Growth Partners</h1>
              <p className="text-[20px] text-slate-900">
                At DawnDigitrix, we are more than just marketers—we’re your growth partners. With innovative strategies and dedicated support, we’re committed to guiding your brand toward sustained success, offering creative solutions that light the way to your goals.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-4 md:p-0">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-blue-800/90 text-4xl md:text-7xl font-bold mx-2 text-left"
            >
              Empowering Brands at the <span className="italic">Break of Digital</span> <span className="">Dawn.</span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-black font-bold text-xl md:text-3xl mx-3 mt-6"
            >
              Your Brand, Your Dawn, Your Triumph
            </motion.h1>
          </div>
        </div>
        <Cards />
      </div>
    </>
  );
};

export default HomePage;
