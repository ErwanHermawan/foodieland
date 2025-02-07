// -- cores
import Image from "next/image";

// -- atoms
import Button from "@atoms/Button";

// -- style
import style from "./style.module.scss";

// -- data
import dataPost from "./postData";

const SectionInstagram = (props) => {
	return (
		<section className={style.section}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{dataPost.title}</h2>
					<p className={style.description}>{dataPost.description}</p>
				</div>
				<div className={style.body}>
					{dataPost.item.map((val, idx) => (
						<div key={`ct-${idx}`} className={style.item}>
							<Image
								className={style.image}
								src={val.image}
								alt="instagram post"
							/>
						</div>
					))}
				</div>
				<div className={style.button}>
					<Button to={dataPost.button.link} variant="black">
						<span>{dataPost.button.text}</span>
						<i className="fi-instagram"></i>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default SectionInstagram;
