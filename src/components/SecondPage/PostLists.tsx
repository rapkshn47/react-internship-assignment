import { useState, useEffect } from "react";
import { DataGrid, GridRowsProp } from "@mui/x-data-grid";

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostLists() {
  const apiURL = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState<post[]>([]); 

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(apiURL);

        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.log("Failed to retrieve data. Status code:", response.status);
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
    }
    fetchPost();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "userId", headerName: "Uer ID", width: 70 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "body", headerName: "Body", width: 300 },
  ];

  const rows: GridRowsProp = posts.map((post) => ({
    id: post.id,
    userId : post.userId,
    title: post.title,
    body: post.body,
  }));

  return (
    <div className="post-container">
      <h1>JSON data:</h1>
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default PostLists;
