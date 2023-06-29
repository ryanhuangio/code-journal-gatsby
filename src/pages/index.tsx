import React from "react";
import { graphql } from "gatsby";
import Posts from "../templates/posts";

const HomePage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map((edge) => edge.node);
  return <Posts posts={posts} />;
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            date
          }
          html
        }
      }
    }
  }
`;

export default HomePage;
