import { createContext, useReducer } from "react";



export const PostList = createContext({
    postList: [],
    addPost: () => { },
    addInitialPost: () => { },
    deletePost: () => { },
});

const PostListReducer = (currPostList, action) => {
    switch (action.type) {
        case "DELETE_POST":
            return currPostList.filter(post => post.id !== action.payload.postId);
            case "ADD_INITIAL_POST":
                return [...currPostList, ...action.payload.posts];
        case "ADD_POST":
            return [...currPostList, action.payload];

        // Add other cases for other actions if needed
        default:
            return currPostList; // Return current state if action type is unrecognized
    }
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(PostListReducer, []);

    const addPost = ({ userId, postTitle, postBody, reactions, tags }) => {

        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Math.random(),
                userId: userId,
                title: postTitle,  // Change from postTitle to title
                body: postBody,
                reactions: reactions,
                tags: tags,
            }
        })

    };
    const addInitialPost = (posts) => {
        if (Array.isArray(posts)) {
            dispatchPostList({
                type: "ADD_INITIAL_POST",
                payload: {
                    posts,
                }
            });
        } else {
            console.error("Expected an array of posts");
        }
    };
    
    

    const deletePost = (postId) => {
        console.log("Deleting post with ID:", postId);
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId: postId,
            }
        });
    };

    return (
        <PostList.Provider value={{ postList, addPost, addInitialPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;
