"use client";
import Image from "next/image";
import React from "react";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold flex items-center justify-center mt-8 tracking-tight text-gray-900 sm:text-4xl">
        Get In Touch
      </h1>
      <p className="mt-2 mb-8 text-lg font-semibold leading-8 text-gray-600">
        I look forward to hearing from you soon.
      </p>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="flex-1 text-start py-5 px-3">
          <h2 className="text-l font-semibold  text-gray-700  text-justify sm:text-l">
            I am committed to crafting cutting-edge web applications that
            captivate users and deliver an exceptional online experience. With a
            proven track record of successfully developing and deploying
            innovative solutions, I take pride in my ability to bridge the gap
            between creative design and robust functionality.
          </h2>
          <address className="text-gray-700 flex items-center font-semibold gap-2 mt-10">
            <MdLocationOn /> Location: {""}
            <span className="text-sm text-gray-500">
              Dubai,United Arab Emirates
            </span>
          </address>
          <br />
          {/* contact  */}
          <address className="text-gray-700 flex items-center font-semibold gap-2 mt-10">
            <MdEmail size={20} /> Email Address: {""}
            <span className="text-sm text-gray-500">
              <a href="mailto:doochukbeni@gmail.com">doochukbeni@gmail.com</a>{" "}
            </span>
          </address>
          <br />
          <address className="text-gray-700 flex items-center font-semibold gap-2 mt-10">
            <BsFillTelephoneFill size={20} /> Mobile Number: {""}
            <span className="text-sm text-gray-500">
              <a href="tel:+971567038842">+971567038842</a>
            </span>
          </address>
          <div className="flex relative mt-10 items-center justify-center sm:mt-20 gap-10">
            <a href="https://github.com/Doochukbeni/">
              <Image
                src="/brands/github.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100071537837913">
              <Image
                src="/brands/facebook.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
            </a>
            <a href="https://twitter.com/doochukbeni11">
              <Image
                src="/brands/twitter.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
            </a>
            <a href="https://www.linkedin.com/in/benjamin-izummuo-83589b15b/">
              <BsLinkedin size={20} className="text-indigo-400 rounded-md" />
            </a>
          </div>
        </div>

        <form className="flex-1 mx-auto max-w-full mt-0 p-2 text-start sm:mt-2">
          <div className="sm:col-span-2 mt-2.5">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                required
                placeholder="Name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 mt-2.5">
            <label
              htmlFor="phone"
              className="block capitalize text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                required
                placeholder="Email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 mt-2.5">
            <label
              htmlFor="phone"
              className="block capitalize text-sm font-semibold leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-1">
              <input
                type="tel"
                required
                placeholder="Phone Number"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 mt-2.5">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                name="message"
                placeholder="Message"
                cols="30"
                rows="10"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="flex mt-2.5 gap-x-4 sm:col-span-2">
            <label
              className="text-sm  pl-2 leading-6 text-gray-600"
              id="switch-1-label"
            >
              By submitting this form, you agree to our
              <a href="#" className="font-semibold text-indigo-600 ml-1">
                privacy&nbsp;policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="block w-full my-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
