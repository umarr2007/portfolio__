import React from "react";
import Link from "next/link";

const Comment_id = async ({ params: album }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${album.id}`
  );
  const { userId, title, body } = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">{title}</h1>
        <h1 className="text-2xl font-bold mb-4 text-blue-700">{userId}</h1>
        <p className="text-gray-700">{body}</p>
        <Link
          className="text-[20px] flex justify-end mt-[20px] text-[#000]"
          href="/dashboard/albums"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Comment_id;
