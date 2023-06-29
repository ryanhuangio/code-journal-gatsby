import React, { useState } from "react";
import { Link } from "gatsby";
import BaseTemplate from "../templates/base";
import { sortBy } from "lodash";

const Posts = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedPosts = sortBy(
    posts,
    (post) => new Date(post.frontmatter.date)
  ).reverse();

  const truncate = (text, maxLength) => {
    const strippedText = text.replace(/<[^>]+>/g, "");
    if (strippedText.length <= maxLength) {
      return strippedText;
    }
    const truncatedText = strippedText.slice(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");
    const truncatedWord = truncatedText.slice(0, lastSpaceIndex);
    return truncatedWord + "...";
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = sortedPosts.filter((post) => {
    const { title, html } = post.frontmatter;
    const postContent = title + html;
    const untruncatedContent = post.html.replace(/<[^>]+>/g, ""); // Remove HTML tags from the content
    return (
      postContent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      untruncatedContent.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <BaseTemplate>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          class="relative m-0 block w-full min-w-0 flex-auto rounded px-4 py-3  border-neutral-300 focus:border-blue-400 text-gray-900 focus:ring-2 focus:ring-blue-400 mb-6 dark:bg-slate-800 dark:border-slate-700 dark:focus:border-teal-600 dark:focus:ring-teal-600 dark:text-slate-300"
        />

        {filteredPosts.map((post) => (
          <div key={post.frontmatter.slug} className="mb-6">
            <h2 className="text-xl font-bold">
              <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
            </h2>
            <p
              dangerouslySetInnerHTML={{ __html: truncate(post.html, 150) }}
              className="text-base"
            />
          </div>
        ))}
      </div>
    </BaseTemplate>
  );
};

export default Posts;
