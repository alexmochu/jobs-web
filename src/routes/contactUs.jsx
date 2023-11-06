import { Fragment, useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        alert('Email sent successfully');
        // Clear the form or perform any other desired actions
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Fragment>
      <div className='relative' id='home'>
        <div className='max-w-7xl pt-20 mx-auto px-6 mt-10 md:px-12 xl:px-6'>
          <div className='relative ml-auto'>
            <div className='lg:w-2/3 mx-auto'>
              <label className='block text-center'>
                <h1 className='text-4xl font-bold tracking-tight mb-11 text-gray-900'>Contact Us</h1>
              </label>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-wrap">
              <div className="w-full md:w-1/2 p-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="w-full p-2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full h-[300px] px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="w-full p-2">
                <button
                  type="submit"
                  className="w-[100px] bg-indigo-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
                >
                  Send
                </button>
              </div>
            </form>
            <div className="text-center mt-4 text-xl">
              <p className="text-black">You can also contact us through:</p>
              <p>
                <a
                  href="mailto:garagekejani@gmail.com"
                  className="text-indigo-700 hover:underline"
                >
                  Email: garagekejani@gmail.com
                </a>
                &nbsp;or&nbsp;
                <a
                  href="https://twitter.com/kejanijobs"
                  className="text-indigo-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter: @kejanijobs
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
