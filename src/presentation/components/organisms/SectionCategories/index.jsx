// -- cores
import Image from "next/image";
import Link from "next/link";

// -- atoms
import Button from "@atoms/Button";

// -- molecules
import CategoryItem from "@molecules/CategoryItem";

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
						<span>{dataCategories.button.text}</span>
						<i className="fi-arrow-right"></i>
					</Button>
				</div>
				<div className={style.body}>
					{dataCategories.item.map((val, idx) => (
						<div key={`ct-${idx}`} className={style.item}>
							<CategoryItem {...val} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionCategories;
