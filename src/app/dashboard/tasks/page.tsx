"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-600 text-lg p-6">Loading tasks...</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Tasks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map(task => (
          <div
            key={task.id}
            className={`p-5 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl
              ${task.completed ? "bg-green-100 border-green-400" : "bg-yellow-100 border-yellow-400"} 
              border-l-4`}
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{task.title}</h2>
            <p className={`font-medium ${task.completed ? "text-green-700" : "text-yellow-800"}`}>
              {task.completed ? "Completed ✅" : "Pending ⏳"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
