"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardPage() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [tasksCount, setTasksCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token"); // اگه نیاز به auth دارید
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

    const fetchData = async () => {
      try {
        const [projectsRes, tasksRes, ] = await Promise.all([
          axios.get("http://localhost:5000/api/projects", config),
          axios.get("http://localhost:5000/api/tasks", config),
         // axios.get("http://localhost:5000/api/users", config),
        ]);
//console.log("Projects response:", projectsRes.data); // اینو اضافه کن
    //
    
    console.log("Tasks response:", tasksRes.data);
    //console.log("Users response:", usersRes.data);

        setProjectsCount(projectsRes.data.length);
        setTasksCount(tasksRes.data.length);
       // setUsersCount(usersRes.data.length);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="p-6 text-gray-600">Loading dashboard data...</p>;
  }

  return (
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900">Welcome to your Dashboard</h1>
      <p className="text-gray-700 text-lg">
        Here you can manage your projects, tasks, and monitor your mini SaaS app.
      </p>

      {/* کارت‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
          <h3 className="font-bold text-xl mb-2">Projects</h3>
          <p className="text-lg">{projectsCount} active projects</p>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
          <h3 className="font-bold text-xl mb-2">Tasks</h3>
          <p className="text-lg">{tasksCount} pending tasks</p>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
          <h3 className="font-bold text-xl mb-2">Users</h3>
          <p className="text-lg">{usersCount} active users</p>
        </div>
      </div>
    </div>
  );
}
