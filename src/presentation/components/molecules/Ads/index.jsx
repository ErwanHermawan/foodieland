// -- cores
import Image from "next/image";

// -- images
import image from "core/assets/img/dummy/ads.png";
import imageBg from "core/assets/img/dummy/bg-ads.png";

// -- style
import style from "./style.module.scss";

const Ads = () => {
	return (
		<div className={style.ads}>
			<Image className={style.bg} src={imageBg} alt="bg" />
			<div className={style.box}>
				<h4 className={style.title}>Don’t forget to eat healthy food</h4>
				<div className={style.image}>
					<Image
						className={style.imageEl}
						src={image}
						alt="Don’t forget to eat healthy food"
					/>
				</div>
				<p className={style.copyright}>www.foodieland.com</p>
			</div>
		</div>
	);
};

export default Ads;
