import React, { useState, useEffect, useCallback } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { PIORITY } from "../../../utils/constants";
import { toDate, getFormattedDate, dispatchEvent } from "../../../utils/common";
import { onAddTask, onUpdateTask } from "../../../utils/task";


const TaskForm = props => {
    const { task } = props

    const [state, setState] = useState({})
    const [isAdd, setIsAdd] = useState(!task)
    const saveText = isAdd ? 'Add' : 'Update'

    useEffect(() => {
        if (task) {
            setState(task)
        } else {
            setState({
                piority: 'normal',
                dueDate: getFormattedDate(new Date())
            })
        }
    }, [task])

    const onChange = useCallback((key, value) => {
        setState({ ...state, [key]: value })
    }, [state])

    const onSave = () => {
        if (isAdd) {
            const { name, dueDate } = state
            if (!name) {
                alert('TASK TITLE is a required field.')
                return
            }
            if (toDate(dueDate) < toDate(getFormattedDate(new Date()))) {
                alert('DUE DATE must not be in the past.')
                return
            }

            onAddTask(state)
            dispatchEvent('updateTask')
        } else {
            onUpdateTask(state)
            dispatchEvent('updateTask')
        }
    }

    return <div>
        <Input placeholder='Add new task ...' onChange={e => onChange('name', e.target.value)} value={state.name} />

        <p style={styles.label}>Description</p>
        <div style={{ marginRight: 20 }}>
            <textarea rows={5} style={styles.description} onChange={e => onChange('description', e.target.value)} value={state.description} />
        </div>


        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1 }}>
                <p style={styles.label}>Due Date</p>
                <div style={{ marginRight: 20 }}>
                    <input
                        type='date'
                        style={styles.date}
                        onChange={e => onChange('dueDate', e.target.value)}
                        value={state.dueDate}
                    />
                </div>
            </div>
            <div style={{ flex: 1 }}>
                <p style={styles.label}>Piority</p>
                <select style={styles.select} onChange={e => onChange('piority', e.target.value)} value={state.piority}>
                    {PIORITY.map(e => <option key={e} value={e}>{e[0].toUpperCase() + e.substr(1)}</option>)}
                </select>
            </div>
        </div>

        <br />
        <br />
        <Button type='success' onClick={onSave}>{saveText}</Button>
    </div >
}

export default TaskForm

const styles = {
    select: {
        border: '#BDBDBD solid 1px',
        width: '100%',
        borderRadius: 5,
        padding: 7,
    },
    date: {
        border: '#BDBDBD solid 1px',
        width: '100%',
        borderRadius: 5,
        padding: 5,
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    description: {
        border: '#BDBDBD solid 1px',
        width: '100%',
        padding: 10,
        borderRadius: 5,
    },
}