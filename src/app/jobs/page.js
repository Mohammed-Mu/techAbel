"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Import Firestore instance
import { collection, getDocs } from "firebase/firestore"; // Firestore functions

export default function Jobs() {
  const [jobList, setJobList] = useState([]); // State to store jobs

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsCollection = collection(db, "jobs"); // Reference to Firestore collection
        const jobsSnapshot = await getDocs(jobsCollection); // Fetch documents
        const jobsData = jobsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJobList(jobsData); // Update state with fetched jobs
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs(); // Call the function to fetch jobs
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 pt-20">
      <h1 className="text-4xl font-bold text-green-600 mb-6">Available Jobs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobList.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-gray-700 font-medium mt-2">{job.salary}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
