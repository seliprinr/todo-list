import React, { useState } from "react";
import List from "./List";
import Item from './Item';
import TodoForm from "./TodoForm";
import './Todo.css';


function Todo(){

    const [items, setItems] = useState([]);

    function onAddItem(text){

        let it = new Item(text);

        setItems([...items, it])
    }


    return(<div className="container">
        <h1>Todo</h1>

        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List items={items}></List>

    </div>)

}



export default Todo