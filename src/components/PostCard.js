import React from "react";
import 'tachyons';
import './PostCard.css'

const PostCard = ({post, userId, userName}) => {
    return (
        <div className="tl bg-light-gray dib br3 pa3 bw3 shadow-5 w-100 mv3 mh2">
            <ul>
                <li>
                    <img src={`https://robohash.org/${userName}`} alt="profpic" className="br-100 ba h3 w3 dib bg-gray avatar" />
                </li>
                <li>
                    <div>
                        <h3 className="dispname dim">{userId}</h3>
                        <h6 className="username dim">{`@${userName.toLowerCase()}`}</h6>
                    </div>
                    <div>
                        <p>{post}</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default PostCard;