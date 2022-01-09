import styled from "styled-components";

const playButton = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 0 24 24"
		width="24px"
		fill="#000000"
	>
		<path d="M0 0h24v24H0z" fill="none" />
		<path d="M8 5v14l11-7z" />
	</svg>
);

function VideoCard({ image, name, index }) {
	return (
		<Card style={{ backgroundImage: `url(${image})` }}>
			<a href="#/">{playButton}</a>
			<p>{name}</p>
		</Card>
	);
}

export default VideoCard;

const Card = styled.div`
	width: 30vmax;
	height: 48vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin: 0.5vmax;
	cursor: pointer;

	a {
		padding: 2.5vmax;
		transition: all 0.5s;
		border: none;
		border-radius: 100%;
		background-color: rgba(255, 255, 255, 0.096);

		svg {
			fill: rgba(255, 255, 255);
		}
	}

	&:hover {
		a {
			padding: 2.5vmax;
			background-color: rgba(255, 255, 255, 0.671);
		}
	}

	p {
		color: white;
		margin: 1vmax;
	}
`;
