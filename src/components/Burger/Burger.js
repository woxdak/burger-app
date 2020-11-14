import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,id) => {
            return <BurgerIngredient key={igKey + id} type={igKey}/>;
        });
    }).reduce((arr,el) =>{
        return arr.concat(el);
    },[] );

    console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>"Please put in some ingredients"</p>;
    } 
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {/* <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="salad"/> */}
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;