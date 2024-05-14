// eslint-disable-next-line no-unused-vars
import React from "react";
// import "./Wfooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

function Wfooter() {
  return (
    <div className=" grid tm:grid-cols-3 sm:grid-rows-1 grid-cols-1 justify-center md:gap-y-5 bg-[#17253a] text-white sm:px-20 px-6 sm:py-10 py-4 sm:text-base tm:text-[80%] text-[70%]">
      <div className="flex flex-col gap-y-3 sm:mb-5 mb-1">
        <p className="font-bold sm:text-2xl text-lg sm:py-3">About us</p>
        <div className="space-y-1 text-gray-500">
          <p>How it works</p>
          <p>Terms and Services</p>
          <p>Legal & Privacy information</p>
          <p>Help ?</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 sm:mb-5 mb-1">
        <p className="font-bold sm:text-2xl text-lg sm:py-3">Contact us</p>
        <div className="space-y-1 text-gray-500">
          <p>Contact</p>
          <p>Support</p>
          <p>Sponserships</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="font-bold sm:text-2xl text-lg sm:py-3 sm:text-start text-center">Connect with us</p>
        <div className="logo flex sm:gap-x-10 gap-5 flex-wrap lg:justify-normal justify-center">
          <a className="p-2">
            <FontAwesomeIcon className="tm:h-8 h-6" icon={faFacebook} />
          </a>
          <a className="p-2">
            <FontAwesomeIcon className="tm:h-8 h-6" icon={faXTwitter} />
          </a>
          <a className="p-2">
            <FontAwesomeIcon className="tm:h-8 h-6" icon={faInstagram} />
          </a>
          <a className="p-2">
            <FontAwesomeIcon className="tm:h-8 h-6" icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Wfooter
