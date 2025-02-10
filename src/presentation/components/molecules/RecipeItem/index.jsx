// -- cores
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// -- style
import style from "./style.module.scss";

const RecipeItem = (props) => {
	const { to, title, image, info, favorite, onFavoriteToggle, featured } =
		props;

	console.log("featured", featured);

	const [isFavorite, setIsFavorite] = useState(favorite);

	const handleFavoriteClick = () => {
		const newFavoriteState = !isFavorite;
		setIsFavorite(newFavoriteState);

		if (onFavoriteToggle) {
			onFavoriteToggle(newFavoriteState);
		}
	};

	return (
		<div
			className={`${style.item} ${
				featured !== undefined && featured === true ? style.itemFeatured : ""
			}`}
		>
			<Link className={style.link} href={to}>
				{title}
			</Link>
			<div className={style.box}>
				<div className={style.image}>
					<Image src={image} alt={title} className={style.imageEl} />
					<div className={style.badge}>
						<button
							className={
								isFavorite
									? `${style.badgeBtn} ${style.badgeBtnFavorite}`
									: style.badgeBtn
							}
							type="button"
							onClick={handleFavoriteClick}
						>
							<i className="fi-heart"></i>
						</button>
					</div>
				</div>
				<div className={style.text}>
					<h3 className={style.title}>{title}</h3>
					<div className={style.info}>
						{info.map((val, idx) => (
							<div key={`fr-info-${idx}`} className={style.infoItem}>
								<i className={`fi ${val.icon} ${style.infoIcon}`}></i>
								<span className={style.infoText}>{val.text}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeItem;
