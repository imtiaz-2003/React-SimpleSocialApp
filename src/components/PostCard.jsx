import { useContext } from "react";
import { PostList as PostListData } from "../store/PostListStore";
import { MdDeleteForever } from "react-icons/md";

export default function PostCard({ post }) {
    const { deletePost } = useContext(PostListData);

    return (
        <div className="col w-50 ">
            <div className="card my-3 shadow-lg">
                <div className="card-body">
                    <h5 className="card-title">
                        {post.title}
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                            onClick={() => { deletePost(post.id) }}
                        >
                            <MdDeleteForever style={{ cursor: "pointer" }} />
                        </span>
                    </h5>
                    <p className="card-text">{post.body}</p>
                    {Array.isArray(post.tags) && post.tags.map((tag, index) => (
                        <span key={index} className="badge text-bg-primary" style={{ marginRight: '0.5rem' }}>
                            {tag}
                        </span>
                    ))}

                    <div className="alert alert-info my-2" role="alert">
                        Likes: {post.reactions.likes} Dislikes: {post.reactions.dislikes}
                    </div>
                </div>
            </div>
        </div>
    );
}
