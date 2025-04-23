import React from "react";
import Link from "next/link";

const Posts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-200"
          >
            <Link href={`/dashboard/posts/${post.id}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-700 mt-4">{post.body}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[100px]">
        <Link href="/">
          <span className=" bg-blue-500 mt-[100px] hover:bg-blue-600  text-white font-medium py-2 px-6 rounded-lg transition">
            Back to Home
          </span>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Posts;
