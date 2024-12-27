// -- cores
import Image from "next/image";
import Link from "next/link";

// -- style
import style from "./style.module.scss";

const RecipeItem = (props) => {
	const { to, title, image, info, favorite } = props;
	return (
		<div className={style.item}>
			<Link className={style.link} href={to}>
				{title}
			</Link>
			<div className={style.badge}>
				<button
					className={
						favorite
							? `${style.badgeBtn} ${style.badgeBtnFavorite}`
							: style.badgeBtn
					}
					type="button"
				>
					<i className="fi-heart"></i>
				</button>
			</div>
			<div className={style.box}>
				<div className={style.image}>
					<Image src={image} alt={title} className={style.imageEl} />
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
