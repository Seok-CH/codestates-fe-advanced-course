/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";
import { FaRegComment } from "react-icons/fa";

import Comment from "../components/Comment";
import Loading from "../components/Loading";
import Modal from "../components/Modal";

import { getPostContent, getPostComments } from "../apis";

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  width: 720px;
  padding: 60px;
  font-family: "TimesNewRoman";
`;

const contentHeadlineStyle = css`
  font-size: 32px;
  line-height: 40px;
  margin: 20px 0;
`;

const contentParagraphStyle = css`
  font-size: 20px;
  line-height: 32px;
  margin: 50px 0;
`;

const commentsInfoStyle = css`
  display: flex;
  gap: 10px;
  font-size: 20px;
  margin: 20px 0;
`;

const commentsListStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function Content() {
  const { postId } = useParams();
  const [content, setContent] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPostContent(postId)
      .then((res) => setContent(res.data))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));

    getPostComments(postId)
      .then((res) => setComments(res.data))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, [postId]);

  if (isLoading) return <Loading />;

  return (
    <main className="wrapper" css={wrapperStyle}>
      <section className="content">
        <h2 className="content__headline" css={contentHeadlineStyle}>
          {content.title}
        </h2>
        <Modal userId={content.userId} />
        <p className="content__paragraph" css={contentParagraphStyle}>
          {content.body}
        </p>
      </section>
      <section className="comments">
        <div className="comments__info" css={commentsInfoStyle}>
          <FaRegComment />
          <span>{comments.length}</span>
        </div>
        <div className="comments__list" css={commentsListStyle}>
          {comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Content;
