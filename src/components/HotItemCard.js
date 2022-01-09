import styled from "styled-components";

function HotItemCard({ name, price, image, index }) {
	return (
		<Card>
			<img src={image} alt={`${index} Product`} />
			<p>{name}</p>
			<span>{price}</span>
		</Card>
	);
}

export default HotItemCard;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	width: 31%;
	transition: all 0.5s;
	cursor: pointer;
	margin: 0.7vmax;

	img {
		width: 70%;
	}

	p {
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
		color: rgb(83, 83, 83);
	}

	span {
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
		color: orangered;
		margin: -1vmax 0 1vmax 0;
	}

	&:hover {
		transform: translateY(-0.4vmax);
		box-shadow: 6px 6px 15px rgba(53, 53, 53, 0.363);
	}
`;
