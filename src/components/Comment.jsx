import React from "react"

const Comment = ({ comment }) => (
    <li className="list-group-item">
        <strong>De :</strong> {comment.email}
        <br />
        <strong>Contenu : </strong>{comment.body}
    </li>
)

export default Comment