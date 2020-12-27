import React from "react";
import { FaAddressCard, FaCode, FaHeart, FaLaptopCode } from "react-icons/fa";
import { IconType } from "react-icons/lib";

import colors from "../../style/colors";
import { StyledImage } from "../../style/layout";

const icons: Record<string, IconType> = {
  FaAddressCard,
  FaCode,
  FaHeart,
  FaLaptopCode,
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

    return <Icon style={{ marginRight: "1rem", color: colors.navy }} />;
  }

  return <StyledImage src={href} alt={text} />;
};
