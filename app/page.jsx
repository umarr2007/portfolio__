import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-200 w-[200px] ">
        <div className="flex flex-col gap-4 text-center">
          <Link
            className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer"
            href="/dashboard/posts"
          >
            Posts
          </Link>
          <Link
            className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer"
            href="/dashboard/comments"
          >
            Comments
          </Link>


          <Link
            className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer"
            href="/dashboard/albums"
          >
            Albums
          </Link>
          <Link
            className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer"
            href="/dashboard/todos"
          >
            Todos
          </Link>
          <Link
            className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer"
            href="/dashboard/users"
          >
            Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
