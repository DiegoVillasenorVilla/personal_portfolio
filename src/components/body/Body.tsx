import React from 'react';
import { ButtonLink } from '../buttonLink/ButtonLink';
import { ImageHover } from '../imageHover/ImageHover';
import { Buscaminas, Canva, ChatGPT, Facebook, Youtube, Netflix } from '../../assets';
import './Body.css';

const images = [Buscaminas, Canva, ChatGPT, Facebook, Youtube, Netflix] 

export const Body = () => {
    return (
        <section className="body-section">
            <div className="body-main_container">
               <h1>Projects</h1>
               <ButtonLink label="Contact Me"/>
            </div>
            <div className='body-images_container'>
               <ImageHover images={images} position={0} projectName="Funny Retro Videogame" technologies="HTML  CSS  Javascript" />
               <ImageHover images={images} position={1} projectName="Desing Platform" technologies="HTML  CSS  Javascript" />
               <ImageHover images={images} position={2} projectName="AI Chat" technologies="HTML  CSS  Javascript" />
               <ImageHover images={images} position={3} projectName="Social Media" technologies="HTML  CSS  Javascript" />
               <ImageHover images={images} position={4} projectName="Video platform web site" technologies="HTML  CSS  Javascript" />
               <ImageHover images={images} position={5} projectName="Streaming platform" technologies="HTML  CSS  Javascript" />
            </div>
        </section>
    );
};

