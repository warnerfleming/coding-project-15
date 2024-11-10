//Task 2

import {assets}
 from "./asset.js"

 
 export function calculatePortfolioValue() {
    return assets.reduce((item, asset) => item + (asset.quantity * asset.price),0)
 }


