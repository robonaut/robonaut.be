import React from "react";

export default ({
  src,
  fallback,
  type = "image/webp",
  alt,
  ...delegated
}: {
  src: string;
  fallback: string;
  type?: string;
  alt?: string;
}): JSX.Element => {
  return (
    <picture {...delegated}>
      <source srcSet={src} type={type} />
      <img className="image" alt={alt} src={fallback} />
    </picture>
  );
};
