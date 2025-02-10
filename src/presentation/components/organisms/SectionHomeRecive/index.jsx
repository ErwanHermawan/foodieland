// -- data
import recipeData from "./recipeData";

// -- style
import style from "./style.module.scss";

// -- molecules
import RecipeItem from "@molecules/RecipeItem";

const SectionHomeRecipe = (props) => {
	return (
		<div className={style.section}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{recipeData.title}</h2>
					<p className={style.description}>{recipeData.description}</p>
				</div>
				<div className={style.body}>
					{recipeData.item.map((val, idx) => {
						return (
							<div key={`fr-${idx}`} className={style.wrapper}>
								<RecipeItem {...val} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SectionHomeRecipe;
