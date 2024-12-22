"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "core/states/header";

// -- organisms
import HeroBanner from "@organisms/HeroBanner";

const Home = (props) => {
	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("home");
	}, [setMenu]);

	return (
		<>
			<HeroBanner />
		</>
	);
};

export default Home;
