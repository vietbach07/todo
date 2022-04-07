import React, { useState, useEffect, useRef, useCallback } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Title from "../../components/Title";
import { dispatchEvent, toDate } from "../../utils/common";
import { onDeleteTask, onGetTask } from "../../utils/task";
import Todo from "./components/Todo";

const TodoList = props => {
    const [todoList, setTodoList] = useState([])
    const [checked, setChecked] = useState({})
    const [showBulk, setShowBulk] = useState()

    const searchText = useRef()

    useEffect(() => {
        getData()
        window.addEventListener('updateTask', getData);

        return () => {
            window.removeEventListener('updateTask', getData);
        }
    }, [])

    useEffect(() => {
        if (checked) {
            const found = todoList.find(e => checked[e.id])
            setShowBulk(found)
        }
    }, [checked, todoList])

    const getData = () => {
        let result = onGetTask()
        if (searchText.current) result = result.filter(e => e.name.includes(searchText.current))
        result = result.sort((a, b) => toDate(a.dueDate).valueOf() - toDate(b.dueDate).valueOf())
        setTodoList(result)
    }

    const onCheck = useCallback((id, checked) => {
        setChecked(e => ({ ...e, [id]: checked }))
    }, [])

    const onRemove = () => {
        let ids = Object.keys(checked)
        ids = ids.filter(id => checked[id])
        onDeleteTask(ids)
        setChecked({})
        getData()
    }

    const onSearch = (e) => {
        const value = e.target.value
        searchText.current = value
        getData()
    }

    return <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
        <div style={{ flex: 1, padding: 20, overflowY: 'scroll' }}>
            <Title>To Do List</Title>
            <br />
            <Input placeholder='Search ...' onChange={onSearch} />
            <br />
            {todoList.map(todo => <Todo key={todo.id} todo={todo} checked={checked[todo.id]} onCheck={onCheck} />)}
        </div>
        {showBulk && <div style={{ backgroundColor: '#E0E0E0', display: 'flex', justifyContent: 'center', padding: '10px 20px' }}>
            <div style={{ flex: 1, margin: 'auto' }}>
                <p>Bulk Action:</p>
            </div>
            <div style={styles.button}>
                <Button type='done' >Done</Button>
            </div>
            <div style={styles.button}>
                <Button type='danger' onClick={onRemove}>Remove</Button>
            </div>
        </div>}
    </div >
}

export default TodoList

const styles = {
    button: {
        padding: '0 10px',
        margin: 'auto'
    }
}