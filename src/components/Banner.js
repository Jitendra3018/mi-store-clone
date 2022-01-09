import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Banner({ banner }) {
	return (
		<Carousel fade>
			{banner.map((item, index) => (
				<Carousel.Item key={item.image} interval={1000} keyboard={true}>
					<img
						src={item.image}
						alt={`${index} banner`}
						className="d-block w-100"
					/>
					<Carousel.Caption>
						<h3>{item.name}</h3>
						<p>{item.description}</p>
						<p>{item.source}</p>
						<u>Read More</u>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}

export default Banner;
