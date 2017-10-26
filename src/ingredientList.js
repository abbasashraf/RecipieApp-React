import React, { Component } from 'react';

class IngredientList extends Component {

displayInfredient(){
    let resultArray = [];
    this.props.recipie.ingredients.map((item, i)=>{
        resultArray.push(<li key={i}>{item.quantity} - {item.ingredient}</li>)
   
    })
    return resultArray
}
    render() {
        return (
            <div>
                <ul>
                    <li>{this.displayInfredient()}</li>
                     
                </ul>
            </div>
        )
    }
}


export default IngredientList ;