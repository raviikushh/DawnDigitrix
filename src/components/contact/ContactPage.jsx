import { useState } from 'react';




const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };



  return (
    <>
    <div className="contact-page mt-32 px-4 sm:px-6 lg:px-8 bg-gray-100">
  <h1 className="text-4xl font-bold text-center mb-8 pt-10">Connect with Us</h1>
  <form
    onSubmit={handleSubmit}
    className="contact-form max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-14"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      <div className="form-group">
        <label
          htmlFor="brandName"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Brand Name:
        </label>
        <input
          type="text"
          id="brandName"
          name="brandName"
          value={formData.brandName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Phone (optional):
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      <div className="form-group">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
    <div className="form-group mb-6">
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Send Message
    </button>
  </form>
</div>

    </>
  );

}

export default ContactPage