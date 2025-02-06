import React, { useState, useEffect } from "react";
import axios from "axios";

function Fetching() {
  const [data, setData] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCreate = () => {
    let newPostData = {
      title: "new title",
      body: "new body",
      userId: 1,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPostData)
      .then((res) => {
        setData([res.data, ...data]);
        setNewPost("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    
      <div>
        <h1>Fetching data...</h1>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="write bro..."
        />
        <button onClick={handleCreate}>Add</button>
      
      <ul>
        {data.map((item)=>(
          <li key={item.id}>
            {item.title}
            <button onClick={()=>handleDelete(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetching;
