import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

  const transformedIngredient = Object.keys(props.ingredients)
  .map(ingrKey => {
    return [...Array(props.ingredients[ingrKey])].map((_, i) => {
      <BurgerIngredient key = {ingrKey + i} type={ingrKey} />
    });
  })

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger