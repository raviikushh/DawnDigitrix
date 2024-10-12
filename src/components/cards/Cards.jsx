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
    <div className="bg-gray-50 py-20">
    <div className="containers">
    </div>
        <motion.div 
                    initial={{opacity: 0, x:-100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 0.5, delay: 0.4}}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 rounded-lg">

                {/* Social Media Marketing */}
            <div className="Social Media Marketing bg-white shadow-xl rounded-xl h-[400px]  px-5 py-10 cursor-pointer text-center flex flex-col  items-center gap-5 md:max-w-[300px] mx-auto hover:scale-110 transition-all duration-700">
                <img src={Img1} alt="" className="w-36 h-36 rounded-full object-contain p-3" />
                <h1 className="text-xl font-semibold">Social Media Marketing</h1>
                <p className="text-sm text-black/80 leading-relaxed">Our social media marketing services are designed to grow your brand’s online presence. We help your brand establish trust and build relationships with potential buyers.</p>
            </div>

            {/* SEO */}            
            <div className="SEO bg-white shadow-xl rounded-xl h-[400px]  px-5 py-10 cursor-pointer text-center flex flex-col  items-center gap-5 md:max-w-[300px] mx-auto hover:scale-110 transition-all duration-700">
                <img src={Img2} alt="" className="w-36 h-36 rounded-full object-contain" />
                <h1 className="text-xl font-semibold">SEO</h1>
                <p className="text-sm text-black/80 leading-relaxed">Our SEO services help drive traffic to your website by improving keyword rankings in search engines.</p>
            </div>
            
            {/* PPC */}
            <div className="PPC bg-white shadow-xl rounded-xl h-[400px]  px-5 py-10 cursor-pointer text-center flex flex-col  items-center gap-5 md:max-w-[300px] mx-auto hover:scale-110 transition-all duration-700">
                <img src={Img3} alt="" className="w-36 h-36 rounded-full object-contain" />
                <h1 className="text-xl font-semibold">PPC</h1>
                <p className="text-sm text-black/80 leading-relaxed">Our PPC services help drive traffic to your website by improving keyword rankings in search engines.</p>
            </div>

            {/* Content Marketing */}
            <div className="Content Marketing bg-white shadow-xl rounded-xl h-[400px]  px-5 py-10 cursor-pointer text-center flex flex-col  items-center gap-5 md:max-w-[300px] mx-auto hover:scale-110 transition-all duration-700">
                <img src={Img4} alt="" className="w-36 h-36 rounded-full object-contain" />
                <h1 className="text-xl font-semibold">Content Marketing</h1>
                <p className="text-sm text-black/80 leading-relaxed">Our content marketing services are designed to help your brand establish trust and build relationships with potential buyers.</p>
            </div>

            {/* Email MArketing */}
            <div className="Email Marketing bg-white shadow-xl rounded-xl h-[400px]  px-5 py-10 cursor-pointer text-center flex flex-col  items-center gap-5 md:max-w-[300px] mx-auto hover:scale-110 transition-all duration-700">
                <img src={Img5} alt="" className="w-36 h-36 rounded-full object-contain" />
                <h1 className="text-xl font-semibold">Email Marketing</h1>
                <p className="text-sm text-black/80 leading-relaxed">Our email marketing services help you speed up your sales cycle. The goal of email marketing is to move your prospects from one stage of your sales funnel to the next.</p>
            </div>

            {/* Web Design & Developement */}
            <div className="Web Design & Developement bg-white shadow-xl rounded-xl h-[400px]  px-5 py-10 cursor-pointer text-center flex flex-col  items-center gap-5 md:max-w-[300px] mx-auto hover:scale-110 transition-all duration-700">
                <img src={Img6} alt="" className="w-36 h-36 rounded-full object-contain" />
                <h1 className="text-xl font-semibold">Web Design & Developement</h1>
                <p className="text-sm text-black/80 leading-relaxed">Our web design & development services work to create a website that speaks for your brand. We provide web design and web development services to help you achieve your digital marketing goals.</p>
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default Cards