import taskModel from "../model/task.model.js";

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find({ user: req.user._id });
    return res.status(200).json(tasks);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

//  Create task
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await taskModel.create({
      user: req.user._id,
      title,
      description,
    });

    return res.status(201).json(task);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

//  Update task
export const updateTask = async (req, res) => {
  try {
    const task = await taskModel.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json(task);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

//  Delete task
export const deleteTask = async (req, res) => {
  try {
    const task = await taskModel.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
