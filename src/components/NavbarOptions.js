import { useEffect, useState } from "react";
import styled from "styled-components";
import NavCard from "./NavCard";

function NavbarOptions({
	miPhones,
	redmiPhones,
	tv,
	laptop,
	fitnessAndLifeStyle,
	home,
	accessories,
	audio,
}) {
	const [miPhoneToggle, setMiPhoneToggle] = useState(false);
	const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
	const [tvToggle, setTvToggle] = useState(false);
	const [laptopToggle, setLaptopToggle] = useState(false);
	const [fitnessToggle, setFitnessToggle] = useState(false);
	const [homeToggle, setHomeToggle] = useState(false);
	const [audioToggle, setAudioToggle] = useState(false);
	const [accessoriesToggle, setAccessoriesToggle] = useState(false);

	useEffect(() => {
		if (window.location.pathname === "/miphones") {
			return setMiPhoneToggle(true);
		}
		if (window.location.pathname === "/redmiphones") {
			return setRedmiPhoneToggle(true);
		}
		if (window.location.pathname === "/tv") {
			return setTvToggle(true);
		}
		if (window.location.pathname === "/laptops") {
			return setLaptopToggle(true);
		}
		if (window.location.pathname === "/lifestyle") {
			return setFitnessToggle(true);
		}
		if (window.location.pathname === "/home") {
			return setHomeToggle(true);
		}
		if (window.location.pathname === "/audio") {
			return setAudioToggle(true);
		}

		if (window.location.pathname === "/accessories") {
			return setAccessoriesToggle(true);
		}
	}, []);

	return (
		<Options>
			{miPhoneToggle
				? miPhones.map((item, index) => (
						<NavCard
							index={index}
							name={item.name}
							price={item.price}
							image={item.image}
							key={item.image}
						/>
				  ))
				: null}
			{redmiPhoneToggle
				? redmiPhones.map((item, index) => (
						<NavCard
							index={index}
							name={item.name}
							price={item.price}
							image={item.image}
							key={item.image}
						/>
				  ))
				: null}

			{tvToggle
				? tv.map((item, index) => (
						<NavCard
							index={index}
							name={item.name}
							price={item.price}
							image={item.image}
							key={item.image}
						/>
				  ))
				: null}

			{laptopToggle
				? laptop.map((item, index) => (
						<NavCard
							index={index}
							name={item.name}
							price={item.price}
							image={item.image}
							key={item.image}
						/>
				  ))
				: null}

			{fitnessToggle
				? fitnessAndLifeStyle.map((item, index) => (
						<NavCard
							index={index}
							vCard
							name={item.name}
							price={item.price}
							image={item.image}
							key={item.image}
						/>
				  ))
				: null}

			{homeToggle
				? home.map((item, index) => (
						<NavCard
							index={index}
							name={item.name}
							price={item.price}
							image={item.image}
							key={item.image}
						/>
				  ))
				: null}

			{audioToggle
				? audio.map((item, index) => (
						<NavCard
							index={index}
							name={item.name}
							price={item.price}
							image={item.image}
							key={item.image}
						/>
				  ))
				: null}

			{accessoriesToggle
				? accessories.map((item, index) => (
						<NavCard
							index={index}
							name={item.name}
							price={item.price}
							image={item.image}
							key={item.image}
						/>
				  ))
				: null}
		</Options>
	);
}

export default NavbarOptions;

const Options = styled.div`
	display: flex;
	background: #fff;
	justify-content: space-evenly;
	padding: 2vmax;
	z-index: 100;
`;
