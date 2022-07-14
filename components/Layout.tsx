import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
import Sidebar from './Sidebar'


type LayoutProps = {
    children : ReactNode
}

const Layout = ({children} : LayoutProps) => {
  return (
    <>
        <header className={styles.header}>
            <Navbar />
        </header>
        <main className={styles.content}>
            <aside className={styles.sider}>
                <Sidebar />
            </aside>
            {children}
        </main>
        <footer className={styles.footer}></footer>
    </>
  )
}

export default Layout