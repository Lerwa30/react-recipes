import React from "react";
import axios from "axios";
import { useState } from "react";

import { Formik } from "formik";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageUrl: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);

    axios
      .post(`https://recipes.devmountain.com/recipes`, values)
      .then((res) => {
        console.log(res.data);
      })
  };

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Title your Recipe!"
              value={values.recipeName}
              onChange={handleChange}
              name="recipeName"
            ></input>
            <input
              placeholder="Upload a Photo!"
              value={values.imageUrl}
              onChange={handleChange}
              name="imgUrl"
            ></input>
            <div>
            <input
              type="radio"
              value="Cook"
              onChange={handleChange}
              name="type"
            />
            <p>Cook</p>
            </div>
            <div>
            <input
              type="radio"
              value="Bake"
              onChange={handleChange}
              name="type"
            />
            <p>Bake</p>
            </div>
            <div>
            <input
              type="radio"
              value="Drink"
              onChange={handleChange}
              name="type"
            />
            <p>Drink</p>
            </div>
            <input
              placeholder="Enter Prep Time!"
              value={values.prepTime}
              onChange={handleChange}
              name="prepTime"
            ></input>
            <input
              placeholder="Enter Cook Time!"
              value={values.cookTime}
              onChange={handleChange}
              name="cookTime"
            ></input>
            <input
              placeholder="Serving Size"
              value={values.serves}
              onChange={handleChange}
              name="serves"
            ></input>
            <input
              placeholder="Ingredient"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
            <input
              placeholder="Quantity"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            ></input>
            <input
              type="textarea"
              placeholder="Instructions"
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            ></input>
            <button
              type="button"
              className="orange-btn"
              onClick={addIngredient}
            >
              Add Ingredient
            </button>
            <button type="submit" className="blue-btn">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
