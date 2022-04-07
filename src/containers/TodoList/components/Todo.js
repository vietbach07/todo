import React, { useState, useEffect, useCallback } from "react";
import Button from "../../../components/Button";
import { onDeleteTask, onGetTaskById } from "../../../utils/task";
import { dispatchEvent } from "../../../utils/common";
import TaskForm from "./TaskForm";

const Todo = props => {
    const { todo, checked, onCheck } = props
    const { id, name } = todo
    console.log(id, 'rerender')
    const [task, setTask] = useState()

    const onSelect = e => {
        onCheck && onCheck(id, !checked)
    }

    const onUpdate = () => {
        const result = onGetTaskById(id)
        setTask(result)
    }

    const onRemove = () => {
        onDeleteTask([id])
        dispatchEvent('updateTask')
    }

    return <div style={{ marginBottom: 20 }}>
        <div style={{ border: '1px solid black', padding: 10, display: 'flex', justifyContent: 'center' }}>
            <div >
                <input
                    type='checkbox'
                    style={{ height: '100%' }}
                    checked={checked}
                    onChange={onSelect}
                />
            </div>
            <div style={{ flex: 1, margin: 'auto' }}>
                <p style={{ margin: '0 20px' }}>{name}</p>
            </div>
            <div style={styles.button}>
                <Button type='info' onClick={onUpdate}>Detail</Button>
            </div>
            <div style={styles.button}>
                <Button type='danger' onClick={onRemove}>Remove</Button>
            </div>
        </div>
        {task && <div style={{ border: '1px solid black', borderTop: 0, padding: 20 }}>
            <TaskForm task={task} saveText='Update' />
        </div>}
    </div>
}

export default Todo

const styles = {
    button: {
        padding: '0 10px'
    }
}