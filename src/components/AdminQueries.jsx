import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLogin from "./AdminLogin";

export default function AdminQueries() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchQueries = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/queries");
          if (res.data.success) {
            setQueries(res.data.data);
          }
        } catch (error) {
          console.error("Error fetching queries:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchQueries();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <AdminLogin onLogin={setIsLoggedIn} />;
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">📩 User Queries</h2>

        {loading ? (
          <p className="text-center text-lg">Loading queries...</p>
        ) : queries.length === 0 ? (
          <p className="text-center text-lg">No queries found.</p>
        ) : (
          <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
                  <th className="py-3 px-4 border">Name</th>
                  <th className="py-3 px-4 border">Email</th>
                  <th className="py-3 px-4 border">Message</th>
                  <th className="py-3 px-4 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {queries.map((q) => (
                  <tr
                    key={q._id}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <td className="py-3 px-4 border">{q.name}</td>
                    <td className="py-3 px-4 border">{q.email}</td>
                    <td className="py-3 px-4 border">{q.message}</td>
                    <td className="py-3 px-4 border">
                      {new Date(q.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
