import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import "../styles/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const BaseTemplate = ({ children, pageTitle }) => {
  const defaultTitle = "Code Journal";

  useEffect(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [])

	const toggleTheme = () => {
		const isDarkMode = document.documentElement.classList.contains('dark')
		localStorage.theme = isDarkMode ? 'light' : 'dark'
		document.documentElement.classList.toggle('dark')
	}

	return (
		<div className='max-w-screen max-h-full dark:bg-slate-900 dark:text-gray-300 p-6'>
			<Helmet>
				<title>{pageTitle ? pageTitle : defaultTitle}</title>
			</Helmet>
			<div className='mx-auto align-middle text-left max-w-3xl mb-6'>
				<button
					onClick={toggleTheme}
					className='absolute right-5 top-3 night-mode-toggle rounded-full border w-12 h-12 opacity-60 hover:opacity-100 transition-all dark:border-teal-700 dark:hover:border-teal-500 border-gray-500 hover:border-gray-700'>
					<FontAwesomeIcon
						icon={faMoon}
						className='text-gray-500 hover:text-black dark:text-teal-500 w-4 h-4'
					/>
				</button>
				<header>
					<Link to='/' className='inline-block'>
						<h1 className='text-3xl font-bold mb-6'>Code Journal</h1>
					</Link>
				</header>

				<main>{children}</main>

				<footer></footer>
			</div>
		</div>
	)
};

export default BaseTemplate;
