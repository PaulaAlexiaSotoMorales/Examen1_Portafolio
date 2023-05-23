import React from 'react';
import { Carousel } from 'react-bootstrap';
 
const TextCarousel = () => {
  return (
    
    <Carousel fade>
     
      <Carousel.Item>
        <div className='titulo'>Repositorios</div>
        <p className='titulos'>Examen1_Portafolio</p>
      </Carousel.Item>
      <Carousel.Item>
      <div className='titulo'>Repositorios</div>
        <p className='titulos'>Prueba1</p>
      </Carousel.Item>
      <Carousel.Item>
      <div className='titulo'>Repositorios</div>
        <p className='titulos'>Examen1</p>
      </Carousel.Item>
      <Carousel.Item>
      <div className='titulo'>Repositorios</div>
        <p className='titulos'>Tarea2</p>
      </Carousel.Item>
      <Carousel.Item>
      <div className='titulo'>Repositorios</div>
        <p className='titulos'>TareaProgramada</p>
      </Carousel.Item>
      <Carousel.Item>
      <div className='titulo'>Repositorios</div>
        <p className='titulos'>Asignacion1</p>
      </Carousel.Item>
      
    </Carousel>
  );
};

export default TextCarousel;
