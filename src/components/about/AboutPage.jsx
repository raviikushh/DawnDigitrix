import Innovative from '../../assets/Innovative.jpg'


const About = () => {
  return (
    <div className="mt-32 bg-black overflow-auto w-full">
        <div className="txt text-white md:mx-28 ">
          <h1 className="md:text-7xl text-3xl pt-20">Achieve Digital Success with Our <span className="text-green-600">Innovative Strategies - cutting edge </span>approach</h1>
        </div>
        <div className="photo mt-12 p-20">
          <img src={Innovative} alt="About" />
        </div>
    <div className="text-gray-300 flex justify-end w-full px-20">
      <div className="w-1/2">
        <p className='text-justify text-lg'>
          At DawnDigitrix, we are passionate about helping businesses harness the power of the digital world. Though we are a new player in the marketing space, our team brings a wealth of experience, creativity, and dedication to every project. Our mission is simple: to help you achieve your marketing goals through innovative solutions that drive results.
          We specialize in understanding your brand&apos;s unique story, audience, and goals to create custom strategies that align with your vision. Whether it&apos;s building a strong online presence, increasing customer engagement, or driving conversions, DawnDigitrix is here to guide you at every step of the journey.
        </p>
      </div>
    </div>

    </div>
  )
}

export default About