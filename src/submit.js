import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Ingredients from './ingredients';
import IngredientList from './ingredientList'
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'ylaqeqii';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/your cloud name/upload';

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipies: JSON.parse(localStorage.getItem('recipies')) || [],
            newRecipie: {
                name: "new redipie",
                description: "Description",
                ingredients: []
            },
            uploadedFileCloudinaryUrl: ''
        }
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }

    submitRecipe() {
        let newRecipie = this.state.newRecipie
        newRecipie.name = this.name.value;
        newRecipie.description = this.description.value;
        newRecipie.image = this.state.uploadedFileCloudinaryUrl;

        this.setState({ newRecipie });
        let recipies = this.state.recipies;
        recipies.push(newRecipie);
        this.setState({ recipies });

        localStorage.setItem('recipies', JSON.stringify(recipies));
        console.log(recipies);

        this.props.history.push("/");

    }

    addIngredient(quantity, ingredient) {
        console.log("add ingredient", quantity, ingredient)
        let newRecipie = this.state.newRecipie;
        newRecipie.ingredients.push({
            quantity: quantity,
            ingredient: ingredient
        })
        this.setState({ newRecipie: newRecipie })
        console.log(newRecipie, "newRecipie")
    }

    render() {
        return (

            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <h1>Submit</h1>
                    <form>
                        <Dropzone
                            multiple={false}
                            accept="image/*"
                            onDrop={this.onImageDrop.bind(this)}>
                            <p>Drop an image or click to select a file to upload.</p>
                        </Dropzone>
                        <div>
                            {this.state.uploadedFileCloudinaryUrl === '' ? null :
                                <div>
                                    <p>{this.state.uploadedFile.name}</p>
                                    <img alt={this.state.uploadedFile.name} src={this.state.uploadedFileCloudinaryUrl} />
                                </div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                ref={(input) => { this.name = input }}
                                type="name"
                                className="form-control"
                                id="name"
                                placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                ref={(input) => { this.description = input }}
                                type="text"
                                className="form-control"
                                id="discription"
                                placeholder="Enter Brief discription" />
                        </div>
                        <IngredientList recipie={this.state.newRecipie} />
                        <Ingredients addIngredient={(quantity, ingredient) => { this.addIngredient(quantity, ingredient) }} />
                        <br/>
                        <button onClick={this.submitRecipe.bind(this)} className="btn btn-default" >Submit</button>
                    </form>

                </div>
            </div>
        )
    }
}


export default Submit;