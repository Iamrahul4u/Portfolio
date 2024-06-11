"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const email = {
      email: form.current.email.value,
      message: form.current.message.value,
      subject: form.current.subject.value,
    };
    console.log(email);
    emailjs
      .sendForm(
        "service_tgod81q",
        "template_zefuiup",
        form.current,
        "GGZOGFcYZi3jRq7BC",
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <section className="bg-black ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="font-mono md:text-8xl text-4xl mt-20 underline  mb-10 text-center text-white ">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
          Have any Awesome Idea? Let's discuss! or you can just say Hi.. :)
        </p>
        <form className="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className=" border  text-white text-sm rounded-lg bg-gray-950 block w-full p-2.5 border-gray-600 placeholder-gray-600  focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-white rounded-lg border bg-gray-950 shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-600 placeholder-gray-600   shadow-sm-light"
              placeholder="Let us know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-white ">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-white rounded-lg shadow-sm border bg-gray-950   border-gray-600 placeholder-gray-600 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button type="submit" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative flex gap-1">Submit</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
