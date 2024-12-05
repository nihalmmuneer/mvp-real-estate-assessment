import { TextInput } from "flowbite-react";
import React, { useState } from "react";

const Info = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => setIsChecked(!isChecked);

  return (
    <div className="min-h-fit pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl">Don&apos;t Miss The News!</h1>
          <p className="text-xs  text-black/50">
            Signup below to receive updates on new listings as well as curated
            picks based on preference!
          </p>
          <div className="flex flex-col gap-2 bg-transparent">
            <TextInput
              type="text"
              placeholder="Name*"
              required
              className="text-sm "
            />
            <TextInput
              type="email"
              placeholder="Email*"
              required
              className="text-sm bg-transparent "
            />
            <div className="flex items-center border border-gray-300 w-full rounded-lg overflow-hidden">
              <select
                id="country-code"
                className="bg-transparent text-gray-700 outline-none text-sm sm:text-base px-3 py-2 border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="+971">+971</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="text"
                id="phone-number"
                className="flex-grow px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-none border-none"
                placeholder="Phone Number*"
                required
              />
            </div>
            <div className="relative px-10">
              <div className="border-b-2 pt-8"></div>
              <button className="bg-teal-500 text-sm text-black/50 absolute top-[12px] left-[35%] md:left-[40%] text-white px-4 py-2 rounded-md flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-teal-300">
                Preferences
                <svg
                  className="w-4 h-4 ml-2 transform transition-transform duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center text-center justify-center mt-10 space-x-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={toggleCheckbox}
                className="hidden"
              />
              <div
                className={`w-5 h-5 flex items-center justify-center gap-0 border-2 rounded-md ${
                  isChecked ? "border-teal-500 bg-teal-100" : "border-gray-300"
                }`}
              >
                {isChecked && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-teal-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </label>

            <span className="text-gray-700  text-xs ">
              Email me recommended properties!
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-xs  text-gray-400">
              Fields marked with an asterisk * must be filled.
            </p>
            <button
              type="button"
              className="py-2 px-20 text-white bg-teal-500 rounded-full"
            >
              Submit Info
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-6xl mx-auto pt-10 md:flex-row justify-between">
        <div className="flex flex-1  justify-between gap-10">
          <ul className="flex flex-col gap-2 flex-1 min-w-0">
            <h1 className="font-semibold text-sm">Services</h1>
            <li className="text-xs">Apartment</li>
            <li className=" text-xs">Warehouse</li>
            <li className=" text-xs">Housing</li>
            <li className=" text-xs">Villa</li>
            <li className=" text-xs">Coworking</li>
          </ul>
          <ul className="flex flex-col gap-2 flex-1 min-w-0">
            <h1 className="font-semibold text-sm">Information</h1>
            <li className=" text-xs">Become a Member</li>
            <li className=" text-xs">Get The App</li>
            <li className=" text-xs">Rules for Sign Up</li>
            <li className="text-xs">Newsletter</li>
          </ul>
          <ul className="flex flex-col gap-2 flex-1 min-w-0">
            <h1 className="font-semibold  text-sm">Company</h1>
            <li className=" text-xs">Partnership</li>
            <li className=" text-xs">Terms of Use</li>
            <li className=" text-xs">About</li>
            <li className=" text-xs">Sitemap</li>
            <li className=" text-xs">Contact</li>
          </ul>
        </div>

        <div className="flex flex-col pl-0 md:pl-14 justify-start gap-4 mt-6 md:mt-0">
          <div className="flex items-center justify-start gap-2">
            <img
              src="logo-here.png"
              alt="logo-here"
              className="w-4 h-auto"
            />
            <span className="text-sm font-semibold">
              {" "}
              Logo Here
            </span>
          </div>
          <p className="text-xs">
            Stay connected with us and let's know more stories <br /> about
            housing & real estate and explore us more.
          </p>
          <div className="flex gap-2 items-center">
            <img src="/facebook.png" alt="facebook" className="w-6 h-6" />
            <img src="/twitter.png" alt="twitter" className="w-6 h-6" />
            <img src="/instagram.png" alt="instagram" className="w-6 h-6" />
            <img src="/pinterest.png" alt="pinterest" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
