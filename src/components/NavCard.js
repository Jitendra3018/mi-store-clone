import styled from "styled-components";

function NavCard({ name, price, image, index }) {
	return (
		<Card>
			<img src={image} alt={`${index} phone`} />
			<p>{name}</p>
			<span>{price}</span>
		</Card>
	);
}

export default NavCard;

const Card = styled.div`
	width: 10vmax;
	text-align: center;
	cursor: pointer;

	img {
		width: 10vmax;
	}

	p {
		margin: 0;
	}

	span {
		color: orangered;
	}
`;
