import React from "react";
import Link from "next/link";

const Comments = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=10"
  );
  const data = await res.json();
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Comments
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((comment) => (
          <div
            key={comment.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-200"
          >
            <Link href={`/dashboard/comments/${comment.id}`}>
              <h2 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
                {comment.name}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">{comment.email}</p>
            <p className="text-gray-700 mt-4">{comment.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/">
          <span className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition">
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Comments;
