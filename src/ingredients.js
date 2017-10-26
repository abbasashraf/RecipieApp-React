import React, { Component } from 'react';

class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newRecipie :{
                name : "recipie",
                description: "description",
                ingredient:[]
            }
        }
    }

    addIngredient() {
        console.log(this.quantity.value)
        this.props.addIngredient(this.quantity.value, this.ingredient.value)
        this.quantity.value = "";
        this.ingredient.value = "";
    }
    render() {
        return (
            <div className="form-inline">
                <label htmlFor="quantity">Quantity </label>
                {'\n'}
                <input
                    ref={(input) => { this.quantity = input }}
                    type="text"
                    className="form-control"
                    id="quantity"
                    placeholder="Quantity" />
                {'\n'}                    
                <label htmlFor="ingredient">Ingredient</label>
                {'\n'}                
                <input
                    ref={(input) => { this.ingredient = input }}
                    type="text"
                    className="form-control"
                    id="ingredient"
                    placeholder="Ingredient" />
                <button
                    onClick={this.addIngredient.bind(this)}
                    type="button"
                    className="btn btn-info"
                >Add</button>
            </div>
        )
    }
}


export default Ingredients;