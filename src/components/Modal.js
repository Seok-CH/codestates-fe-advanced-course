/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
  AiOutlineGlobal,
} from "react-icons/ai";

import { getUserInfo } from "../apis";

const modalOnStyle = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 110px;
  top: -80px;
  min-width: 220px;
  min-height: 140px;
  padding: 20px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 2.5px;
  box-shadow: 0.5px 0.5px 10px 0.5px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 2;
  line-height: 18px;
  background-color: #efefef;

  &::after {
    content: "";
    position: absolute;
    left: -40px;
    top: 50%;
    margin-top: -20px;
    border-top: 20px solid transparent;
    border-left: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 20px solid #efefef;
  }

  .modal__infobox {
    display: flex;
    align-items: center;
    margin-top: 8px;

    span {
      margin-left: 5px;
      font-size: 14px;
      color: gray;
    }
  }
`;

const modalOffStyle = css`
  ${modalOnStyle};
  display: none;
`;

const usernameStyle = css`
  font-size: 20px;
  margin-bottom: 15px;
`;

const author = css`
  padding: 10px 10px 10px 0;
  font-size: 12px;
  position: relative;
`;

const authorHover = css`
  ${author};
  color: gray;
  text-decoration: underline;
`;

function Modal({ userId }) {
  const [userInfo, setUserInfo] = useState({});
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserInfo(userId)
      .then((res) => setUserInfo(res.data))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, [userId]);

  const toggleVisible = (bool) => {
    setVisible(bool);
  };

  if (isLoading) return <span css={author}>WRITTEN BY {userId}</span>;

  return (
    <Link to={`/users/${userId}`} state={{ data: `${userInfo.username}` }}>
      <div style={{ position: "relative" }}>
        <span
          className="author"
          css={visible ? authorHover : author}
          onMouseEnter={() => {
            toggleVisible(true);
          }}
          onMouseLeave={() => {
            toggleVisible(false);
          }}
        >
          WRITTEN BY {userId}
        </span>
        <div
          className="modal"
          css={visible ? modalOnStyle : modalOffStyle}
          onMouseEnter={() => {
            toggleVisible(true);
          }}
          onMouseLeave={() => {
            toggleVisible(false);
          }}
        >
          <h2 css={usernameStyle}>{userInfo.username}</h2>
          <div className="modal__infobox">
            <AiOutlineUser />
            <span>{userInfo.name}</span>
          </div>
          <div className="modal__infobox">
            <AiOutlineMail />
            <span>{userInfo.email}</span>
          </div>
          <div className="modal__infobox">
            <AiOutlinePhone />
            <span>{userInfo.phone}</span>
          </div>
          <div className="modal__infobox">
            <AiOutlineGlobal />
            <span>{userInfo.website}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Modal;
