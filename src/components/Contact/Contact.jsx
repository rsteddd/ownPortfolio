import React from 'react';
import styles from "./Contact.module.css"
import {getImageUrl} from "../../utils.js";
 export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Take me for a job</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt="email icon"/>
                    <a href="mailto:vladislavgucci@gmail.com">vladislavgucci@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="github icon"/>
                    <a href="https://github.com/rsteddd">github</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="email icon"/>
                    <a href="https://www.linkedin.com/in/vladislav-hriazin-6b9774248/">linkedin</a>
                </li>
            </ul>
        </footer>
    );
};

