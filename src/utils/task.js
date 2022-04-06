import { getItem, setItem } from "./storage"

const onAddTask = (task) => {
    let tastList = getItem('tastList')
    tastList = tastList ? JSON.parse(tastList) : []

    let count = getItem('TaskCount') || 0
    count = Number(count) + 1

    const newTask = { ...task, id: `${count}` }
    tastList = [...tastList, newTask]

    setItem('tastList', JSON.stringify(tastList))
    setItem('TaskCount', count)
}

const onGetTask = () => {
    let result = getItem('tastList')
    result = result ? JSON.parse(result) : []
    return result
}

const onGetTaskById = (id) => {
    let tasks = onGetTask()
    let result = tasks.find(e => e.id === id)
    return result
}

const onUpdateTask = (task) => {
    let tasks = onGetTask()
    tasks = tasks.map(e => e.id === task.id ? task : e)
    setItem('tastList', JSON.stringify(tasks))
}

const onDeleteTask = (ids) => {
    let tasks = onGetTask()
    tasks = tasks.filter(e => !ids.includes(e.id))
    setItem('tastList', JSON.stringify(tasks))
}

export {
    onAddTask,
    onGetTask,
    onGetTaskById,
    onUpdateTask,
    onDeleteTask,
}