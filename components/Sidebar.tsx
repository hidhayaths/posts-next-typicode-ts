import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RouteType } from '../shared/types'

import styles from '../styles/Sidenav.module.css'

const userId=1

const routes : RouteType[] = [
    {
        displayText:'My Posts',
        href:`/myposts`
    },
    {
        displayText:'Settings',
        href:'/settings'
    },
    {
        displayText:'Logout',
        href:'/logout'
    }
]


function Sidebar() {
  return (
      <div className={styles.container}>
    <div className={styles.avatar__container}>
    <Image 
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="hidhayath"
        height={75}
        width={75}
        style={{borderRadius:'50%'}}
        />
    </div>
     <ul className={styles.sidenav}>
         {
             routes.map(route=>
                    <li key={route.href} className={styles.sidenav__li}>
                        <Link href={route.href}>
                            <a className={styles.sidenav__li__link}>{route.displayText}</a>    
                        </Link>
                    </li>
                )
         }
     </ul>
     </div>
  )
}

export default Sidebar