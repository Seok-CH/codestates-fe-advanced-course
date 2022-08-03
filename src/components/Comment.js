/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const commentWrapperStyle = css`
  width: 600px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
`;

const commentWritterStyle = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

const commentWritterNameStyle = css`
  font-size: 14px;
`;

const commentWritterEmailStyle = css`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;

const commentContentStyle = css`
  min-height: 50px;
  padding: 15px;
  line-height: 20px;
`;
function Comment({ comment }) {
  return (
    <div className="comment" css={commentWrapperStyle}>
      <div className="comment__writter" css={commentWritterStyle}>
        <span css={commentWritterNameStyle}>{comment.name}</span>
        <span css={commentWritterEmailStyle}>{comment.email}</span>
      </div>
      <div className="comment__content" css={commentContentStyle}>
        {comment.body}
      </div>
    </div>
  );
}

export default Comment;
