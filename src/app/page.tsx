'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [UserList, setUserList] = useState([]);

  const handleServerAction = async () => {
    try {
      const response = await fetch('/api/serverAction', {
        method: 'POST', 
      });

      if (response.ok) {
        console.log("Server action executed successfully");
      } else {
        console.error("Failed to execute server action");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleUsersListClick = async () => {
    try {
      const response = await fetch('/api/userslist', {
        method: 'GET', 
      });
      console.log(response);
      if (response.ok) {
        console.log("user list get successfully");
        const userData = await response.json();
        console.log("User list fetched successfully:", userData);
        setUserList(userData);

      } else {
        console.error("Failed to execute user list");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  return (
    <div className="grid place-items-center mt-10">
      <button className="bg-[white] text-black p-5" onClick={handleServerAction}>Do Server Action</button>

      <button className="bg-[white] text-black p-5 mt-10" onClick={handleUsersListClick}>Get users data</button>


      <div className="usersdata mt-10">
      {UserList.length > 0 && ( 
          UserList.map((user:any) => (
            <div>
              <p key={user.id} > {user.name} <Link href={`/posts/${user.id}`}>view User</Link></p>              
            </div>
          ))
        )}
      </div>
    </div>
  );
}