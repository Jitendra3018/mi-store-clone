import styled from "styled-components";

function ProductReviewCard({ price, name, image, review, index }) {
	return (
		<ReviewCard>
			<img src={image} alt={`${index} review`} />
			<h5>{review}</h5>
			<span>{name}</span>
			<b>{price}</b>
		</ReviewCard>
	);
}

export default ProductReviewCard;

const ReviewCard = styled.div`
	margin: 0.5vmax;
	background-color: white;
	padding-bottom: 2vmax;
	cursor: pointer;
	transition: all 0.5s;

	&:hover {
		transform: translateY(-0.4vmax);
		box-shadow: 6px 6px 15px rgba(53, 53, 53, 0.363);
	}

	h5 {
		margin: 2vmax 0 0.5vmax 2vmax;
		color: rgb(94, 94, 94);
	}

	span {
		color: rgb(94, 94, 94);
		font-size: 1vmax;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		margin: 0 2vmax;
	}

	b {
		color: orangered;
		font-size: 1vmax;
	}
`;
