import styled from "styled-components";
import Offer from "./Offer";

function Offers({ offer }) {
	return (
		<OfferSection>
			{offer.map((item, index) => (
				<Offer
					key={item.image}
					index={index}
					src={item.image}
					link={item.url}
				/>
			))}
		</OfferSection>
	);
}

export default Offers;

const OfferSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1vmax;

	img {
		margin: 0 1vmax;
		transition: all 0.5s;

		&:hover {
			box-shadow: 8px 8px 15px rgba(53, 53, 53, 0.763);
		}
	}
`;
