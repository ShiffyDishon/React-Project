import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development';
import { getTodos } from '../service'
import { getFetch } from '../service'

export default function Todos({ userID }) {
    const [todos, setTodos] = useState([]);
    useEffect(async () => {
        let result = await getFetch(`https://jsonplaceholder.typicode.com/todos?userId=${userID}`);
        setTodos(result);
    }, [])
    const inOrder = () => {
        const shuffled = todos.sort(function (a, b) {
            if (a.id < b.id) { return -1; }
            if (a.id > b.id) { return 1; }
            return 0;
        });
        setTodos([...shuffled]);
    }
    const random = () => {
        const shuffled = todos.sort(() => Math.random() - 0.5);
        setTodos([...shuffled]);
    }
    const completed = () => {
        const shuffled = todos.sort(function (a, b) {
            if (a.completed) { return -1 }
            if (!a.completed && b.completed) { return 1 }
            return 0;
        })
        setTodos([...shuffled]);
    }
    const alfabet = () => {
        const shuffled = todos.sort(function (a, b) {
            let nameA = a.title.toUpperCase(); // ignore upper and lowercase
            let nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) { return -1; }
            if (nameA > nameB) { return 1; }
            return 0; // names must be equal
        });
        setTodos([...shuffled]);
    }
    function selectHandler({ value }) {
        switch (value) {
            case 'inOrder': inOrder(); break;
            case 'completed': completed(); break;
            case 'alfabet': alfabet(); break;
            case 'random': random(); break;
            default: return;
        }
    }
    return (
        <>
        <select onChange={e => selectHandler(e.target)} className="btntodos">
            <option value='inOrder'>in order   </option>
            <option value='completed'>completed  </option>
            <option value='alfabet'>alfabet  </option>
            <option value='random'> random  </option>
        </select>
        <div class="todos">
            {todos && todos.map((todo, index) =>
                <div key={index} ><input type="checkbox" checked={todo.completed} />{todo.title}</div>)}
        </div>
        </>
    )
}
