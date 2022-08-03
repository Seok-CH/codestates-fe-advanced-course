/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const paginationStyle = css`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

const paginationBtnInactiveStyle = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 8px 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const paginationBtnActiveStyle = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 8px 0;
`;

const paginationBtnMoveStyle = css`
  cursor: pointer;
  &:hover {
    transform: scale(1.5, 1.5);
  }
`;

function Pagination({ page, setPage, totalPage }) {
  const tp = totalPage;

  const movePage = (num) => {
    setPage(num);
  };

  const moveBack = () => {
    page - 5 < 1 ? setPage(1) : setPage(page - 5);
  };

  const moveForward = () => {
    page + 5 > tp ? setPage(tp) : setPage(page + 5);
  };

  return (
    <div css={paginationStyle} className="pagination">
      <FaAngleLeft onClick={moveBack} css={paginationBtnMoveStyle} />
      {page - 3 <= 0
        ? [1, 2, 3, 4, 5].map((num, i) => (
            <PageBtn num={num} page={page} movePage={movePage} />
          ))
        : page + 3 > tp
        ? [tp - 4, tp - 3, tp - 2, tp - 1, tp].map((num, i) => (
            <PageBtn num={num} page={page} movePage={movePage} />
          ))
        : [page - 2, page - 1, page, page + 1, page + 2].map((num, i) => (
            <PageBtn num={num} page={page} movePage={movePage} />
          ))}
      <FaAngleRight onClick={moveForward} css={paginationBtnMoveStyle} />
    </div>
  );
}

function PageBtn({ num, page, movePage }) {
  return (
    <button
      className="pagination__btn"
      css={page === num ? paginationBtnActiveStyle : paginationBtnInactiveStyle}
      onClick={() => {
        movePage(num);
      }}
    >
      {num}
    </button>
  );
}

export default Pagination;
