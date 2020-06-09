import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

  const transformedIngredient = Object.keys(props.ingredients)
  .map(ingrKey => {
    return [...Array(props.ingredients[ingrKey])].map((_, i) => {
    return  <BurgerIngredient key = {ingrKey + i} type={ingrKey} />
    });
  })

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger