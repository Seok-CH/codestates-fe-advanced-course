import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: "HelveticaNueu";
  }
  body {
    overflow-y: scroll;
  }
  a {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    text-decoration: none;
    color: black;
  }
  button {
    border: 0;
    background: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
  h1,
  h2,
  h3 {
    font-weight: bold;
  }
`;
