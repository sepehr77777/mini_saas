"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p: any) => (
          <div
            key={p.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
