import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ATHIRADI" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/arun-kumar-web/",
  },
  {
    icon: <TbBrandFiverr />,
    path: "https://www.fiverr.com/athiradi",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
