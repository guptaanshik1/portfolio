import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen">
      <div className="pt-16 w-full h-full max-w-[1000px] mx-auto flex flex-col justify-center items-center">
        <div className="text-center pb-8 px-4 border-gray-500">
          <p className="sm:text-6xl border-b-4 border-gray-500 text-3xl font-bold text-[#2d2e31ca]">
            Contact
          </p>
        </div>

        <div className="px-4 w-full">
          <form
            method="POST"
            action="https://getform.io/f/6db0975f-0607-4f00-990d-9b521e227e1d"
            className="h-auto w-full flex flex-col justify-center items-center"
          >
            <input
              className="w-full py-2 text-center mb-2 focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter name"
            />
            <input
              className="w-full py-2 text-center mb-2 focus:outline-none"
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <textarea
              className="w-full py-2 text-center focus:outline-none"
              name="message"
              rows="5"
              cols="20"
              placeholder="Enter message"
            ></textarea>
            <button className="text-white bg-[#8686f0] border-2 rounded-md mt-4 p-4 hover:scale-110 hover:bg-[#fff] hover:text-black hover:border-blue-600 duration-500">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
