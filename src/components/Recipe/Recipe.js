import React, { useEffect, useState } from "react";

export default function Recipe() {
    const [recipe, setRecipe] = useState({});
    let ingredients = [];

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((response) => response.json())
            .then((response) => {
                setRecipe(response.meals[0]);
            });
    }, []);

    for (let i = 1; i < 20; i++) {
        let comboString =
            recipe[`strIngredient${i}`] + " - " + recipe[`strMeasure${i}`];
        ingredients.push(comboString);
    }

    return (
        <div className="py-30 flex justify-center ">
            <div className="max-w-xl rounded overflow-hidden shadow-lg">
                <img className="w-full" src={recipe.strMealThumb}></img>
                <h1 className="font-bold text-xl mb-2 pb-1">
                    {recipe.strMeal}
                </h1>
                <h3 className="font-bold">Category: {recipe.strCategory} </h3>
                <h2 className="font-bold pb-3">Type: {recipe.strArea}</h2>
                <ul>
                    {ingredients.map((ingredient) => {
                        if (ingredient !== " - " && ingredient !== " -  ") {
                            return <li>{ingredient}</li>;
                        }
                    })}
                </ul>
                <p className="pt-5"> {recipe.strInstructions} </p>
            </div>
        </div>
    );
}
