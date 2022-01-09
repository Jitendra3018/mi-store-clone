import styled from "styled-components";

function StarProduct({ starProduct }) {
	return (
		<Product>
			<Left>
				<a href={starProduct[0].url}>
					<img src={starProduct[0].image} alt="1st Product" />
				</a>
			</Left>
			<Right>
				<a href={starProduct[1].url}>
					<img src={starProduct[1].image} alt="1st Product" />
				</a>
				<a href={starProduct[2].url}>
					<img src={starProduct[2].image} alt="1st Product" />
				</a>
				<a href={starProduct[3].url}>
					<img src={starProduct[3].image} alt="1st Product" />
				</a>
			</Right>
		</Product>
	);
}

export default StarProduct;

const Product = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1vmax auto;

	img {
		transition: all 0.5s;
	}

	img:hover {
		box-shadow: 6px 6px 15px rgba(53, 53, 53, 0.763);
	}
`;

const Left = styled.div``;

const Right = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 46%;
`;
