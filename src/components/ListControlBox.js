import React, { Component } from 'react';
import Search from './Search';
import Categories from './Categories';
import TodoUnderCat from './TodoUnderCat';
import Context from './Context'
import Rename from './Rename';

export default class ListControlBox extends Component {
    constructor() {
        super()
        this.state = {
            categories: [
                {
                    id: '001',
                    categoryName: 'personal',
                    todos: [],
                },
                {
                    id: '002',
                    categoryName: 'work',
                    todos: [],
                },
                {
                    id: '003',
                    categoryName: 'family',
                    todos: [],
                },
            ],
            location: '001',
            targetId: null,
        }
    }

    handleAddTodo = () => {
        let input = document.getElementsByClassName('addTodo')[0].children[0];
        if (input.value !== '') {
            let newCategories = this.state.categories.slice();
            for (let cat of newCategories) {
                if (cat.id === this.state.location) {
                    let obj = {done: false,}
                    obj.id = Math.random().toString();
                    obj.todo = input.value;
                    cat.todos.push(obj);
                }
            }
            this.setState({
                categories: newCategories,
            })
        }
        input.value = '';
    }

    handleCatChange = (e) => {
        this.setState({
            location: e.target.id,
        })
    }

    handleAddTodoByEnter = (e) => {
        if(e.charCode === 13) {
            this.handleAddTodo();
        }
    }

    handleAddCat = () => {
        let catInput = document.getElementsByClassName('add-categories')[0].children[0];
        let newId = Math.random();
        if (catInput.value !== '') {
            this.setState({
                categories: this.state.categories.concat({
                    id: newId.toString(),
                    categoryName: catInput.value,
                    todos: [],
                }),
                location: newId.toString(),
            })
        } else {
            this.setState({
                categories: this.state.categories.concat({
                    id: newId.toString(),
                    categoryName: 'New List',
                    todos: [],
                }),
                location: newId.toString(),
            })
        }

        catInput.value = '';
    }

    handleAddCatByEnter = (e) => {
        if(e.charCode === 13) {
            this.handleAddCat();
        }
    }

    handleDoneTodo = (e) => {
        // console.dir(e.target)
        let newCategories = this.state.categories.slice();
        for (let cat of newCategories) {
            if (cat.id === this.state.location) {
                for (let todo of cat.todos) {
                    if (todo.id === e.target.id) {
                        todo.done = !todo.done;
                    }
                }
            }
        }

        this.setState({
            categories: newCategories,
        })
    }

    handleRightClick = (e) => {
        const menu = document.getElementsByClassName('menu');
        let menuVisible = false;

        const toggleMenu = command => {
        menu[0].style.display = command === "show" ? "block" : "none";
        menuVisible = !menuVisible;
        };

        const setPosition = ({ top, left }) => {
        menu[0].style.left = `${left}px`;
        menu[0].style.top = `${top}px`;
        toggleMenu("show");
        };

        window.addEventListener("click", e => {
        if(menuVisible)toggleMenu("hide");
        });

        e.preventDefault();
        
        this.setState({
            targetId: e.target.id,
        })

        const origin = {
            left: e.pageX,
            top: e.pageY
        };
        setPosition(origin);
        // return false;
    }

    handleDelete = () => {
        for (let i = 0; i < this.state.categories.length; i++) {
            if (this.state.categories[i].id === this.state.targetId) {
                let newState = this.state.categories.slice();
                newState.splice(i, 1);
                return this.setState({
                    categories: newState,
                })
            }
            for (let k = 0; k < this.state.categories[i].todos.length; k++) {
                if (this.state.categories[i].todos[k].id === this.state.targetId) {
                    let newState = this.state.categories.slice();
                    newState[i].todos.splice(k, 1);
                    return this.setState({
                    categories: newState,
                })
                }
            }
        }
    }

    handleContentChange = (e) => {
        const rename = document.getElementsByClassName('rename');
        // console.dir(rename[0])
        // let renameVisible = false;
        
        const toggleRename = command => {
            rename[0].style.display = command === "show" ? "block" : "none";
            // renameVisible = !renameVisible;
        };

        const setPosition = ({ top, left }) => {
        rename[0].style.left = `${left}px`;
        rename[0].style.top = `${top}px`;
        toggleRename("show");
        };

        window.addEventListener("click", e => {
            if (e.target !== document.getElementsByClassName('menu-option')[0] && e.target !== rename[0].children[0]) {
                toggleRename("hide");
            }
        });
        
        window.addEventListener('keypress', e => {
            let newText =  rename[0].children[0];
            if (e.charCode === 13 && newText.value !== '') {
                for (let i = 0; i < this.state.categories.length; i++) {
                    if (this.state.categories[i].id === this.state.targetId) {
                            let newState = this.state.categories.slice();
                            newState[i].categoryName = newText.value;
                            this.setState({
                                categories: newState,
                                location: this.state.targetId,
                            })
                    }
                    for (let k = 0; k < this.state.categories[i].todos.length; k++) {
                        if (this.state.categories[i].todos[k].id === this.state.targetId) {
                            let newState = this.state.categories.slice();
                            newState[i].todos[k].todo = newText.value;
                            this.setState({
                                categories: newState,
                            })
                        }
                    }
                }
                newText.value = '';
                toggleRename("hide");
            }
        })

        e.preventDefault();

        const origin = {
            left: e.pageX,
            top: e.pageY
        };
        setPosition(origin);
        return false;
    }

    render() {
        return (
            <div className='list-control-box'>
                <Search />
                <h2 style={catName}>
                {this.state.categories.map(locId => this.state.location === locId.id ? locId.categoryName : '')}
                </h2><br></br>
                <Categories 
                categories={this.state.categories} 
                location={this.state.location}
                handleCatChange={this.handleCatChange} 
                handleAddCat={this.handleAddCat}
                handleAddCatByEnter={this.handleAddCatByEnter}
                handleRightClick={this.handleRightClick}
                />
                <TodoUnderCat 
                categories={this.state.categories} 
                location={this.state.location} 
                handleAddTodo={this.handleAddTodo}
                handleAddTodoByEnter={this.handleAddTodoByEnter}
                handleDoneTodo={this.handleDoneTodo}
                handleRightClick={this.handleRightClick}
                />
                <Context 
                handleDelete={this.handleDelete}
                handleContentChange={this.handleContentChange}/>
                <Rename 
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