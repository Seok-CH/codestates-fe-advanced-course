/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import logo from "../assets/images/codestates-logo.png";

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
  opacity: 0.5;
`;

const logoStyle = css`
  width: 200px;
`;

function Loading() {
  return (
    <div className="container" css={containerStyle}>
      <img css={logoStyle} src={logo} alt="logo" />
    </div>
  );
}

export default Loading;
