export const px2vw = (size: number, width = 800): string =>
  `${(size / width) * 100}vw`;
