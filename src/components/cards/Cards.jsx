import Img1 from '../../assets/social.avif'
import Img2 from '../../assets/seo.jpg'
import Img3 from '../../assets/ppc.avif' 
import Img4 from '../../assets/content.svg'
import Img5 from '../../assets/email.avif'
import Img6 from '../../assets/web.avif' 
import {motion} from 'framer-motion'



const Cards = () => {
  return (
    <>
    <div className=" py-20 px-10 md:px-0">
    <div className="">
    </div>
        <motion.div 
                    initial={{opacity: 0, x:-100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 0.5, delay: 0.4}}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 rounded-lg">

                {/* Social Media Marketing */}
            <div className="Social Media Marketing bg-white shadow-xl rounded-3xl h-[450px] px-5 py-10 cursor-pointer flex flex-col  items-center gap-5 md:max-w-[330px] mx-auto hover:scale-105 transition-all duration-700 text-center" >
                <img src={Img1} alt="" className="w-36 h-36 rounded-full object-contain p-3" />
                <h1 className="text-xl font-semibold">Social Media Marketing</h1>
                <p className="text-sm text-black leading-relaxed">At Dawn Digitrix, we transform your social media presence into a vibrant community where engagement thrives, and brand stories come alive. Through captivating content and strategic management, we foster meaningful interactions and drive brand awareness.</p>
            </div>

            {/* SEO */}            
            <div className="SEO bg-white shadow-xl rounded-3xl h-[450px]  px-5 py-10 cursor-pointer text-center flex flex-col  items-center gap-5 md:max-w-[330px] mx-auto hover:scale-110 transition-all duration-700">
                <img src={Img2} alt="" className="w-36 h-36 rounded-full object-contain" />
                <h1 className="text-xl font-semibold">SEO</h1>
                <p className="text-sm text-black leading-relaxed">Elevate your brand’s online presence with SEO strategies that boost visibility, drive organic traffic, and connect your audience with your content seamlessly. We use data-driven insights to optimize for search engines and ensure your brand is found by those who matter most.</p>
            </div>
            
            {/* PPC */}
            <div className="PPC bg-white shadow-xl rounded-3xl h-[450px]  px-5 py-10 cursor-pointer text-center flex flex-col  items-center gap-5 md:max-w-[330px] mx-auto hover:scale-110 transition-all duration-700">
                <img src={Img3} alt="" className="w-36 h-36 rounded-full object-contain" />
                <h1 className="text-xl font-semibold">Performance Marketing</h1>
                <p className="text-sm text-black leading-relaxed">Maximizing ROI through highly targeted campaigns that combine real-time analytics and consumer insights. We ensure every rupee spent drives tangible results—whether that’s conversions, leads, or sales—enhancing your bottom line</p>
            </div>

            {/* Content Marketing */}
            <div className="Content Marketing bg-white shadow-xl rounded-3xl h-[450px]  px-5 py-10 cursor-pointer text-center flex flex-col  items-center gap-5 md:max-w-[330px] mx-auto hover:scale-110 transition-all duration-700">
                <img src={Img4} alt="" className="w-36 h-36 rounded-full object-contain" />
                <h1 className="text-xl font-semibold">Content Marketing</h1>
                <p className="text-sm text-black leading-relaxed">Content is king, and we know how to create it. Our content marketing services craft compelling stories that align with your brand’s voice, turning ideas into engaging experiences that captivate your audience and keep them coming back for more.</p>
            </div>

            {/* Email MArketing */}
            <div className="Email Marketing bg-white shadow-xl rounded-3xl h-[450px]  px-5 py-10 cursor-pointer text-center flex flex-col  items-center gap-5 md:max-w-[330px] mx-auto hover:scale-110 transition-all duration-700">
                <img src={Img5} alt="" className="w-36 h-36 rounded-full object-contain" />
                <h1 className="text-xl font-semibold">Email Marketing</h1>
                <p className="text-sm text-black leading-relaxed">Build lasting connections with personalized email campaigns that inform, engage, and inspire action. Our targeted strategies ensure every email adds value, fosters loyalty, and drives engagement for long-term growth.</p>
            </div>

            {/* Web Design & Developement */}
            <div className="Web Design & Developement bg-white shadow-xl rounded-3xl h-[450px]  px-5 py-10 cursor-pointer text-center flex flex-col  items-center gap-5 md:max-w-[330px] mx-auto hover:scale-110 transition-all duration-700">
                <img src={Img6} alt="" className="w-36 h-36 rounded-full object-contain" />
                <h1 className="text-xl font-semibold">Web Design & Development</h1>
                <p className="text-sm text-black leading-relaxed">Your website is your digital front door, and we ensure it leaves a lasting impression. We design and develop visually stunning, user-friendly websites that are not only aesthetically pleasing but also functional, converting visitors into loyal customers.</p>
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default Cards