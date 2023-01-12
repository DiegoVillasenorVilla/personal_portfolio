import React from 'react';
import { ButtonLink } from '../buttonLink/ButtonLink';
import { ImageHover } from '../imageHover/ImageHover';
import programmer from '../../assets/programmer.jpg';
import './Body.css';

const images = [programmer] 

export const Body = () => {
    return (
        <section className="body-section">
            <div className="body-main_container">
               <h1>Projects</h1>
               <ButtonLink label="Contact Me"/>
            </div>
            <div className='body-images_container'>
               <ImageHover images={images} position={0} projectName="Netflix" technologies="HTML CSS" />
            </div>
        </section>
    );
};

