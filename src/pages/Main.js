/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import Post from "../components/Post";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

import { getPostList } from "../apis";

const mainStyle = css`
  margin: 0 auto;
  width: 720px;
  padding: 60px;
`;

const mainHeadlineStyle = css`
  display: flex;
  gap: 10px;
  margin-bottom: 50px;

  h2 {
    font-size: 32px;
  }
`;

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPostList()
      .then((res) => setPostList(res.data))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (isLoading) return <Loading />;

  return (
    <main className="main" css={mainStyle}>
      <div className="main__headline" css={mainHeadlineStyle}>
        <FaQuoteLeft />
        <h2>POSTS</h2>
        <FaQuoteRight />
      </div>
      <section className="main__postlist">
        {postList.slice(10 * (page - 1), 10 * page).map((postInfo) => (
          <Post key={postInfo.id} postInfo={postInfo} />
        ))}
      </section>
      <Pagination
        page={page}
        setPage={setPage}
        totalPage={postList.length / 10}
      />
    </main>
  );
}

export default Main;
