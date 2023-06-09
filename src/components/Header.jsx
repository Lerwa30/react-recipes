import React from "react";
import { Link } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h2 className={classes.headercontent}>Devmountain Eatery</h2>
      <nav className={classes.nav}>
          <Link to='/' className={classes.link}><button>Home</button></Link>
          <Link to='newRecipe'><button>Add Recipe</button></Link>
      </nav>
    </header>
  );
};

export default Header;
