import React from "react";
import {
  FaAddressCard,
  FaBookmark,
  FaCode,
  FaHeart,
  FaHighlighter,
  FaLaptopCode,
  FaList,
  FaRegStar,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { IconType } from "react-icons/lib";

import { StyledImage } from "../../style/layout";

const icons: Record<string, IconType> = {
  FaAddressCard,
  FaBookmark,
  FaCode,
  FaHeart,
  FaHighlighter,
  FaLaptopCode,
  FaList,
  FaRegStar,
  FaStar,
  FaThumbsUp,
  IoSchool,
};

export default ({
  text,
  href,
}: {
  text: string;
  href: string;
}): JSX.Element | null => {
  if (text === "icon") {
    const Icon = icons[href];

    if (!Icon) {
      return null;
    }

    return <Icon className={`icon ${href}`} />;
  }

  return <StyledImage src={href} alt={text} />;
};
