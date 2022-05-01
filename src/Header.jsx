import React from 'react';
import Button from './Button';

function Header() {
	return (
		<>
			<div className="bg-yellow-500 h-12 flex justify-between items-center px-4">
				<img className="h-11 w-11" src="https://www.logodesign.net/images/nature-logo.png" />
				<div className="flex space-x-2">
					<Button>Home</Button>
					<Button>About</Button>
					<Button>Contact</Button>
				</div>
			</div>
		</>
	);
}

export default Header;
