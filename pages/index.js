
import Link from "next/link"
import Head from "next/head"
import { Manilayout } from "./components/MainLayout"


export default function Index () {
    return (
        <Manilayout title={"Home Page"}>
           
         <h1>Hello Next.js</h1>
            <p> <Link href={'/about'}><a>About</a></Link></p>
            <p> <Link href={'/posts'}><a>Posts</a></Link></p>
            <p>Text messaging, or texting, is thea an Internet connection. </p>
        </Manilayout>
    ) 
}
