import React from "react";

function TaskList({ tasks, setEditingTask, deleteTask, toggleComplete }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <h3 className="font-semibold">
                  {task.title}{" "}
                  {task.status === "completed" && (
                    <span className="text-green-500 text-sm">(Done)</span>
                  )}
                </h3>
                <p className="text-sm text-gray-600">{task.description}</p>
                <p>
                  Status:{" "}
                  {task.status === "completed" ? (
                    <span className="text-green-600">✅ Completed</span>
                  ) : (
                    <span className="text-red-600">❌ Pending</span>
                  )}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingTask(task)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => toggleComplete(task._id)}
                  className={`px-3 py-1 rounded-lg text-white ${
                    task.status === "completed" ? "bg-gray-500" : "bg-green-500"
                  }`}
                >
                  {task.status === "completed" ? "Mark Pending" : "Mark Done"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
