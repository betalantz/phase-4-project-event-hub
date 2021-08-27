import React from 'react'
import Comment from './Comment'

const CommentsList = ({ commentResults }) => {

    
    return (
        <div>
        {commentResults.map(comment => {
            return (
                
                <Comment 
                    key={comment.comment}
                    comment={comment.comment}
                    commentResults={commentResults}
                    />
                
            )
        })}
        </div>
    )
}

export default CommentsList
