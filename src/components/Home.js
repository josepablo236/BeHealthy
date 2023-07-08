import React from 'react';
import Comida from '../img/comida.svg';
import Health from '../img/health.svg';
import Presentacion from '../img/presentacion.jpeg';
import Ejercicio1 from '../img/ejercicio1.svg';
import Comida1 from '../img/comida1.svg';
import Redes from '../components/Redes';
import Footer from '../components/Footer';
import Carrusel from '../components/Carrusel';
import NavBar from '../components/NavBar';
import DownloadModal from './DownloadModal';

const Home = () => {
    return ( 
        <div>
            <NavBar/>
            <header className="fluid">
                <div className="container-sm contenedor">
                    <h1 className="titulo">Be Healthy</h1>
                    <h3>Corazón, alma y voluntad</h3>
                </div>
            </header>

            <div className='container mb-4'>
                <div className="row titulo-contenedor">
                    <h1 className="titulo-seccion">Sobre mí</h1>
                </div>
                <div className="row center">
                    <div className="card mb-3 sobremi">
                        <div className="row g-0 cv">
                            <div className="col-md-4">
                                <img src={Presentacion} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title center">¡Hola, bienvenida a Be Healthy!</h5>
                                    <p className="text-justify"> 
                                    Mi nombre es Mabel Montejo de Orellana, mujer emprendedora, esposa, madre y nutricionista clínica egresada de Atlantic Internarional University (AIU)  2020.
                                    </p>
                                    <p className="card-text text-justify">  
                                    Como profesional cuento con las siguientes certificaciones: 
                                    </p>
                                    <ul>
                                        <li>Certificada en Lactancia Materna UNICEF 2018.</li>
                                        <li>Certificada en Alimentación 0 Dietas 2022 De Coaching Nutritional Barcelona.</li>
                                        <li>Certificada en Lactancia y Embarazo.</li>
                                        <li>Coaching Nutricional para padres y niños (nutrición infantil).</li>
                                        <li>Certificada en Suplementacion Endógena de Coaching Nutritional Barcelona 2023.</li>
                                    </ul>
                                    <p className="card-text text-justify"> 
                                    Soy fundadora de Be healthy con el fin de poder formar una comunidad saludable, con información accesible por medio de asesorías nutricionales 100% online.
                                    </p>
                                    {/* <p className="card-text center"><small className="text-muted">Contáctame</small></p> */}
                                    <a className="card-text center nav-link text-muted" href="contacto">Contáctame</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mb-4'>
                <div className="row center">
                    <div className="card mb-3 beHealthy">
                        <div className="card-body">
                            <h5 className="card-title center">¿Qué es Be Healthy?</h5>
                            <p className="text-justify">
                            Be Healthy es una página de salud donde encontrarás asesorías nutricionales, tips y consejos para mejorar tu salud y bienestar, asesoría y venta suplementos nutricionales, recetas saludables, información para madres y padres de familia. Todo 100% enfocado y personalizado para tí.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <DownloadModal/>

            <div className="container mb-4">
                <div className="row titulo-contenedor">
                    <h1 className="titulo-seccion">Aquí encontrarás</h1>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 pasos">
                        <p className="paso">Recetas y productos nutricionales</p>
                        <img src={Comida1} width="80%" alt="Camara" className="imagen-pasos"/>
                    </div>
                    <div className="col-sm-6 col-md-4 pasos">
                        <p className="paso">Tips nutricionales</p>
                        <img src={Health} width="80%" alt="Camara" className="imagen-pasos"/>
                    </div>
                    <div className="col-sm-6 col-md-4 pasos">
                        <p className="paso">Retos y consejos Fitness</p>
                        <img src={Ejercicio1} width="80%" alt="Camara" className="imagen-pasos"/>
                    </div>
                </div>
            </div>

            <div className='container mb-4'>
                <div className="row titulo-contenedor">
                    <h1 className="titulo-seccion">Servicios</h1>
                </div>
                <Carrusel/>
            </div>
            <Redes/>
            <Footer/>
        </div>
     );
}
 
export default Home;