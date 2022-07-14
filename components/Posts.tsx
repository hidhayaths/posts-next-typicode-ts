import React from 'react'
import { PostType  } from '../shared/types'
import styles from '../styles/Post.module.css'
import Post from './Post'

type props = {
    posts:PostType[]
}

const Posts = ({posts}:props) => {
  return (
    <div className={styles.posts} >

        {
            posts.map(post=><Post key={post.id} post={post} />)
        }

    </div>
  )
}

export default Posts