import { Link } from 'react-router-dom';

const ServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-20">
      {/* Services Section */}
      <div className="container mx-auto px-4 py-12 mt-20">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Our Services</h1>
        <p className="mb-12 text-center text-gray-600 text-lg max-w-2xl mx-auto">
          We provide cutting-edge digital marketing solutions tailored to help your business grow and thrive in today&apos;s competitive landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Social Media Marketing</h2>
            <p className="text-gray-600">
              Maximize your online presence and boost your rankings with strategic SEO techniques that drive organic traffic and visibility.
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">SEO Optimization</h2>
            <p className="text-gray-600">
              Build a strong social presence and foster meaningful engagement with tailored campaigns across all major platforms.
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Performance Marketing</h2>
            <p className="text-gray-600">
              Craft compelling content that resonates with your audience, from blogs and articles to engaging video and visual assets.
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Content Marketing</h2>
            <p className="text-gray-600">
              Launch targeted ad campaigns designed to reach your audience at the right time, driving immediate traffic and conversions.
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Email Marketing</h2>
            <p className="text-gray-600">
              Nurture customer relationships and increase retention with personalized email marketing campaigns that convert.
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Web Design & Development</h2>
            <p className="text-gray-600">
              Create a stunning, responsive website that delivers a seamless user experience and showcases your brand&apos;s uniqueness.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="about-us mt-16 py-12 bg-gray-100">
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg">
          We are a dedicated team of digital marketing experts with years of experience helping businesses succeed online. Our passion is driving results through innovative strategies and personalized services. Whether you need more traffic, engagement, or conversions, we have the tools to make it happen.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us mt-16 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto mb-8">
          Ready to take your digital marketing to the next level? Contact us today for a free consultation and let’s start growing your business together.
        </p>
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
