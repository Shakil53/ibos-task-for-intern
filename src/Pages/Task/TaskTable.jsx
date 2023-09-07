import { key } from "localforage";
import { useState } from "react";

const TaskTable = ({ singleTask }) => {
    const { task, _id } = singleTask;
    // const [users, setUsers] = useState()

    const handleDelete = (_id) => {
        console.log('delete', _id)

        fetch('https://ibos-task-for-intern-server-shakil53.vercel.app/', {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    // const remaining = users.filter(user => user._id !== _id);
                    // setUsers(remaining);
                }
            })


    }

    return (
        <div className="overflow-x-auto">

            <table className="table flex">
                {/* head */}
                <thead>
                    <tr>
                        {task}
                        <tr> MongoDB Id: {_id}  <button onClick={() => handleDelete(_id)} className="ml-96 btn btn-circle btn-outline">X

                        </button></tr></tr>










                </thead>

            </table>
        </div >
    );
};

export default TaskTable;