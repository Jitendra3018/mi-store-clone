import styled from "styled-components";

function Heading({ text }) {
	return (
		<Header>
			<div></div>
			<p>{text}</p>
			<div></div>
		</Header>
	);
}

export default Heading;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	& > div {
		background-color: rgba(39, 39, 39, 0.274);
		height: 1px;
		width: 30vw;
	}

	& > p {
		margin: 3vmax;
		color: rgb(77, 77, 77);
		font-size: 2.5vmax;
		font-family: Calibri, "Trebuchet MS", sans-serif;
		font-weight: 100;
	}
`;
