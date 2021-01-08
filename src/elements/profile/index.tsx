import React from "react";

import { StyledAvatar } from "../../style/layout";

export default (): JSX.Element | null => (
  <StyledAvatar>
    <picture>
      <source srcSet="/assets/images/robonaut.webp" type="image/webp" />
      <img
        src="/assets/images/robonaut.jpeg"
        style={{ width: "100%", height: "100%", borderRadius: "50%" }}
      />
    </picture>
  </StyledAvatar>
);
null;
