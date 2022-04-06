import React, { useState, useEffect, useCallback } from "react";
import TaskAdd from './TaskAdd'
import TaskList from './TaskList'

const TodoList = props => {
    return <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ flex: 1, borderRight: '1px solid black' }}>
            <TaskAdd />
        </div>
        <div style={{ flex: 2 }}>
            <TaskList />
        </div>
    </div>
}

export default TodoList