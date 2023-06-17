import React from "react";

import { Formik } from "formik";

const NewRecipeScreen = () => {
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
    console.log(values);
  };

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form>
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
            <input type="radio"></input>
            <input type="radio"></input>
            <input type="radio"></input>
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
            <input></input>
            <input></input>
            <input
              type="textarea"
              placeholder="Instructions"
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            ></input>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
