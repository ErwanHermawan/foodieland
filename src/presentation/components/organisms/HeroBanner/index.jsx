// -- cores
import { useState } from "react";

// -- style
import style from "./style.module.scss";

// -- data
import bannerData from "./bannerData";

// -- molecules
import HeroBannerItem from "@molecules/HeroBannerItem";

const HeroBanner = (props) => {
	return (
		<section className={style.banner}>
			<div className="container">
				<HeroBannerItem data={bannerData} />
			</div>
		</section>
	);
};

export default HeroBanner;
