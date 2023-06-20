import React from "react";
import axios from "axios";
import { useState } from "react";
import classes from './NewRecipe.module.css'

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
      <h1 className={classes.header}>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={classes.nameImg}>
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
            </div>
            <div className={classes.radioContainer}>
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
            </div>
            <div className={classes.prepContainer}>
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
            </div>
            <div className={classes.ingredientContainer}>
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
            </div>
            <button 
              className={classes.ingredientBtn}
              type="button"
              onClick={addIngredient}
            >
              Add Ingredient
            </button>
            <textarea
              type="textarea"
              rows="5"
              cols="40"
              placeholder="Instructions"
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            ></textarea>
            <button type="submit" className={classes.formSubmitBtn}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
