import { useContext, useEffect, useState } from "react";
import PostCard from "./PostCard";
import { PostList as PostListData } from "../store/PostListStore";
import WellcomeMessage from "./WellcomeMessage";
import Loader from "./Loader";

export default function PostList() {
    const { postList, addInitialPost } = useContext(PostListData);
    const [isLoading, setIsLoading] = useState(false); // Initialize to true to show loader on first render

    console.log(postList);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true); // Set loading before fetch
            try {
                const res = await fetch('https://dummyjson.com/posts');
                const data = await res.json();
                addInitialPost(data.posts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setIsLoading(false); // Set loading to false after fetch is complete
            }
        };

        fetchPosts();
    }, []); // Include addInitialPost in dependency array

    return (
        <>
            <div className="container">
                <div className="row row-cols-2">
                    {isLoading ? (
                        <Loader />
                    ) : postList.length > 0 ? (
                        postList.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))
                    ) : (
                        <WellcomeMessage />
                    )}
                </div>
            </div>
        </>
    );
}
