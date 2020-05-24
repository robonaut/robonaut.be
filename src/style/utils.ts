export const px2vw = (size: number, width = 1024): string =>
  `${(size / width) * 100}vw`;
