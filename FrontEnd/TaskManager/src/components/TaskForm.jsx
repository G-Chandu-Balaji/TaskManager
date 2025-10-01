import React from "react";

function TaskForm({
  title,
  description,
  setTitle,
  setDescription,
  handleSubmit,
  editingTask,
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6 transform transition hover:-translate-y-1 hover:shadow-2xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {editingTask ? "Edit Task" : "Add New Task"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Task title"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task description"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-900 via-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:scale-101 transform transition shadow-lg hover:shadow-2xl"
        >
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
