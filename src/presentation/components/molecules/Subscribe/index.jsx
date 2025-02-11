// -- style
import style from "./style.module.scss";

const Subscribe = (props) => {
	const { title, description } = props;
	return (
		<div className={style.subscribe}>
			<div className={style.wrapper}>
				<h2 className={style.title}>{title}</h2>
				<p className={style.description}>{description}</p>
				<div className={style.form}>
					<input
						type="email"
						placeholder="Enter your email"
						className={style.input}
					/>
					<button className={style.button}>Subscribe</button>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
