// -- cores
import Image from "next/image";

// -- data
import learnData from "./learnData";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const SectionLearn = (props) => {
	return (
		<div className={style.section}>
			<div className="container">
				<div className={style.wrapper}>
					<div className={style.text}>
						<h2 className={style.title}>{learnData.title}</h2>
						<p className={style.description}>{learnData.description}</p>
						<Button to={learnData.button.link} variant="black">
							{learnData.button.text}
						</Button>
					</div>
					<div className={style.image}>
						<Image className={style.imageEl} src={learnData.image} alt="chef" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionLearn;
