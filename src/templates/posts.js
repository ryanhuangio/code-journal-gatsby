import React, { useState } from 'react'
import { Link } from 'gatsby'
import BaseTemplate from '../templates/base'
import { sortBy } from 'lodash'

const Posts = ({ posts }) => {
	const postsPerPage = 8
	const [searchTerm, setSearchTerm] = useState('')
	const [visiblePosts, setVisiblePosts] = useState(postsPerPage)

	const sortedPosts = sortBy(posts, (post) => post.frontmatter.date).reverse()

	const truncate = (text, maxLength) => {
		const strippedText = text.replace(/<[^>]+>/g, '')
		if (strippedText.length <= maxLength) {
			return strippedText
		}
		const truncatedText = strippedText.slice(0, maxLength)
		const lastSpaceIndex = truncatedText.lastIndexOf(' ')
		const truncatedWord = truncatedText.slice(0, lastSpaceIndex)
		return truncatedWord + '...'
	}

	const handleSearch = (event) => {
		setSearchTerm(event.target.value)
	}

	const handleSeeMore = () => {
		setVisiblePosts(visiblePosts + postsPerPage)
	}

	const filteredPosts = sortedPosts.filter((post) => {
		const { title, html } = post.frontmatter
		const postContent = title + html
		const untruncatedContent = post.html.replace(/<[^>]+>/g, '') // Remove HTML tags from the content
		return (
			postContent.toLowerCase().includes(searchTerm.toLowerCase()) ||
			untruncatedContent.toLowerCase().includes(searchTerm.toLowerCase())
		)
	})

	const visibleFilteredPosts = filteredPosts.slice(0, visiblePosts)

	return (
		<BaseTemplate>
			<div>
				<input
					type='text'
					value={searchTerm}
					onChange={handleSearch}
					placeholder='Search...'
					className='relative m-0 block w-full min-w-0 flex-auto rounded px-4 py-3  border border-neutral-300 focus:border-blue-400 text-gray-900 focus:ring-2 focus:ring-blue-400 mb-6 dark:bg-slate-800 dark:border-slate-700 dark:focus:border-teal-600 dark:focus:ring-teal-600 dark:text-slate-300'
				/>

				{visibleFilteredPosts.map((post) => (
					<div key={post.frontmatter.slug} className='mb-6'>
						<h2 className='text-xl font-bold'>
							<Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
						</h2>
						<p
							dangerouslySetInnerHTML={{ __html: truncate(post.html, 150) }}
							className='text-base dark:text-neutral-400 text-neutral-700'
						/>
					</div>
				))}

				{filteredPosts.length > visiblePosts && (
					<button
						onClick={handleSeeMore}
						className='block w-full p-3 text-center text-gray-500 hover:text-black dark:text-teal-500 opacity-60 hover:opacity-100 transition-all border rounded dark:border-teal-700 dark:hover:border-teal-500 border-gray-500 hover:border-gray-700'>
						See More
					</button>
				)}
			</div>
		</BaseTemplate>
	)
}

export default Posts
