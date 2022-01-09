import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

const searchIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 0 24 24"
		width="24px"
		fill="#000000"
	>
		<path d="M0 0h24v24H0V0z" fill="none" />
		<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
	</svg>
);

function Navbar() {
	return (
		<Nav>
			<Logo>
				<Link to="/">
					<LogoImage src={data.logo} alt="Logo" />
				</Link>
			</Logo>
			<NavItems>
				<Link className="navlinks" to="/#miphones">
					Mi Phones
				</Link>
				<Link className="navlinks" to="/#redmiphones">
					Redmi Phones
				</Link>
				<Link className="navlinks" to="/#tv">
					TV
				</Link>
				<Link className="navlinks" to="/#laptops">
					Laptops
				</Link>
				<Link className="navlinks" to="/#lifestyle">
					Fitness & Lifestyle
				</Link>
				<Link className="navlinks" to="/#home">
					Home
				</Link>
				<Link className="navlinks" to="/#audio">
					Radio
				</Link>
				<Link className="navlinks" to="/#accessories">
					Accessories
				</Link>
			</NavItems>
			<SearchBox>
				<input
					type="text"
					placeholder="Search Products"
					name="search"
				/>
				{searchIcon}
			</SearchBox>
		</Nav>
	);
}

export default Navbar;

const Nav = styled.div`
	display: flex;
	justify-content: center;
	padding: 1vmax;
	align-items: center;
	background-color: white;
	border-bottom: 1px solid rgba(43, 43, 43, 0.137);
	z-index: 100;
`;
const Logo = styled.div`
	background-color: orangered;
	width: 58px;
	border-radius: 20px;
	overflow: hidden;
	cursor: pointer;
	position: relative;
	right: 2vmax;
`;

const LogoImage = styled.img`
	transition: all 0.2s;
	transform: translateX(-55px);

	&:hover {
		transform: translateX(0);
	}
`;

const NavItems = styled.div`
	& > .navlinks {
		color: rgb(59, 59, 59);
		text-decoration: none;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 500;
		font-size: 1.1vmax;
		margin: 1vmax 1.2vmax;

		&:hover {
			text-decoration: none;
			color: orangered;
		}
	}
`;

const SearchBox = styled.div`
	position: relative;
	left: 5vmax;

	& > input {
		border: none;
		border-bottom: 1px solid rgba(128, 128, 128, 0.76);
		width: 15vmax;
		font-size: 1.1vmax;
		color: rgb(61, 61, 61);
		outline: none;
		font-weight: 100;
	}

	svg {
		fill: rgb(61, 61, 61);
	}
`;
