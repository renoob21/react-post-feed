import React from "react";
import PostCard from "./PostCard";


const PostList = ({users, posts}) => {
    const postsArray = posts.map((post, i) => {
        return (
            <PostCard
             key={post.id} 
             post={post.body} 
             userId={users.filter(user => (user.id === post.userId))[0].name}
             userName={users.filter(user => (user.id === post.userId))[0].username}
            />
        )
    });

    console.log(postsArray[0]);

    return (
        <div>
            {postsArray}
        </div>
    )
}

export default PostList;