import Head from "next/head"
import Link from "next/link"
import axios from "axios"
import { CommentType, PostType as PostType, UserType } from "../../shared/types"
import styles from '../../styles/Post.module.css'
import { getPost, getPostComments, getUser } from "../../shared/api"
import { useEffect, useState } from "react"
import Comments from "../../components/Comments"

type Props = {
    post:PostType
    comments:CommentType[]
}


const Post = ({post,comments}:Props) =>{

    const[user,setUser] = useState<UserType>()

    useEffect(()=>{
        getUser(post.userId).then(u=>setUser(u));
    },[post])

    return(
        <>
        <Head>
            <title>{post.title}</title>
        </Head>
        <div>
        <p>Back to <Link href='/'><a className={styles.post__page__detail__back}>posts</a></Link></p>
        <div className={styles.post__page__detail}>
            <h2 className={styles.post__page__detail__title}>{post.title}</h2>
            
            <p className={styles.post__page__detail__content}>
                {post.body}
            </p>
            <p className={styles.post__page__detail__author}>
                <span>By </span>
                <Link href={`/profile/${post.userId}`}>
                    <a>{user?.name || post.userId}</a>
                </Link>
             </p>
        </div>
        <Comments comments={comments} />
        </div>
        </>
    )
}

export default Post

type ServerSideProps = {
    resolvedUrl:string,
    query:ParamsType,
    params: ParamsType,
}

type ParamsType = {
    id:number
}

export const getServerSideProps = async({params}:ServerSideProps)=>{
 

    return{
        props:{
            post:await getPost(params.id),
            comments:await getPostComments(params.id),
            
        }
    }
}
