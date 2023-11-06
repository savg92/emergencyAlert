import { useState } from 'react';

const Header = () => {
	const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

	const toggleMobileNav = () => {
		setIsMobileNavVisible(!isMobileNavVisible);
	};

	return (
		<>
			<header className="flex justify-between items-center p-5 bg-blue-500">
				<div className="flex items-center gap-2">
					<img src="#" alt="Logo image" className="w-10 h-10" />
					<span className="text-white">Logo</span>
				</div>
				<nav className="hidden md:flex gap-4">
					<ul className="flex gap-4">
						<li>
							<a href="#" className="text-white">Home</a>
						</li>
						<li>
							<a href="#" className="text-white">About</a>
						</li>
						<li>
							<a href="#" className="text-white">Contact</a>
						</li>
					</ul>
				</nav>
				<button onClick={toggleMobileNav} className="md:hidden p-2 rounded">
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
				{isMobileNavVisible && (
					<nav className="md:hidden">
						<ul className="flex flex-col gap-2 p-5 bg-blue-500 text-white">
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</nav>
				)}
			</header>
		</>
	);
};

export default Header;