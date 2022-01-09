import styled from "styled-components";
import HotItemCard from "./HotItemCard";

function HotAccessories({
	music,
	musicCover,
	smartDevice,
	smartDeviceCover,
	home,
	homeCover,
	lifeStyle,
	lifeStyleCover,
	mobileAccessories,
	mobileAccessoriesCover,
}) {
	return (
		<Accessories>
			<Cover>
				<img
					src={
						musicCover ||
						smartDeviceCover ||
						homeCover ||
						lifeStyleCover ||
						mobileAccessoriesCover
					}
					alt="Cover"
				/>
			</Cover>

			<Main>
				{music &&
					music.map((item, index) => (
						<HotItemCard
							key={item.image}
							name={item.name}
							price={item.price}
							image={item.image}
							index={index}
						/>
					))}
				{smartDevice &&
					smartDevice.map((item, index) => (
						<HotItemCard
							key={item.image}
							name={item.name}
							price={item.price}
							image={item.image}
							index={index}
						/>
					))}
				{home &&
					home.map((item, index) => (
						<HotItemCard
							key={item.image}
							name={item.name}
							price={item.price}
							image={item.image}
							index={index}
						/>
					))}
				{lifeStyle &&
					lifeStyle.map((item, index) => (
						<HotItemCard
							key={item.image}
							name={item.name}
							price={item.price}
							image={item.image}
							index={index}
						/>
					))}
				{mobileAccessories &&
					mobileAccessories.map((item, index) => (
						<HotItemCard
							key={item.image}
							name={item.name}
							price={item.price}
							image={item.image}
							index={index}
						/>
					))}
				<HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
			</Main>
		</Accessories>
	);
}

export default HotAccessories;

const Accessories = styled.div`
	display: flex;
	width: 90vw;
	margin: auto;
`;

const Cover = styled.div`
	img {
		transition: all 0.5s;
		width: 22vw;
		cursor: pointer;

		&:hover {
			box-shadow: 6px 6px 15px rgba(53, 53, 53, 0.363);
			transform: translateY(-0.4vmax);
		}
	}
`;

const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
