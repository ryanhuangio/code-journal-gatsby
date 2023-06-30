import React from "react";
import { graphql } from "gatsby";
import BaseTemplate from "./base";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  const renderContent = () => {
    const htmlContent = post.html;
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
		<BaseTemplate pageTitle={post.frontmatter.title}>
			<div>
				<h1 className='text-xl font-bold'>{post.frontmatter.title}</h1>
				<span className='content'>
					{renderContent()}
					<p className='text-xs opacity-50 hover:opacity-100 transition-all mt-8 mb-5'>
						Published on {post.frontmatter.date.substr(5, 2)}-
						{post.frontmatter.date.substr(8, 2)}-
						{post.frontmatter.date.substr(0, 4)}
					</p>
				</span>
			</div>
		</BaseTemplate>
	)
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
