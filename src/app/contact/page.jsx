"use client";
import ContactForm from "@/components/ContactForm";
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

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
