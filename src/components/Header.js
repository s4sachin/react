const title = (
	<a
		href=''
		className='logo'>
		<h1>Food Villa</h1>
		<img
			className='logo'
			src='https://www.healthifyme.com/blog/wp-content/uploads/2022/01/Junk-Food-More-Harm-and-Lesser-Well-being.jpeg'
			alt=''
		/>
	</a>
);

const HeaderComponent = () => {
	return (
		<>
			<div className='header'>
				{title}
				<div className='nav-items'>
					<ul className='ul-list'>
						<li className='li'>About</li>
						<li className='li'>Cart</li>
						<li className='li'>Home</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default HeaderComponent;
