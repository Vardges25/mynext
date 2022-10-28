
import Link from 'next/Link'
import { Manilayout } from './components/MainLayout'
import classes from './styles/error.module.css'


export default function ErrorPage(){
    return (
        <Manilayout>
        <h1 className={classes.error}>Error 404</h1>
        <p>please <Link href={'/'}><a>go back</a></Link>to safty</p>
        </Manilayout>
    )
}
