import React from "react";

// import { FaAddressCard, FaCode, FaHeart, FaLaptopCode } from 'react-icons/fa';
// import { IconType } from 'react-icons/lib';
// import { MdSchool, MdThumbUp } from 'react-icons/md';
// import colors from '../../style/colors';
import { StyledImage } from "../../style/layout";

// const icons: Record<string, string> = {
//   FaAddressCard,
//   FaCode,
//   FaHeart,
//   FaLaptopCode,
//   MdSchool,
//   MdThumbUp,
// };

export default ({
  text,
  href,
}: {
  text: string;
  href: string;
}): JSX.Element | null => {
  // if (text === 'icon') {
  //   const Icon = icons[href];

  //   if (!Icon) {
  //     return null;
  //   }

  //   return (
  //     <Icon
  //       style={{ marginRight: '1rem', fontSize: '2rem', color: colors.navy }}
  //     />
  //   );
  // }

  return <StyledImage src={href} alt={text} />;
};
