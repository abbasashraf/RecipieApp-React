import React, { Component } from 'react';
import IngredientList from './ingredientList';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resipies: JSON.parse(localStorage.getItem('recipies')) || []

        };

    }
    displayRecipie() {
        let resultArray = []
        this.state.resipies.map((recipie, i) => {
            resultArray.push(
                <div className="col-sm-6 col-md-4">

                    <div className="thumbnail">
                        <img src={recipie.image} alt={recipie.name} />
                            <div className="caption">
                            <h3>{recipie.name}</h3>
                            <p>{recipie.description}</p>
                            <IngredientList recipie={recipie} />
                        </div>
                    </div>
                </div>
            )
        })
        return resultArray;
    }
    render() {
        return (
            <div className="row">
                <h1>Home</h1>
                {this.displayRecipie()}
            </div>
        )
    }
}


export default Home;