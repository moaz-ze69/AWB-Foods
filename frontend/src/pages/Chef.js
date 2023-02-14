//   return <div></div>;
// }

import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Chef() {
  const location = useLocation();
  const data = location.state;
  return (
    <div>
      <div className="chief-card">
        <img src={data.image} alt="" />
        <div className="chief-card-info">
          <h3 className="chief-card-name">{data.chief.name}</h3>
          <p className="chief-recipe-count">
            Recipes: <b>{data.chief.recipies.length}</b>
          </p>
          <p className="chief-cuisine">
            Cuisine: <b>{data.chief.cuisine}</b>
          </p>
          <p className="cheif-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </p>
        </div>
      </div>

      <div>
        <h2>Recipes</h2>
        <div className="recipes">
          {data.chief.recipies.map((recipe) => (
            <div className="recipe-card">
              <img src={recipe.image} alt="" />
              <div className="recipe-card-info">
                <h3 className="recipe-card-name">{recipe.name}</h3>
                <p className="recipe-card-time">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
