import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Body from "../../elements/Body";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white  left-0 text-white py-4  ">
      <Body>
        <div className="md:flex-row flex-col flex md:justify-between items-center">
          <div className="text-black">
            copyright <span className="">&copy;</span> 2022 Home munch
          </div>
          <div className="flex gap-4 my-4 md:my-0">
            <a
              href="https://www.facebook.com/profile.php?id=100087603346622"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare color="black" size={23} />
            </a>
            <a
              href="https://twitter.com/HomeMunchUK"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare color="black" size={23} />
            </a>
            <a
              href="https://www.instagram.com/homemunch/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram color="black" size={23} />
            </a>
          </div>
        </div>
      </Body>
    </footer>
  );
};

export default Footer;
