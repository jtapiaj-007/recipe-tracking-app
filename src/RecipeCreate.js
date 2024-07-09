import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [formData, setFormData] = useState({...initialFormData});
  
  const submitHandler = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormData });
  }
  
  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name] : target.value
    });
  }

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                onChange={changeHandler}
                value={formData.name}/>
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                onChange={changeHandler}
                value={formData.cuisine}/>
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="text"
                onChange={changeHandler}
                value={formData.photo}/>
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={changeHandler}
                value={formData.ingredients}/>
            </td>
            <td>
              <textarea 
                id="preparation"
                name="preparation"
                onChange={changeHandler}
                value={formData.preparation}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
