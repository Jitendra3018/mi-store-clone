import { Link } from "react-router-dom";
import styled from "styled-components";

function HotAccessoriesMenu() {
	return (
		<Menu>
			<Link className="HotAccessoriesLink" to="/music">
				Music Store
			</Link>
			<Link className="HotAccessoriesLink" to="/smartDevice">
				Smart Devices
			</Link>
			<Link className="HotAccessoriesLink" to="/home">
				Home
			</Link>
			<Link className="HotAccessoriesLink" to="/lifestyle">
				Lifestyle
			</Link>
			<Link className="HotAccessoriesLink" to="/mobileAccessories">
				Mobile Accessories
			</Link>
		</Menu>
	);
}

export default HotAccessoriesMenu;

const Menu = styled.div`
	display: flex;
	justify-content: center;

	.HotAccessoriesLink {
		text-decoration: none;
		color: rgb(94, 94, 94);
		margin: 1vmax;
		padding: 0.5vmax 0;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

		&:hover {
			color: orangered;
			border-bottom: 1px solid orangered;
		}
	}
`;
