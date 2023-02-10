import React, { Fragment, useState } from "react"
import Comment from "./Comment"

const Post = ({ post }) => {
    const { id, title, body } = post
    const [comments, setComments] = useState([])

    const showComments = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => console.log(error))
    }

    return (
        <div className="card mb-3 col-md-4">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>

                {comments.length > 0 ? (
                    <Fragment>
                        <ul className="list-group">
                            {comments.map(comment => (
                                <Comment key={comment.id} comment={comment} />
                            ))}
                        </ul>

                        <button className="btn btn-danger mt-2" onClick={() => setComments([])}>
                            Masquer les commentaires
                        </button>
                    </Fragment>
                ) : (
                    <button className="btn btn-primary" onClick={() => showComments()}>
                        Voir les commentaires
                    </button>
                )}
            </div>
        </div>
    )
}

export default Post