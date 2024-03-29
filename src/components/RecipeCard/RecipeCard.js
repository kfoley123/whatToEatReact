import React from "react";

export default function RecipeCard(props) {
    let ingredients = [];

    for (let i = 1; i < 20; i++) {
        if (props.recipe[`strIngredient${i}`] !== null) {
            let comboString = props.recipe[`strIngredient${i}`];

            if (props.recipe[`strMeasure${i}`] !== " ") {
                comboString += " - " + props.recipe[`strMeasure${i}`];
            }
            ingredients.push(comboString);
        }
    }

    if (Object.keys(props.recipe).length !== 0) {
        return (
            <div className="py-30 flex justify-center mb-10">
                <div className="max-w-xl rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src={props.recipe.strMealThumb}
                        alt={props.recipe.strMeal}
                    ></img>
                    <h1 className="font-bold text-xl px-5 pt-5">
                        {props.recipe.strMeal}
                    </h1>
                    <div className="p-6">
                        <h3 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5">
                            Category: {props.recipe.strCategory}
                        </h3>
                        <h2 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            Type: {props.recipe.strArea}
                        </h2>
                        <ul>
                            {ingredients.map((ingredient, i) => {
                                if (
                                    ingredient !== " - " &&
                                    ingredient !== " -  "
                                ) {
                                    return <li key={i}>{ingredient}</li>;
                                }
                                return <></>;
                            })}
                        </ul>
                        <p className="pt-5"> {props.recipe.strInstructions} </p>
                    </div>
                </div>
            </div>
        );
    } else return <></>;
}
