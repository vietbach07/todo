import React, { useState, useEffect, useCallback } from "react";
import TaskForm from "./components/TaskForm";
import Title from "../../components/Title";

const TaskAdd = props => {

    return <div style={{ padding: 20 }}>
        <Title>New Task</Title>
        <br />
        <TaskForm />
    </div>
}

export default TaskAdd