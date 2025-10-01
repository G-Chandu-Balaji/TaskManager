import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoardNavbar from "../components/DashBoardNavbar";
import ProfileCard from "../components/ProfileCard";
import TaskForm from "../components/TaskForm";
import SearchFilter from "../components/SearchFilter";
import TaskList from "../components/TaskList";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Fetch profile
  const fetchProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setUser(data);
      else setError(data.message || "Failed to load profile");
    } catch {
      setError("Error fetching profile");
    }
  };

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setTasks(data);
      else setError(data.message || "Failed to load tasks");
    } catch {
      setError("Error fetching tasks");
    }
  };

  // Add / Update Task
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title is required");
      return;
    }
    if (!description.trim()) {
      alert("Description is required");
      return;
    }

    try {
      const url = editingTask
        ? `http://localhost:5000/api/tasks/${editingTask._id}`
        : "http://localhost:5000/api/tasks";
      const method = editingTask ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });

      const data = await res.json();
      if (res.ok) {
        if (editingTask) {
          setTasks(tasks.map((t) => (t._id === data._id ? data : t)));
          setEditingTask(null);
        } else {
          setTasks([...tasks, data]);
        }
        setTitle("");
        setDescription("");
      } else setError(data.message || "Failed to save task");
    } catch {
      setError("Error saving task");
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setTasks(tasks.filter((task) => task._id !== id));
      } else setError("Failed to delete task");
    } catch {
      setError("Error deleting task");
    }
  };

  // Toggle Task Status (pending <-> completed)
  const toggleComplete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/tasks/toggle/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setTasks(tasks.map((t) => (t._id === id ? data : t)));
      }
    } catch (err) {
      console.error("Error toggling task:", err);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Search & Filter
  const filteredTasks = tasks.filter((task) => {
    const matchSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    if (filter === "all") return matchSearch;
    if (filter === "completed")
      return task.status === "completed" && matchSearch;
    if (filter === "pending") return task.status === "pending" && matchSearch;
    return matchSearch;
  });

  useEffect(() => {
    if (!token) navigate("/login");
    else {
      fetchProfile();
      fetchTasks();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <DashBoardNavbar onLogout={handleLogout} />
      <ProfileCard user={user} />
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <TaskForm
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
        editingTask={editingTask}
      />
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <TaskList
        tasks={filteredTasks}
        setEditingTask={(task) => {
          setEditingTask(task);
          setTitle(task.title);
          setDescription(task.description);
        }}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete} // Pass toggle function
      />
    </div>
  );
}

export default Dashboard;
