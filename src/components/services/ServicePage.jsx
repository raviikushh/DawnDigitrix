import { Link } from 'react-router-dom';

const ServicePage = () => {

  return (
    <div className="container mx-auto px-4 py-12 ">
      {/* Services Section */}
      <div className="container mx-auto px-4 py-12 mt-20">
        <h1 className="text-6xl font-bold mb-6 text-center text-gray-900 bg-gradient-to-b from-blue-700 to-purple-500 text-transparent bg-clip-text">Our Services</h1>
        <p className="mb-12 text-center text-lg max-w-2xl mx-auto">
          We provide cutting-edge digital marketing solutions tailored to help your business grow and thrive in today&apos;s competitive landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Social Media Marketing</h2>
            <p className="text-gray-600 ">
            In today’s digital world, having a strong social media presence is more important than ever. Consumers now expect brands to build communities and engage in meaningful interactions online. By effectively leveraging social media marketing, businesses can connect with their audience, foster lasting relationships, and increase brand loyalty.
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">SEO </h2>
            <p className="text-gray-600">
            If you’re searching for a reliable SEO agency near you, look no further! In today’s highly competitive digital world, ranking high on search engine result pages is crucial for drawing in potential customers. Research indicates that inbound strategies like SEO and blogging generate the highest quality leads for nearly 60% of marketers.
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Performance Marketing</h2>
            <p className="text-gray-600">
            At Dawndigitrix, our performance marketing services focus on delivering measurable results through strategic, data-driven approaches. By utilizing channels like paid search, social media advertising, affiliate marketing, and email marketing, we optimize campaigns for maximum ROI. 
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Content Marketing</h2>
            <p className="text-gray-600">
            In digital marketing, content truly rules as the foundation for success. At Dawndigitrix, we understand that meaningful and engaging content is key to establishing strong connections with both current and prospective clients. 
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Brand Creation</h2>
            <p className="text-gray-600">
            In today’s competitive marketplace, earning consumer trust is fundamental to achieving business success. Most consumers prioritize trust as a key factor before making a purchase decision. At Dawndigitrix, we recognize the critical role that branding plays in building and maintaining that trust. 
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Web Design & Development</h2>
            <p className="text-gray-600">
            In today’s digital landscape, a strong online presence is essential for any business aiming to thrive. With over 1 billion websites worldwide, having a well-crafted, mobile-friendly website is key to building credibility and engaging potential customers. 
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="about-us mt-10 py-4 md:py-8">
        <p className="max-w-3xl mx-auto text-md md:text-2xl text-justify">
        We’re a fresh, passionate team of digital marketing professionals committed to helping businesses grow online. Although new to the market, our focus is on driving meaningful results through innovative strategies and tailored services. Whether you&apos;re looking to increase traffic, boost engagement, or enhance conversions, we have the right tools and approach to help you succeed.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us mt-16 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-center  text-lg max-w-2xl mx-auto mb-8">
        Let&apos; take your brand to the next level through digital Marketing. Contact us Today for Free consultation and grow your business.
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
