/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import Modal from "./Modal";

const postStyle = css`
  width: 600px;
  min-height: 120px;
  padding: 20px 15px;
  line-height: 24px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const postHeadlineStyle = css`
  font-size: 20px;
  margin: 10px 0 5px 0;
`;

const postPreviewStyle = css`
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Post({ postInfo, about = false }) {
  return (
    <div css={postStyle} className="post">
      {!about && <Modal userId={postInfo.userId} />}
      <Link to={`/${postInfo.id}`}>
        <h3 className="post__headline" css={postHeadlineStyle}>
          {postInfo.title}
        </h3>
        <p className="post__preview" css={postPreviewStyle} Style>
          {postInfo.body}
        </p>
      </Link>
    </div>
  );
}

export default Post;
