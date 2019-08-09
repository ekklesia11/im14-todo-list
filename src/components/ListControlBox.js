import React, { Component } from 'react'
import Search from './Search'
import Categories from './Categories'
import TodoUnderCat from './TodoUnderCat';

export default class ListControlBox extends Component {
    constructor() {
        super()
        this.state = {
            categories: [
                {
                    categoryName: 'personal',
                    todos: [],
                },
                {
                    categoryName: 'work',
                    todos: [],
                },
                {
                    categoryName: 'family',
                    todos: [],
                },
            ],
            location: 'personal',
        }
    }

    handleAddTodo = () => {
        let input = document.getElementsByClassName('addTodo')[0].children[0];
        let newCategories = this.state.categories.slice();
        for (let cat of newCategories) {
            if (cat.categoryName === this.state.location) {
                cat.todos.push(input.value);
            }
        }
        this.setState({
            categories: newCategories,
        })
        input.value = '';
    }

    handleCatChange = (e) => {
        console.log(e.target.textContent);
        this.setState({
            location: e.target.textContent,
        })
    }

    handleAddTodoByEnter = (e) => {
        if(e.charCode === 13) {
            this.handleAddTodo();
        }
    }

    handleAddCat = () => {
        let catInput = document.getElementsByClassName('add-categories')[0].children[0];
        console.log(catInput.value)
        this.setState({
            categories: this.state.categories.concat({
                categoryName: catInput.value,
                todos: [],
            }),
            location: catInput.value,
        })

        catInput.value = '';
    }

    handleAddCatByEnter = (e) => {
        if(e.charCode === 13) {
            this.handleAddCat();
        }
    }

    render() {
        return (
            <div className='list-control-box'>
                <Search />
                <h4 style={catName}>{this.state.location}</h4><br></br>
                <Categories 
                categories={this.state.categories} 
                handleCatChange={this.handleCatChange} 
                handleAddCat={this.handleAddCat}
                handleAddCatByEnter={this.handleAddCatByEnter}
                />
                <TodoUnderCat 
                categories={this.state.categories} 
                location={this.state.location} 
                handleAddTodo={this.handleAddTodo}
                handleAddTodoByEnter={this.handleAddTodoByEnter}
                />
            </div>
        )
    }
}

const catName = {
    margin: '0',
    display: 'inline',
    position: 'absolute',
    left: '31%',
}