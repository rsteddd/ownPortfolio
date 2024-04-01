import React from 'react';
import {getImageUrl} from "../../utils.js";
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Vladyslav</h1>
                <p className={styles.description}>junior web developer on React,
                    I have six months of experience in the development of web applications,
                    the use of Typescript and the React library</p>
            </div>
                <img src={getImageUrl("hero/HeroImages.png")} alt="hero image" className={styles.heroImg}/>
                <div className={styles.topBlur}></div>
                <div className={styles.bottomBlur}></div>

        </section>
    );
};

