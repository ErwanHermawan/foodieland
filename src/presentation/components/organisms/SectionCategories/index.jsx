// -- cores
import Image from "next/image";
import Link from "next/link";

// -- atoms
import Button from "@atoms/Button";

// -- style
import style from "./style.module.scss";

// -- data
import dataCategories from "./dataCategory";

const SectionCategories = (props) => {
	return (
		<div className={style.categories}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{dataCategories.title}</h2>
					<Button to={dataCategories.button.link} variant="primary">
						{dataCategories.button.text}
					</Button>
				</div>
				<div className={style.body}>
					{dataCategories.item.map((val, idx) => (
						<div key={`ct-${idx}`} className={style.item}>
							<Link className={style.link} href={val.to}>
								{val.text}
							</Link>
							<div className={style.image}>
								<Image
									className={style.imageEl}
									src={val.image}
									alt={val.text}
								/>
							</div>
							<div
								className={style.box}
								style={{
									background: `linear-gradient(to bottom, ${val.color}00, ${val.color}1A)`,
								}}
							>
								<p className={style.text}>{val.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionCategories;
