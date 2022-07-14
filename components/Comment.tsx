import React from 'react'
import { CommentType } from '../shared/types'
import styles from '../styles/Comments.module.css'

type Props = {
    comment : CommentType
}

function Comment({comment}:Props) {

  return (
    <div className={styles.comment}>
        <div className={styles.comment__header}>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
        </div>
        <div className="comment__body">
            {comment.body}
        </div>
    </div>
  )
}

export default Comment