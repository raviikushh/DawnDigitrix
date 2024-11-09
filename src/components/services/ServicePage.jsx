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
            In today’s digital world, having a strong social media presence is more important than ever. Consumers now expect brands to build communities and engage in meaningful interactions online. By effectively leveraging social media marketing, businesses can connect with their audience, foster lasting relationships, and increase brand loyalty. This approach not only enhances visibility but also helps establish trust and long-term customer engagement. Let Dawndigitrix guide you in understanding what truly resonates with your audience and create a tailored strategy that leads to success!
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">SEO Optimization</h2>
            <p className="text-gray-600">
            If you’re searching for a reliable SEO agency near you, look no further! In today’s highly competitive digital world, ranking high on search engine result pages is crucial for drawing in potential customers. Research indicates that inbound strategies like SEO and blogging generate the highest quality leads for nearly 60% of marketers. By working with a skilled SEO team and implementing proven SEO techniques, you can significantly boost the quality and volume of organic traffic to your site, making a lasting impact on your business’s online presence.
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Performance Marketing</h2>
            <p className="text-gray-600">
            At Dawndigitrix, our performance marketing services focus on delivering measurable results through strategic, data-driven approaches. By utilizing channels like paid search, social media advertising, affiliate marketing, and email marketing, we optimize campaigns for maximum ROI. Our team continuously monitors performance metrics and makes data-informed adjustments to drive website traffic, generate quality leads, and increase sales conversions, ensuring you get the most from your marketing investment.
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Content Marketing</h2>
            <p className="text-gray-600">
            In digital marketing, content truly rules as the foundation for success. At Dawndigitrix, we understand that meaningful and engaging content is key to establishing strong connections with both current and prospective clients. Our expert content team crafts high-quality, SEO-optimized content that delivers your brand’s message effectively, drives valuable interactions, and fosters long-term customer relationships, ensuring your brand stands out and engages audiences for lasting impact.
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Brand Creation</h2>
            <p className="text-gray-600">
            In today’s competitive marketplace, earning consumer trust is fundamental to achieving business success. Most consumers prioritize trust as a key factor before making a purchase decision. At Dawndigitrix, we recognize the critical role that branding plays in building and maintaining that trust. We are committed to creating strategic branding solutions that connect with your audience and establish lasting, trustworthy relationships that drive your business forward.
            </p>
          </div>
          <div className="service-card p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Web Design & Development</h2>
            <p className="text-gray-600">
            In today’s digital landscape, a strong online presence is essential for any business aiming to thrive. With over 1 billion websites worldwide, having a well-crafted, mobile-friendly website is key to building credibility and engaging potential customers. Investing in top-quality website development services in India can help you create a powerful marketing tool, optimized for performance and discoverability. By incorporating effective SEO techniques, your site will rank higher in search results, making it easier for customers to find your business and driving sustained growth.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="about-us mt-10 py-8">
        <p className="max-w-3xl mx-auto text-2xl text-center text-gray-700">
        We’re a fresh, passionate team of digital marketing professionals committed to helping businesses grow online. Although new to the market, our focus is on driving meaningful results through innovative strategies and tailored services. Whether you&apos;re looking to increase traffic, boost engagement, or enhance conversions, we have the right tools and approach to help you succeed.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us mt-16 py-8">
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
