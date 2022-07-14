import React from 'react'
import { CommentType } from '../shared/types'
import Comment from './Comment'

import styles from '../styles/Comments.module.css'

type Props = {
    comments:CommentType[]
}

function Comments({comments}:Props) {
  return (
    <div className={styles.comments}>
        <p style={{color:'#555',margin:0}}>Comments ({comments.length})</p>
        {
            comments.map(comment=><Comment comment={comment} key={comment.id} />)
        }
    </div>
  )
}

export default Comments