import React from 'react';
import styles from "@/app/styles/navbar.module.css"
import Link from 'next/link';


const navbar = () => {
    return (
        <nav className={styles.header}>
           
                <div className={styles.logo}>BLOG WEB
                   
                  </div>
                <ul className={styles.pages}>
                    <li className={styles.pages}> <Link href="/">HOME</Link></li>
                    <li> <Link href="/About">ABOUT</Link></li>
                    <li> <Link href="/Blogs">BLOGS</Link></li>
                    <li> <Link href="/Contact">CONTACT US</Link> </li>
                </ul>
            
        </nav>
    );
};

export default navbar;