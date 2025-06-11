import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

const Api = () => {
  let [recipes, setRecipes] = useState(null);
  async function getData() {
    let { data } = await axios.get(
      `https://forkify-api.herokuapp.com/api/search?q=beef`
    );
    console.log(data.recipes);
    setRecipes(data.recipes);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="api">
        <div className=" text-black text-center">
          <h3 className="fs-1 text-uppercase pt-5 fw-bolder">Api component</h3>
          <div className="d-flex  gap-3 justify-content-center align-items-center py-3">
            <div className="line"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line"></div>
          </div>
        </div>

        {recipes?.length > 1 ? (
          <div className="container pt-3 pb-5">
            <div className="row g-4">
              {recipes?.map((recipe) => {
                return (
                  <div key={recipe.recipe_id} className="col-md-3">
                    <div className="recipes">
                      <img src={recipe.image_url} className="w-100" alt="" />
                      <h4>{recipe.title.split(" ").slice(0, 2).join(" ")}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default Api;
