/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { css } from "@emotion/react";

import Post from "../components/Post";

import { getUserInfo, getUserPosts } from "../apis";

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
  width: 720px;
  padding: 60px;
`;

const tabBoxStyle = css`
  display: flex;
  gap: 30px;
  height: 30px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.25);
`;

const tabStyle = css`
  font-size: 16px;
  color: gray;
  cursor: pointer;
`;

const tabActiveStyle = css`
  ${tabStyle};
  color: black;
  border-bottom: 1px solid black;
`;

const usernameStyle = css`
  font-size: 48px;
  margin-bottom: 30px;
`;
const tableStyle = css`
  font-size: 14px;
  min-height: 150px;

  tr {
    height: 50px;
  }
`;
const tableCategory = css`
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
`;

function About() {
  const { userId } = useParams();
  const username = useLocation().state.data;
  const [tab, setTab] = useState("posts");

  const toggleTab = (name) => {
    setTab(name);
  };

  return (
    <main className="wrapper" css={wrapperStyle}>
      <h2 className="username" css={usernameStyle}>
        {username}
      </h2>
      <div className="tabbox" css={tabBoxStyle}>
        <span
          className="tab"
          css={tab === "posts" ? tabActiveStyle : tabStyle}
          onClick={() => {
            toggleTab("posts");
          }}
        >
          Posts
        </span>
        <span
          className="tab"
          css={tab === "about" ? tabActiveStyle : tabStyle}
          onClick={() => {
            toggleTab("about");
          }}
        >
          About
        </span>
      </div>
      {tab === "posts" ? (
        <UserPostsTab userId={userId} />
      ) : (
        <UserInfoTab userId={userId} />
      )}
    </main>
  );
}

function UserInfoTab({ userId }) {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserInfo(userId)
      .then((res) => setUserInfo(res.data))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, [userId]);

  if (isLoading) return <div></div>;

  return (
    <table css={tableStyle}>
      <tbody>
        <tr>
          <td css={tableCategory}>name</td>
          <td>{userInfo.name}</td>
          <td css={tableCategory}>phone</td>
          <td>{userInfo.phone}</td>
        </tr>
        <tr>
          <td css={tableCategory}>company</td>
          <td>{userInfo.company?.name}</td>
          <td css={tableCategory}>email</td>
          <td>{userInfo.email}</td>
        </tr>
        <tr>
          <td css={tableCategory}>website</td>
          <td>{userInfo.website}</td>
        </tr>
      </tbody>
    </table>
  );
}

function UserPostsTab({ userId }) {
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserPosts(userId)
      .then((res) => setUserPosts(res.data))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, [userId]);

  if (isLoading) return <div></div>;

  return (
    <div>
      {userPosts.map((postInfo) => (
        <Post key={postInfo.id} postInfo={postInfo} about={true} />
      ))}
    </div>
  );
}

export default About;
