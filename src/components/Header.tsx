const Header = () => {
	return (
		<>
			<header className="header flex justify-between items-center">
				<div className="logo flex items-center gap-2">
					<img src="#" alt="Logo image" />
					<span>Logo</span>
				</div>
				<nav className="nav flex gap-4">
					<ul className="flex gap-4">
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
			</header>
		</>
	);
};

export default Header;
