// -- cores
import Image from "next/image";
import Link from "next/link";

// -- style
import style from "./style.module.scss";

const CategoryItem = (props) => {
	const { to, image, color, text } = props;

	return (
		<div className={style.item}>
			<Link className={style.link} href={to}>
				{text}
			</Link>
			<div className={style.image}>
				<Image className={style.imageEl} src={image} alt={text} />
			</div>
			<div
				className={style.box}
				style={{
					background: `linear-gradient(to bottom, ${color}00, ${color}1A)`,
				}}
			>
				<p className={style.text}>{text}</p>
			</div>
		</div>
	);
};

export default CategoryItem;
