import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe.js";

export default function Main() {
    const [recipe, setRecipe] = useState({});
    const [buttonPress, setButtonPress] = useState(false);

    useEffect(() => {
        if (buttonPress) {
            fetch("https://www.themealdb.com/api/json/v1/1/random.php")
                .then((response) => response.json())
                .then((response) => {
                    setRecipe(response.meals[0]);
                    setButtonPress(false);
                });
        }
    }, [buttonPress]);

    return (
        <div>
            <div className="text-center bg-gray-50 mb-7 text-gray-800 py-20 px-6">
                <h1 className="text-5xl font-bold mt-0 mb-6">
                    What should I eat tonight?
                </h1>

                <button
                    onClick={() => setButtonPress(true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700  rounded"
                >
                    Gimme something to eat
                </button>
            </div>
            <Recipe recipe={recipe} />
        </div>
    );
}
