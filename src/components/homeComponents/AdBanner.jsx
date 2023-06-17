import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";
import classes from './Home.module.css';



const AdBanner = () => {
  return (
    <div className={classes.pic}
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
      }}
    >
      <div className={classes.container}>
        <h2>New Recipe</h2>
        <h1>Pineapple Salmon</h1>
        <h2>
            This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown<br /> sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in <br /> butter, garlic, and chives. You won’t want to miss it!
        </h2>
        <Link to="/recipe/3">
          <button className="blue-btn">Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
