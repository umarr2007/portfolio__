import React from "react";
import Link from "next/link";

const user_id = async ({ params: user }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${user.id}`
  );
  const data = await res.json();

  const { name, email, address, phone, website, company, username } = data;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-2 text-blue-700">{name}</h1>
        <p className="text-gray-700 mb-1">Username: {username}</p>
        <p className="text-gray-700 mb-1">Email: {email}</p>
        <p className="text-gray-700 mb-1">Phone: {phone}</p>
        <p className="text-gray-700 mb-1">Website: {website}</p>
        <p className="text-gray-700 mb-1">
          Address: {address.street}, {address.suite}, {address.city},{" "}
          {address.zipcode}
        </p>
        <p className="text-gray-700 mb-1">
          Geo: {address.geo.lat}, {address.geo.lng}
        </p>
        <p className="text-gray-700 mb-1">
          Company: {company.name} — {company.catchPhrase}
        </p>

        <Link
          className="text-[20px] flex justify-end mt-[20px] text-black"
          href="/dashboard/users"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default user_id;
