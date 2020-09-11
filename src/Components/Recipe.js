import React, { Component } from 'react';
//import {instructions} from '../instructionsData'

 const url = `http://localhost:4000/api/v1/favorites`
 //const instruction = instructions[1]

//  const id = this.props.user.user.id   # I moved this on line 19 -- props were not defined outside of Recipe class

class Recipe extends Component {
    state = {
        liked: false,
        instructions: false,
        steps: ``,
        ingredients: ``
    }

    parseInstructions = (instructions) => {
        let parsedInstructions = ``
        let ingredientsSet = new Set()

        instructions['steps'].forEach(step => {
            parsedInstructions += `#${step['number']}: ${step['step']} \n\n`
            step['ingredients'].forEach(ingredient => ingredientsSet.add(ingredient.name))
        })
        
        return [parsedInstructions,[...ingredientsSet]]
    }

    clickHandler = (e) => {
        
        if (e.target.matches(`#like-btn`)) {
            this.setState({liked: true}, () => console.log(this.state))
            this.postFavoriteRecipe()
        }
        
        if (e.target.matches(`#instructions-btn`)) {
            this.setState({instructions: !this.state.instructions}, () => console.log(this.state))
            if (this.state.steps === ``) {this.fetchInstructions(this.props.recipe.id)}
        }

        if (e.target.matches(`#unlike-btn`)) {
            this.setState({liked: false}, () => console.log(this.state))
            this.deleteFavoriteRecipe()
        }
    }

    fetchInstructions = id => {
        fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=81b17e72c9484724a29239484ef6b188`)
        .then(r => r.json())
        .then(instructionsArray => {
            instructionsArray.forEach(instructionsObject => this.setState({
                steps: this.parseInstructions(instructionsObject)[0],
                ingredients: this.parseInstructions(instructionsObject)[1]
            }, () => console.log(`from fetch: `,this.state)))
        })
    }

    postFavoriteRecipe = () => {
        const id = this.props.user.user.id
        const config = {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                title: this.props.recipe.title,
                user_id: id,
                ingredients: `${this.state.ingredients}`,
                instructions: `${this.state.steps}`
             })
        }
        
        fetch(url, config)
        .then(r => r.json())
        .then(console.log)
    }

    deleteFavoriteRecipe = () => {
        
    }

    formatSteps = stepsString => {
        const stepsArray = stepsString.split(`#`)

        return stepsArray.map((step,i) => <div key={i}>{step}</div>)
    }


    render() {
        console.log(this.props.recipe)

        const styleObj= {'color': 'blue'}

        return (
            <div className='recipe' style={this.state.liked ? styleObj : null}>
                <img className='recipe-image' src={this.props.recipe.image} alt={this.props.recipe.title}></img>
                <p className='recipe-title'>{this.props.recipe.title}</p>
                
                <button id='instructions-btn' onClick={this.clickHandler}>Instructions</button>
                {
                    this.state.instructions ? 
                    <div>
                        {
                            this.state.liked ? 
                            <button id='unlike-btn' onClick={this.clickHandler}>unlike</button> : 
                            <button id='like-btn' onClick={this.clickHandler}>Like</button>
                        }
                        <br/>
                        {(this.state.steps === '') ? 'Sorry. No Instructions.' : this.formatSteps(this.state.steps)}
                        {/* {this.formatSteps(this.state.steps)} */}
                    </div> 
                    : 
                    null
                }
            </div>
        );
    }
}

export default Recipe;
