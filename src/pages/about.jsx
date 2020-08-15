import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import Layout from "../components/layout";
import PostListing from "../components/PostListing/PostListing";
import PaginatedContent from "../components/PaginatedContent/PaginatedContent";

class AboutPage extends Component {
  render() {
    const {
      pageContext: { nodes, page, pages, total, limit, prev, next },
      data: { authors }
    } = this.props;
    return (
      <div className="about-container">
        <About />
        <PaginatedContent
                page={page}
                pages={pages}
                total={total}
                limit={limit}
                prev={prev}
                next={next}
              >
                {/* PostListing component renders all the posts */}
                <PostListing postEdges={nodes} postAuthors={authors.edges} />
              </PaginatedContent>
      </div>
    );
  }
}

export default AboutPage;

/* eslint no-undef: "off" */
export const aboutPageQuery = graphql`
  query AboutQuery {
    # posts data comes from the context
    # authors
    authors: allAuthorsJson {
      edges {
        node {
          uid
          name
          image
          url
          bio
        }
      }
    }
  }
`;
