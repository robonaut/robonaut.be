import React from 'react';
import {
  FaAddressCard,
  FaBookmark,
  FaCode,
  FaGithub,
  FaGitlab,
  FaHeart,
  FaHighlighter,
  FaLaptopCode,
  FaLinkedin,
  FaList,
  FaRegStar,
  FaStar,
  FaThumbsUp,
} from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';
import type { IconType } from 'react-icons/lib';

import Image from '../../elements/image';

const icons: Record<string, IconType> = {
  FaAddressCard,
  FaBookmark,
  FaCode,
  FaGithub,
  FaGitlab,
  FaHeart,
  FaHighlighter,
  FaLaptopCode,
  FaLinkedin,
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
  title?: string;
}): JSX.Element | null => {
  if (text === 'icon') {
    const Icon = icons[href];

    if (!Icon) {
      return null;
    }

    return <Icon className={`icon ${href}`} />;
  }

  return <Image src={href} alt={text} fallback={href.replace('.webp', '.png')} />;
};
