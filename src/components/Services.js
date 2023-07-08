import React, {Fragment, useEffect, useState} from 'react';
import NavBar from './NavBar';
import Redes from './Redes';
import Footer from './Footer';
import DownloadModal from './DownloadModal';
import Servicios from '../arch/Servicios.json';
import Service from './Service';


const Services = () => {

    return ( 
      <Fragment>
        <div className='container'>
            <NavBar/>
            <div className="row titulo-contenedor">
                <h1 className="titulo-seccion">Servicios</h1>
            </div>
            <DownloadModal/>
            <div className='row'>
                {
                    Servicios.map((item) =>(
                        <Service key={item.img} data={item}/>
                    ))
                }
            </div>
        </div>
        <Redes/>
        <Footer/>
      </Fragment>
     );
}
 
export default Services;