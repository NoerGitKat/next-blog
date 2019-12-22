import { useState } from 'react';
import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { APP_NAME } from './../config';

const Header = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<Navbar color="light" light expand="md">
				<Link href="/">
					<a>{APP_NAME}</a>
				</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/components/">Blog</NavLink>
						</NavItem>
						<NavItem>
							<Link href="/signin">
								<a>Sign In</a>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/signup">
								<a>Sign Up</a>
							</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	);
};

export default Header;
