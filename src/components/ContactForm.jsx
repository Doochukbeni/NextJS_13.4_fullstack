"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!name) {
      return alert("Name is required");
    }
    if (!email) {
      return alert("Email is required");
    }
    if (!message) {
      return alert("Message is required");
    }

    try {
      await axios.post(
        "http://localhost:3000/api/mailer",
        JSON.stringify({ name, email, message }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex-1 mx-auto max-w-full mt-0 p-2 text-start sm:mt-2"
      >
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
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              name="name"
              placeholder="Name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2 mt-2.5">
          <label
            htmlFor="email"
            className="block capitalize text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              placeholder="Email"
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
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
            <Link href="/" className="font-semibold text-indigo-600 ml-1">
              privacy&nbsp;policy
            </Link>
          </label>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="block w-full my-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
