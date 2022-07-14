import React, { ReactNode } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { RouteType } from '../shared/types'




const routes : RouteType[] = [
    {
        displayText:'Home',
        href:'/'
    },
    {
        displayText:'Profile',
        href:'/profile/3'
    }

]


const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <Link href="/" ><a className={styles.logo}>Books</a></Link>
        <ul className={styles.nav__ul}>
           {
               routes.map(route=>
                <li className={styles.nav__ul__li} key={route.href}>
                    <Link href={route.href}  >
                        <a className={styles.link}>
                            {route.displayText}
                        </a>
                    </Link>
                </li>
               )
           }
        </ul>
    </nav>
  )
}

export default Navbar


