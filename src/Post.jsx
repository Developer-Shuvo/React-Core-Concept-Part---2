import { useEffect, useState } from "react";
import "./Post.css"; // Import your CSS file

export default function Post() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <h2>Post using Use effect/ Use State</h2>
      <h2>Post : {post.length}</h2>
      <div className="post-list">
        {post.map((item) => (
          <PostItem key={item.id} post={item} />
        ))}
      </div>
    </div>
  );
}

// _______________________________________
function PostItem({ post }) {
  const { title, id, body } = post;
  return (
    <div className="postBox">
      <h3>Title : {title}</h3>
      <p>Body : {body}</p>
      <p>User Id : {id}</p>
    </div>
  );
}
