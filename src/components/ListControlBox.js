import React, { Component } from 'react';
import Search from './Search';
import Categories from './Categories';
import TodoUnderCat from './TodoUnderCat';
import ContextMenu from './ContextMenu'
import FloatingInput from './FloatingInput';

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
            categoryInput: '',
            todoInput: '',
            searchInput: '',
            contextMenu: ['close', 0, 0],
            floatingInput: ['close', 0, 0, ''],
        }
    }

    // Add New Lists
    catInputBring = (e) => {
        this.setState({
            categoryInput: e.target.value,
        })
    }

    handleAddCat = () => {
        let catInput = this.state.categoryInput;
        let newId = Math.random();
        if (catInput !== '') {
            this.setState({
                categories: [...this.state.categories, {
                    id: newId.toString(),
                    categoryName: catInput,
                    todos: [],
                }],
                location: newId.toString(),
                categoryInput: '',
            })
        } else {
            this.setState({
                categories: [...this.state.categories, {
                    id: newId.toString(),
                    categoryName: 'New List',
                    todos: [],
                }],
                location: newId.toString(),
            })
        }
    }
    
    handleAddCatByEnter = (e) => {
        if(e.charCode === 13) {
            this.handleAddCat();
        }
    }

    handleCatChange = (e) => {
        this.setState({
            location: e.target.id,
        })
    }

    // Add New Todos
    todoInputBring = (e) => {
        this.setState({
            todoInput: e.target.value,
        })
    }

    handleAddTodo = () => {
        let todoInput = this.state.todoInput;
        if (todoInput !== '') {
            let newCategories = this.state.categories.slice();
            for (let cat of newCategories) {
                if (cat.id === this.state.location) {
                    let obj = {
                        id: Math.random().toString(),
                        todo: todoInput,
                        done: false,
                    }
                    cat.todos.push(obj);
                    return this.setState({
                        categories: newCategories,
                        todoInput: '',
                    })
                }
            }
        }
    }
    
    handleAddTodoByEnter = (e) => {
        if(e.charCode === 13) {
            this.handleAddTodo();
        }
    }
    
    // when Todo is done
    handleDoneTodo = (e) => {
        let newCategories = this.state.categories.slice();
        for (let cat of newCategories) {
            if (this.state.searchInput === '') {
                if (cat.id === this.state.location) {
                    for (let todo of cat.todos) {
                        if (todo.id === e.target.id) {
                            todo.done = !todo.done;
                            return this.setState({
                                categories: newCategories,
                            })
                        }
                    }
                }
            } else {
                for (let todo of cat.todos) {
                    if (todo.id === e.target.id) {
                        todo.done = !todo.done;
                        return this.setState({
                            categories: newCategories,
                        })
                    }
                }
            }
        }

    }

    // Right click Context Menu open
    handleRightClick = (e) => {
        e.preventDefault();
        this.setState({
            contextMenu: ['open', e.pageX, e.pageY],
            targetId: e.target.id,
        })
    }

    contextMenuClose = (e) => {
        this.setState({
            contextMenu: ['close', 0, 0],
        })
    }

    
    // Delete contents
    handleDelete = () => {
        let newCategories = this.state.categories.filter(cat => cat.id !== this.state.targetId);
        for (let cat of newCategories) {
            for (let i in cat.todos) {
                if (cat.todos[i].id === this.state.targetId) {
                    cat.todos.splice(i, 1)
                }
            }
        }
        this.setState({
            categories: newCategories,
        })
    }
    
    // Floating input box Open
    openFloatingInput = (e) => {
        for (let cat of this.state.categories) {
            if (cat.id === this.state.targetId) {
                return this.setState({
                    floatingInput: ['open', e.pageX, e.pageY, cat.categoryName],
                })
            }
            for (let todoObj of cat.todos) {
                if (todoObj.id === this.state.targetId) {
                    return this.setState({
                        floatingInput: ['open', e.pageX, e.pageY, todoObj.todo],
                    })
                }
            }
        }
    }
    
    // Categories && Todo contents change
    floatingInputBring = (e) => {
        let arr = this.state.floatingInput;
        arr[3] = e.target.value;
        return this.setState({
            floatingInput: arr,
        })
    }

    handleContentsChange = (e) => {
        if (this.state.floatingInput[3] !== '') {
            let newCategories = this.state.categories.map(cat => {
                if (cat.id === this.state.targetId) {
                    cat.categoryName = this.state.floatingInput[3];
                    return cat;
                }
                return cat
            });
            for (let cat of newCategories) {
                for (let i in cat.todos) {
                    if (cat.todos[i].id === this.state.targetId) {
                        cat.todos[i].todo = this.state.floatingInput[3];
                    }
                }
            };
            this.setState({
                categories: newCategories,
            })
        }
    }

    contentsChangeEnter = (e) => {
        if(e.charCode === 13) {
            this.handleContentsChange()
            this.setState({
                floatingInput: ['close', 0, 0, ''],
            })
        }
    }

    // Search
    handleSearch = (e) => {
        this.setState({
            searchInput: e.target.value,
        })
    }

    // handleSearch = (e) => {
    //     let value = e.target.value;
    //     console.log(value);
    // }

    render() {
        return (
            <div className='list-control-box' onClick={this.contextMenuClose}>
                <Search 
                searchInput={this.state.searchInput}
                handleSearch={this.handleSearch}
                />
                <h2 style={catName}>
                {this.state.categories.map(locId => this.state.location === locId.id ? locId.categoryName : '')}
                </h2><br></br>
                <Categories 
                categories={this.state.categories} 
                location={this.state.location}
                categoryInput={this.state.categoryInput}
                catInputBring={this.catInputBring}
                handleAddCat={this.handleAddCat}
                handleAddCatByEnter={this.handleAddCatByEnter}
                handleCatChange={this.handleCatChange} 
                handleRightClick={this.handleRightClick}
                />
                <TodoUnderCat 
                categories={this.state.categories} 
                location={this.state.location} 
                todoInput={this.state.todoInput}
                searchInput={this.state.searchInput}
                todoInputBring={this.todoInputBring}
                handleAddTodo={this.handleAddTodo}
                handleAddTodoByEnter={this.handleAddTodoByEnter}
                handleDoneTodo={this.handleDoneTodo}
                handleRightClick={this.handleRightClick}
                />
                <ContextMenu 
                contextMenu={this.state.contextMenu}
                handleDelete={this.handleDelete}
                openFloatingInput={this.openFloatingInput}
                />
                <FloatingInput 
                floatingInput={this.state.floatingInput}
                floatingInputBring={this.floatingInputBring}
                contentsChangeEnter={this.contentsChangeEnter}
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