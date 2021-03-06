import Head from 'next/head'
import axios from 'axios'
import {PostType as PostType} from '../shared/types'
import Posts from '../components/Posts'
import { getPosts } from '../shared/api'



type HomePageProps = {
  
    posts:PostType[]

  
}

const Home = ({posts}:HomePageProps) => {

  
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Posts posts={posts} />

    </>
    
  )
}

export default Home



export async function getServerSideProps(){

  return{
    props:{
      posts : await getPosts()
    }

  }
}
