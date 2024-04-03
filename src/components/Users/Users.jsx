//"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
function Users({ users }) {
  return (
    <ul >
      {users.map((user) => (
        <Link href={`users/${user.id}`}  key={user.id}>
          <li
            className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between"
          >
            <div className="justify-between">
              <h5 className="font-bold pt-6">
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-100">email: {user.email}</p>
            </div>
            <img
              src={user.avatar}
              alt={user.first_name}
              className="rounded-full w-20 m-3"
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
