import { useLoaderData } from "react-router-dom";
import TaskTable from "./TaskTable";
import { useState } from "react";

const Task = () => {
    const tasksFromServer = useLoaderData()

    const handleTask = (event) => {
        event.preventDefault();
        const form = event.target;
        const task = form.task.value;
        const tasks = { task }
        console.log(tasks)

        fetch('https://ibos-task-for-intern-server-shakil53.vercel.app/', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
                if (data.insertedId) {
                    alert('Task added successfully')
                }
            })
    }

    return (
        <div className="m-20 ml-48">
            <form onSubmit={handleTask} className="form-control">
                <label className="label">
                    <span className="label-text text-xl font-serif">Insert Your Task</span>
                </label>
                <label className="input-group">
                    <button className="btn btn-primary">Add Task</button>

                    <input type="text" name="task" placeholder="write tasks" className="input input-bordered w-96 mb-10" />
                </label>
            </form>
            <div>
                {
                    tasksFromServer.map(singleTask => <TaskTable
                        key={singleTask._id}
                        singleTask={singleTask}

                    ></TaskTable>)
                }
            </div>


        </div>

    )
};

export default Task;