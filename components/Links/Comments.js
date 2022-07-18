import React, { useState, useEffect } from 'react'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import { getComments } from '../service'
import { getFetch } from '../service'

export default function Comments(props) {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    const { id } = useParams();
    useEffect(async () => {
        props.styleChosenPost(id)
        let result = await getFetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postId}`);
        setComments(result);
    }, []);

    useEffect(async () => {
        props.styleChosenPost(id);
    })
    const handleComments = () => {
        setShowComments(true);
    }
    return (
        <div>
            {id == props.postId && <button onClick={handleComments}>show Comments</button>}
            {showComments && id == props.postId &&
                <div className="comments">
                    <ul>{comments.map((comment, index) => { return <li key={index}>{comment.body}</li> })}</ul>
                </div>}
        </div>
    )
}

