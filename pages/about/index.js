
import Router from "next/router"
import { Manilayout } from "../components/MainLayout"

export default function About (){
    
    const linkClickHandler = () =>{
        Router.push('/')
    }
    
    return (
        <Manilayout title={'About Page'} >
        <h1>About page</h1>
        <button onClick={linkClickHandler}>Go back to home</button>

        <button onClick={()=>Router.push('/posts')}>Go back to posts</button>
        </Manilayout>
    )
}