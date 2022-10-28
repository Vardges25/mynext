import Head from "next/head";
import Link from "next/link";
import { Children } from "react";

export function Manilayout ({children,title= 'Next App'}){
    return (
        <>
            <Head>
                <title>{title} | Next Course </title>
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
                <main>
                {children}
             </main>
             <style jsx global>{`
                nav  {
                    position: fixed;
                    height: 60px;
                    left: 0;
                    top: 0;
                    right: 0;
                    background: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                }
                nav a {
                    color: #fff;
                    text-decoration: none;
                }
                main {
                    margin-top: 60px;
                    padding: 1rem;
                }
             `}</style>
        </>
    )
}