import styled from "styled-components";
import ProductReviewCard from "./ProductReviewCard";

function ProductReviews({ productReviews }) {
	return (
		<Reviews>
			{productReviews.map((item, index) => (
				<ProductReviewCard
					price={item.price}
					name={item.name}
					image={item.image}
					review={item.review}
					index={index}
					key={item.image}
				/>
			))}
		</Reviews>
	);
}

export default ProductReviews;

const Reviews = styled.div`
	display: flex;
	width: 90vw;
	margin: auto;
	justify-content: center;
`;
