import Posts from "../components/Posts"
import { getUserPosts } from "../shared/api"
import { PostType as PostType } from "../shared/types"


const userId=3

type Props = {
  posts:PostType[]
}

const MyPosts = ({posts}:Props) => {
  return (
    <Posts posts={posts} />
  )
}

export default MyPosts




export const getServerSideProps = async()=>{
    
  return{
      props:{
          posts: await getUserPosts(userId)
      }
  }
}
