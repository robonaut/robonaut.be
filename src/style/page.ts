import styled from "styled-components";

import colors from "./colors";

export const StyledPage = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${colors.navy};
  }

  h1 {
    font-size: 2.6rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.silver};
  }

  h2 {
    font-size: 2rem;
    font-weight: bolder;
    margin-top: 3rem;
    margin-bottom: 1.6rem;
    .icon {
      margin-right: 1rem;
    }
  }

  h3 {
    background-color: ${colors.whiteDarker};
    padding: 0.4rem 1rem;
    border-radius: 8px;
    font-size: 1.6rem;
    font-weight: bolder;
    display: flex;
    align-items: flex-start;
    margin-top: 2rem;
    margin-bottom: 1.6rem;
    .icon {
      margin-right: 1rem;
    }
    a {
      font-size: 1rem;
      margin-left: 1rem;
      text-decoration: none;
      color: ${colors.blue};
    }
  }

  h4 {
    color: ${colors.blue};
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  h5 {
    font-size: 1.4rem;
    font-weight: bold;
    font-style: italic;
    margin-top: 2rem;
    margin-bottom: 1.6rem;
  }

  p {
    margin-bottom: 2rem;
  }

  blockquote {
    border-left: 8px solid ${colors.whiteDarker};
    padding-left: 8px;

    .cite {
      font-weight: bold;
      .author {
        color: ${colors.blue};
      }
      .role {
        color: ${colors.grey};
        margin-left: 1rem;
        font-size: 1rem;
      }
    }
  }

  .image {
    margin-left: 0.4rem;
    margin-top: 0.4rem;
    width: calc(50% - 1rem);
    border-radius: 8px;
    object-fit: contain;
    &[alt="apple_appstore"] {
      width: 100px;
    }
    &[alt="google_playstore"] {
      width: 112px;
    }
    @media (min-width: 768px) {
      width: calc(25% - 1.6rem);
    }
    @media (min-width: 100rem) {
      width: 18rem;
    }
  }

  .date {
    font-size: 1.2rem;
    color: ${colors.navy};
    margin-left: 1rem;
  }
`;
