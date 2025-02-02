"use client";
import { useState } from "react";
import { db } from "@/lib/firebase"; // Import Firestore database instance
import { collection, addDoc } from "firebase/firestore"; // Firestore methods

export default function AddJobPage() {
  const [title, setTitle] = useState(""); 
  const [companyName, setCompanyName] = useState(""); 
  const [position, setPosition] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [location, setLocation] = useState(""); 
  const [salary, setSalary] = useState(""); 
  const [remote, setRemote] = useState(""); 
  const [loading, setLoading] = useState(false); // To handle form submission state

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const jobData = {
      title,
      companyName,
      position,
      description,
      location,
      salary,
      remote,
      createdAt: new Date(),
    };

    try {
      await addDoc(collection(db, "jobs"), jobData); // Add job data to Firestore
      alert("Job successfully added!");

      // Reset form fields after successful submission
      setTitle("");
      setCompanyName("");
      setPosition("");
      setDescription("");
      setLocation("");
      setSalary("");
      setRemote("");
    } catch (error) {
      console.error("Error adding job:", error);
      alert("Failed to add job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Add New Job</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Job Information</h2>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Job Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Job Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Job Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Salary</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Job Type (Remote or Offline)</label>
          <select
            value={remote}
            onChange={(e) => setRemote(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Job Mode</option>
            <option value="remote">Remote</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full"
          >
            {loading ? "Adding Job..." : "Add Job"}
          </button>
        </div>
      </form>
    </div>
  );
}
