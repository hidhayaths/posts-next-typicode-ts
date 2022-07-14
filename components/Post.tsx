import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CommentType, PostType, UserType } from '../shared/types'

import { getPostComments, getUser } from '../shared/api'

import styles from '../styles/Post.module.css'

type Props = {
    post: PostType
}



const Post = ({post}:Props) => {
    const [user,setUser] = useState<UserType|null>(null)
    const [comments,setComments] = useState<CommentType[]>([])

    useEffect(()=>{
            getUser(post.userId).then(u=>setUser(u));
            getPostComments(post.id).then(c=>setComments(c));
    },[post])

  return (
    <article className={styles.post}>
        <div className={styles.post__header}>
            <p className={styles.post__header__title}>{post.title}</p>
            <Link href={`/profile/${post.userId}`}>
                <a className={styles.post__header__author}>{user?.name || post.userId}</a>
            </Link>
        </div>
        <div className={styles.post__content}>
           {post.body}
        </div>
        <div className={styles.post__footer}>
            <div className={styles.post__footer__like__comment}>
                <span>Like</span>
                <span>Comments({comments.length})</span>
            </div>

            <Link href={`/posts/${post.id}`}><a className={styles.post__footer__readmore}>Read more</a></Link>
        </div>
    </article>
  )
}

export default Post


