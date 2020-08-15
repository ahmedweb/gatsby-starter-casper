import React from "react";
import PaginationLink from "../PaginationLink/PaginationLink";
import "./Pagination.css";

class Pagination extends React.Component {
  render() {
    const { page, pages, prev, next } = this.props;
    return (
      <nav className="pagination">
        <PaginationLink
          className="newer-posts"
          url={prev}
          text="← Articles plus récents"
        />
        <span className="page-number">{`Page ${page} sur ${pages}`}</span>
        <PaginationLink
          className="older-posts"
          url={next}
          text="Articles plus anciens →"
        />
      </nav>
    );
  }
}

export default Pagination;
