/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import logo from "../assets/images/codestates-logo.png";

const headerStyle = css`
  height: 60px;
  background: rgba(0, 0, 0, 0.05);
`;
const logoStyle = css`
  position: absolute;
  width: 100px;
  left: 60px;
  top: 18px;
`;

function Header() {
  return (
    <header css={headerStyle}>
      <Link to="/">
        <img css={logoStyle} src={logo} alt="logo" />
      </Link>
    </header>
  );
}

export default Header;
