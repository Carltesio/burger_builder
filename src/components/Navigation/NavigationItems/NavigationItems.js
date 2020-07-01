import React from 'react';

import classes from '../NavigationItems/NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.navigationItems}>
        <NavigationItem />
    </ul>
)

export default navigationItems;