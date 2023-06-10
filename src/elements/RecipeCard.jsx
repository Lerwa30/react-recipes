import classes from "./RecipeCard.module.css";

const RecipeCard = () => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.card}>
        <img
          className={classes.cardImg}
          src="https://iamhomesteader.com/wp-content/uploads/2020/12/shrimp-ceviche-3.jpg"
        ></img>
        <p>Shrimp Ceviche</p>
        <button>See More</button>
      </div>
      <div className={classes.card}>
        <img
          className={classes.cardImg}
          src="https://www.thespruceeats.com/thmb/W5g8vRsNwty_CBmnK4mdJ38ZdsA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/birria-tacos-recipe-5189284-hero-01-56190b7eb77b4370a0bf7f2341e94ee4.jpg"
        ></img>
        <p>Birria Tacos</p>
        <button>See More</button>
      </div>
      <div className={classes.card}>
        <img
          className={classes.cardImg}
          src="https://images.ctfassets.net/3s5io6mnxfqz/5wiweE8cY6gj64AfAh3OK/e6e3c8d0cf88ca01a3d198deb4ca62c8/AdobeStock_205566472.jpeg"
        ></img>
        <p>Cabeza Tacos</p>
        <button>See More</button>
      </div>
    </div>
  );
};

export default RecipeCard;
