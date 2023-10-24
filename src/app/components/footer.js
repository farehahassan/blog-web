import Link from 'next/link';
import React from 'react';
import styles from "@/app/styles/footer.module.css"
const footer = () => {
    return (
        <div className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.column_left}>
            <h3>Contact Information</h3>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1-555-555-5555</p>
          </div>
          <div className={styles.column_right}>
            <h3>Legal Information</h3>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
            <br />
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
        <p className={styles.copyright}>Copyright © 2023 My Company</p>
      </div>
    );
};

export default footer;