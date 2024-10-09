import logo from '../../assets/digi.png'
import fb from '../../assets/fb.avif'
import x from '../../assets/x.avif'
import insta from '../../assets/insta.avif'
import linkedin from '../../assets/linkedin.avif'

export const Footer = () => {
  return (
    <div>
        <div className="h1 bg-black text-white flex flex-col justify-center items-center">
        <h1 className="md:text-3xl text-xl font-bold p-2">Contact Us</h1>
        </div>
        {/* add logo */}
        <section className="bg-black text-white flex  justify-between items-center">
            <img src={logo} alt="" className='h-54 w-48'/>

            <div className="cont">
            <h1>+91 9988776655</h1>
            <h1>xyz@dawndigitrix.com</h1>
            </div>
            <div className="flex flex-row gap-4">
                <i className="fab fa-facebook-f"><img src={fb} alt="" className='h-10 w-12 rounded-full'/></i>
                <i className="fab fa-twitter"><img src={x} alt="" className='h-10 w-12 rounded-full'/></i>
                <i className="fab fa-instagram"><img src={insta} alt="" className='h-10 w-12 rounded-full'/></i>
                <i className="fab fa-linkedin"><img src={linkedin} alt="" className='h-10 w-12 rounded-full'/></i>
            </div>


        </section>
        <footer className="bg-black text-white h-32 flex flex-col justify-center items-center">
        {/* add contact part */}
        <section className="bg-black text-white flex flex-col justify-center items-center h-[100px]">
            {/* <h1 className="text-3xl font-bold">Contact Us</h1> */}
            <div className="flex justify-center items-center gap-4 mt-4">
                <input type="text" placeholder="Enter your email" className="p-2 w-96 text-black" />
                <button className="primary-btn">Subscribe</button>
            </div>
        </section>
            <p>&copy; 2024 All Rights Reserved</p>
        </footer>
    </div>
  )
}
