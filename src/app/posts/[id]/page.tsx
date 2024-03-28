'use client';
import { useParams } from 'next/navigation';

export default function PostDetails() {
  const { id } = useParams(); // Destructure the ID from query params


  console.log("Post ID:", id);

  return (
    <div>
      <h1>Post details for ID: {id}</h1>
    </div>
  );
}
