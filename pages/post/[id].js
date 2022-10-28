import Link from "next/link"
import { Router, useRouter } from "next/router"
import { Manilayout } from "../components/MainLayout"


export default function Post ({post}){
  //const  Router = useRouter ()
  console.log(Router)
    return(
        <Manilayout>
            <h1>{post.title}</h1> 
            <hr/>
            <p>{post.body}</p>
            <Link href={'/posts'}><a>back to all posts</a></Link>

        </Manilayout>
    )
}
Post.getInitialProps = async (ctx) =>{
    const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
    const post = await response.json()
    return {
        post
    }

}
