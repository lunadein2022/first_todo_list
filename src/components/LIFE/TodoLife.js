import React, { useState } from 'react';
import { Item } from './TodoItem_l';
import './TodoLife.css';
import { Link } from 'react-router-dom';
import life from './life.png';
import work from './work.png'

const TodoLife = function () {

    const [todoList, setTodoList] = useState([]);
    const [newItem, setNewItem] = useState("");

    const handleChange = (event) => {
        setNewItem(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    };

    const addItem = () => {
        const item = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            itemName: newItem,
            completed: false,
        };
        setTodoList(item.itemName !== "" ? [...todoList, item] : todoList);
    }

    const deleteItem = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id));
    };

    const completeItem = (id) => {
        setTodoList(
            todoList.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: true };
                } else {
                    return item;
                }
            })
        )
    }

    const allRemove = function () {
        setTodoList(newItem = 0);
    }


    return (

        <main className='todo-list-template'>
            <nav>
                <Link to='/life'><img className='inwork' src={life}></img></Link>
                <Link to='/work'><img className='inwork' src={work}></img></Link>

            </nav>
            <div className='title'>
                I Have To Do
            </div>
            <section className='form-wrapper'>
                <input onChange={handleChange} onKeyDown={handleKeyPress} />
                <button className='create-button' onClick={addItem}>+</button>
            </section>
            <section className='todos-wrapper'>
                {todoList.map((item) => {
                    return (
                        <Item
                            itemName={item.itemName}
                            id={item.id}
                            completed={item.completed}
                            onDoubleClick={deleteItem}
                            completeItem={completeItem}
                        />

                    )
                })}

            </section>
            <button className='all-remove' onClick={allRemove}>전체삭제</button>
        </main>
    )
}

export default TodoLife;