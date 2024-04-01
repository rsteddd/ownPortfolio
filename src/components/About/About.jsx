import React from 'react';
import {getImageUrl} from "../../utils.js";
import styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImages.png")}
                     alt="about me"
                     className={styles.aboutImage}/>

                <ul  className={styles.aboutItems}>
                    <li  className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")}
                             alt="Cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                        <p>I want to develop in the field of frontend or full stack Complete various and interesting tasks to gain invaluable experience</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I practice creating various mini-projects to improve my knowledge, I use the MERN Stack</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

