import { useContext, useRef } from "react";
import { PostList } from "../store/PostListStore";
import { message } from "antd";
export default function CreatePost() {
const {addPost} = useContext(PostList)
    const userIdElement  = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();
const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value ;
    const postTitle = postTitleElement.current.value ;
    const postBody = postBodyElement.current.value ;
    const reactions = parseInt(reactionsElement.current.value);
    const tags = tagsElement.current.value.split(' ').map(tag => tag.trim());
    addPost({userId, postTitle, postBody, reactions, tags});
    message.success("Post Created successfully");
    userIdElement.current.value = '';
    postTitleElement.current.value = '';
    postBodyElement.current.value = '';
    reactionsElement.current.value = '';
    tagsElement.current.value = '';
    
}

  return (
    <div className="container mt-5 py-3 w-75 mx-auto shadow-lg">
      <h2 className="text-center">Create a Post</h2>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User ID</label>
          <input
          ref={userIdElement}
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter Your User ID"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">Title</label>
          <input
          ref={postTitleElement}
            type="text"
            className="form-control"
            id="postTitle"
            placeholder="Enter post title"
            
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Reactions</label>
          <input
          ref={reactionsElement}
            type="text"
            className="form-control"
            id="reactions"
            placeholder="Enter Number of Reactions"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Tags</label>
          <input
          ref={tagsElement}
            type="text"
            className="form-control"
            id="Tags"
            placeholder="Enter tags..."
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postContent" className="form-label">Content</label>
          <textarea
          ref={postBodyElement}
            className="form-control"
            id="postContent"
            rows="5"
            placeholder="Enter post content"
            required
          ></textarea>
        </div>
       <center> <button type="submit" className="btn btn-primary my-2 w-50">Create Post</button></center>
      </form>
    </div>
  );
}
