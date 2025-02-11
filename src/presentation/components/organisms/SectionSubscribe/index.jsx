// -- components
import Subscribe from "@molecules/Subscribe";

// -- data
import subscribeData from "./subscribeData";

// -- style
import style from "./style.module.scss";

const SectionSubscribe = (props) => {
	return (
		<div className={style.section}>
			<div className="container">
				<Subscribe {...subscribeData} />
			</div>
		</div>
	);
};

export default SectionSubscribe;
