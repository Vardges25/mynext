import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Manilayout } from "./components/MainLayout"




export default function Posts ({posts}){
   // const [posts,setPosts] = useState ([])
   // useEffect (()=>{
     // async function load (){
     //   const response = await fetch ('http//localhost:4200/posts')
      //  const json = await response.json()
     //   setPosts (json)
      // }
      // load ()
   // },[])

    return (
        <Manilayout>
            <Head>
                <title>Post Page | next Course </title>
                
            </Head>    
        <h1>Posts page</h1>
            <ul>
                {posts.map(post =>(
                    <li key={post.id}>
                       <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                      </Link>
                    </li>
                ))}
            </ul>
        </Manilayout>
    )
    
  
}
Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json ()
    return {
        posts:posts
    }
}



