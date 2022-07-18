import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Link, Route, useRouteMatch } from 'react-router-dom'
import Comments from './Comments'
import { useEffect } from 'react/cjs/react.development';
import { getPosts } from '../service'
import { fetchFunc } from '../service'
import { getFetch } from '../service'


export default function Posts({ userID }) {

    const match = useRouteMatch();
    let showLinks = false;
    const [posts, setPosts] = useState([]);
    const [commentClicked, setCommentClicked] = useState(null);

    useEffect(async () => {
        let result = await getFetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
        setPosts(result);
    }, []);
    const handleLink = (id) => {
        setCommentClicked(parseInt(id));
    }
    return (
        <div id="post">
            <ul className="postContainer">
                {posts.map((post, index) => {
                    return <li className="postLink" key={index}>
                        <Link to={`/users/${userID}/posts/${post.id}`} >
                            <div style={{ 'fontWeight': commentClicked === post.id ? 'bold' : 'normal' }}>{post.title} </div>
                        </Link>
                        <div className="postLinkContainer">{post.body}</div>
                        <Route path="/users/:userId/posts/:id">
                            <Comments postId={post.id} styleChosenPost={handleLink} />
                        </Route>
                    </li>
                })}
            </ul>

        </div>
    )
}