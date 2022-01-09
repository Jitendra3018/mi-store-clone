import styled from "styled-components";
import VideoCard from "./VideoCard";

function Videos({ videos }) {
	return (
		<Container>
			{videos.map((item, index) => (
				<VideoCard
					index={index}
					key={item.image}
					image={item.image}
					name={item.name}
				/>
			))}
		</Container>
	);
}

export default Videos;

const Container = styled.div`
	display: flex;
	width: 90vw;
	margin: auto;
`;
